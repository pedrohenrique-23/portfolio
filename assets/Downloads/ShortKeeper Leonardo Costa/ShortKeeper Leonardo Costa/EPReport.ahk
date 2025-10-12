;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;
; File Name: EPReport.ahk
; WinXP and up
; Tested with AutoHotkey v1.1.09.02
;
; Author: Denis Lamarre, Cedeq
;
; Mar 09, 2020: Label font default -> 8
; Feb 28, 2020: Label "Enterpad (key) in process" now "EP - key"
; Feb 06, 2020: No longer trying to link an Enterpad when a DEVICECHANGE message is received and the session is locked
; Aug 19, 2019; Automatic detection of an Enterpad connection
; Mar 31, 2017: Progress bar removed
; Feb 12, 2016: Progress bar content modified
; Dec 04, 2015: Commented out the warning if the Enterpad is not present at start
; May 12, 2014: Commented out Dll and Enterpad missing messages if epAllowScriptWithoutEnterpad
; Apr 22, 2014: "epAllowScriptWithoutEnterpad := true" allows the script without the enterpad
; Mar 05, 2014: Border of the progress bar removed
; Feb 16, 2014: Progress bar added
; Jan 12, 2014: Better Sleep/Resume management
;
;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
;
; This software is provided “as is” by the author. No warranties,
; whether express, implied or statutory, including, but not limited
; to, implied warranties of merchantability and fitness for a
; particular purpose apply to this software. The author shall not,
; in any circumstances, be liable for special, incidental or
; consequential damages, for any reason whatsoever.
;
;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

#Persistent
OnExit("ExitFunc")

epEnterpadLinkedToThisScript := false
epSessionNotificationRegistred := false
epSessionLocked := false
epHandleDllEnterpad = 0

epEnterpadLinkBroken := "Whoops! The Enterpad link has been broken. "
epScriptWillContinue := "Restart the shortcut processor to create a new link."

OnMessage(0x0218, "POWERBROADCAST")
OnMessage(0x219, "DEVICECHANGE")

if A_OSVersion not in WIN_2003,WIN_XP,WIN_2000
{
  epHW_ahk := DllCall("FindWindowEx", "uint", 0, "uint", 0, "str", "AutoHotkey", "str", a_ScriptFullPath " - AutoHotkey v" a_AhkVersion )
  OnMessage( 0x02B1, "Handle_WTSSESSION_CHANGE" )
  epSessionNotificationRegistred := DllCall( "wtsapi32.dll\WTSRegisterSessionNotification", "uint", epHW_ahk, "uint", 0x0 )
}

if (A_PtrSize < 5)
  epPathDllEnterpad := A_ScriptDir . "\Enterpad_32.dll"
else
  epPathDllEnterpad := A_ScriptDir . "\Enterpad_64.dll"

CreateEnterpadLink()

return

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

DEVICECHANGE(wParam, lParam, msg, hwnd){

  Global epEnterpadLinkedToThisScript
  Global epSessionLocked

  if (!epEnterpadLinkedToThisScript && !epSessionLocked)
  {
    CreateEnterpadLink()
  }

} 

POWERBROADCAST(wParam, lParam, msg, hwnd){ 

  Global epEnterpadLinkedToThisScript
 
  If (epEnterpadLinkedToThisScript){
    If (wParam = 0x04){
      SetTimer Enterpad_peek, Off
    }
    Else If (wParam = 0x12){
      SetTimer Enterpad_peek, On
    }
  }
  ;
  ;
  ;If needed, add custom "Power Notifications" code here
  ;
  ;

  Return True ;True is needed

}

Handle_WTSSESSION_CHANGE( epW, epL, epM, epHW ){

  Global epSessionLocked

  if ( epW = 0x2 OR epW = 0x7)
  {
    CloseEnterpadLink()
    epSessionLocked := true
  }
  Else If ( epW = 0x1 OR epW = 0x8)
  {
    CreateEnterpadLink()
    epSessionLocked := false
  }

  ;
  ;
  ;If needed, add custom "Session Notifications" code here (Vista and up only)
  ;
  ;

}

CreateEnterpadLink(){

  Global epPathDllEnterpad
  Global epHandleDllEnterpad
  Global epEnterpadLinkedToThisScript

  if (!epHandleDllEnterpad){
    epHandleDllEnterpad := DllCall("LoadLibrary", "str", epPathDllEnterpad)
  }

  if (epHandleDllEnterpad)
  {
    if (DllCall(epPathDllEnterpad . "\ReadStatus", "Cdecl Int") == 3)
    {
      DllCall(epPathDllEnterpad . "\ResetEnterpad", "Cdecl Int")
      epEnterpadLinkedToThisScript := true
      Menu, Tray, Icon, %A_ScriptDir%\\EnterpadOn.ico
      SetTimer Enterpad_peek, 250
    }
    else ; Missing Enterpad
    {
      DllCall("FreeLibrary", "UInt", epHandleDllEnterpad)
      epHandleDllEnterpad := 0
    }
  }
}

CloseEnterpadLink(){

  Global epPathDllEnterpad
  Global epHandleDllEnterpad
  Global epEnterpadLinkedToThisScript

  if (epEnterpadLinkedToThisScript){
    SetTimer Enterpad_peek, Off
    epEnterpadLinkedToThisScript := false
    DllCall(epPathDllEnterpad . "\ResetEnterpad", "Cdecl Int")
  }

  if (epHandleDllEnterpad){
    DllCall("FreeLibrary", "UInt", epHandleDllEnterpad)
    epHandleDllEnterpad := 0
  }

  Menu, Tray, Icon, %A_ScriptDir%\\Enterpad.ico
}

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

ExitFunc(){

  Global epHW_ahk
  Global epSessionNotificationRegistred

  CloseEnterpadLink()

  if (epSessionNotificationRegistred){
    DllCall("Wtsapi32.dll\WTSUnRegisterSessionNotification", "uint", epHW_ahk)
  }

  ;
  ;
  ;If needed, add custom cleanup code here
  ;
  ;

}

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Enterpad_peek:

  epReport_Enterpad := DllCall(epPathDllEnterpad . "\ReadReportInt", "Cdecl Int")
  if (epReport_Enterpad = -1){
    CloseEnterpadLink()
    Return
  }

  epReport_Enterpad_Label := "ep_s" epReport_Enterpad
  if IsLabel(epReport_Enterpad_Label){
    SplashImage,,ZH0 B1 Y60 W100 FS8 WS1000 CW000080 CTFFFFFF, EP - %epReport_Enterpad%
    gosub %epReport_Enterpad_Label%
    Sleep, 200
    SplashImage, Off
  }
  
  return

;+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

