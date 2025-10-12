#NoEnv
#ErrorStdOut
#SingleInstance force
Menu, Tray, NoStandard
Menu, Tray, Add , Stop AutoHotkey, ep_TrayExit
Menu, Tray, Add , Reload AutoHotkey, ep_TrayReload
Menu, Tray, Add , Start ShortKeeper, ep_TrayEdit
Menu, Tray, Icon, %A_ScriptDir%\Enterpad.ico
Menu, Tray, Default, Start ShortKeeper
#Include AutoExec.ahk
#Include EPReport.ahk


^F1:: ;Ctrl+F1
ep_s1:
try ep_f1()
catch e
ep_ShowError(1, A_LineNumber, e )
return
ep_f1()
{
Critical
SendInput {Text}
(
Boa noite
)
}


^F3:: ;Ctrl+F3
ep_s2:
try ep_f2()
catch e
ep_ShowError(2, A_LineNumber, e )
return
ep_f2()
{
Critical
SendInput {Text}
(
Disponha!
)
}


^F2:: ;Ctrl+F2
ep_s3:
try ep_f3()
catch e
ep_ShowError(3, A_LineNumber, e )
return
ep_f3()
{
Critical
SendInput {Text}
(
Vou verificar, aguarde um momento, por favor.
)
}


^F4:: ;Ctrl+F4
ep_s4:
try ep_f4()
catch e
ep_ShowError(4, A_LineNumber, e )
return
ep_f4()
{
Critical
SendInput {Text}
(
Essa PON está normal, mas o cliente está sem sinal de fibra. Pode encaminhar visita técnica ao local, por favor.
)
}


^F7:: ;Ctrl+F7
ep_s5:
try ep_f5()
catch e
ep_ShowError(5, A_LineNumber, e )
return
ep_f5()
{
Critical
SendInput {Text}
(
Pode enviar a visita técnica no local, por favor.
)
}


^F5:: ;Ctrl+F5
ep_s6:
try ep_f6()
catch e
ep_ShowError(6, A_LineNumber, e )
return
ep_f6()
{
Critical
SendInput {Text}
(
Pode encaminhar uma visita técnica ao local para reparo do cabo drop, por favor.
)
}


^F8:: ;Ctrl+F8
ep_s7:
try ep_f7()
catch e
ep_ShowError(7, A_LineNumber, e )
return
ep_f7()
{
Critical
SendInput {Text}
(
Atendimento PENDENTE/TRANSFERIDO.
)
}


^F12:: ;Ctrl+F12
ep_s8:
try ep_f8()
catch e
ep_ShowError(8, A_LineNumber, e )
return
ep_f8()
{
Critical
SendInput {Text}
(
Atenciosamente, Eduarda Nascimento

)
}


^U:: ;Ctrl+U
ep_s9:
try ep_f9()
catch e
ep_ShowError(9, A_LineNumber, e )
return
ep_f9()
{
Critical
SendInput {Text}
(
atr210@rt1
)
}


!T:: ;Alt+T
ep_s10:
try ep_f10()
catch e
ep_ShowError(10, A_LineNumber, e )
return
ep_f10()
{
Critical
SendInput {Text}
(
Olá, identificamos em sistema que você está em ligação por mais de 30 min. Caso precise de ajuda estou à disposição!
)
}


!C:: ;Alt+C
ep_s11:
try ep_f11()
catch e
ep_ShowError(11, A_LineNumber, e )
return
ep_f11()
{
Critical
SendInput {Text}
(
Olá, identificamos em sistema que você está com o atendimento: em curso por mais de 01h. Caso precise de ajuda estou à disposição!
)
}


!D:: ;Alt+D
ep_s12:
try ep_f12()
catch e
ep_ShowError(12, A_LineNumber, e )
return
ep_f12()
{
Critical
SendInput {Text}
(
Envie o caso para o setor financeiro via e-mail e deixe o protocolo em sistema no grupo Financeiro, por favor.  
)
}


!P:: ;Alt+P
ep_s13:
try ep_f13()
catch e
ep_ShowError(13, A_LineNumber, e )
return
ep_f13()
{
Critical
SendInput {Text}
(
Olá, identificamos em sistema que você está na pausa de planilha por mais de 08 min. Caso precise de ajuda estou à disposição!
)
}


!V:: ;Alt+V
ep_s14:
try ep_f14()
catch e
ep_ShowError(14, A_LineNumber, e )
return
ep_f14()
{
Critical
SendInput {Text}
(
Recadastrei a VLAN, reinicie e veja se normaliza, por favor. Se não normalizar podemos resetar se o cliente desejar, ou visita se ele não quiser resetar.
)
}


^F6:: ;Ctrl+F6
ep_s15:
try ep_f15()
catch e
ep_ShowError(15, A_LineNumber, e )
return
ep_f15()
{
Critical
SendInput {Text}
(
Vou repassar aos responsáveis sobre os cabos danificados, pode concluir o seu protocolo, por favor. Obrigado por informar!
)
}


!F:: ;Alt+F
ep_s16:
try ep_f16()
catch e
ep_ShowError(16, A_LineNumber, e )
return
ep_f16()
{
Critical
SendInput {Text}
(
Encaminhe o caso via formulário ao financeiro e conclua o seu protocolo, por favor. Deixe o cliente ciente do prazo de até 72h para conclusão da verificação.
)
}


^M:: ;Ctrl+M
ep_s17:
try ep_f17()
catch e
ep_ShowError(17, A_LineNumber, e )
return
ep_f17()
{
Critical
SendInput {Text}
(
c0ntr0le@ncc
)
}


^F11:: ;Ctrl+F11
ep_s18:
try ep_f18()
catch e
ep_ShowError(18, A_LineNumber, e )
return
ep_f18()
{
Critical
SendInput {Text}
(
Oi amg, só pra reforçar que como há operador em atendimento agora é importante evitar conversas em um tom mais alto para que não acabe interferindo no atendimento dele, por favor. 

)
}


^F10:: ;Ctrl+F10
ep_s19:
try ep_f19()
catch e
ep_ShowError(19, A_LineNumber, e )
return
ep_f19()
{
Critical
SendInput {Text}
(
Oi amigo, boa noite! Sistema notificou que vc saiu para a pausa às 19:47h, porém o horário definido em escala era às 19:35h. Só reforçando que em casos de atraso é importante nos notificar para que possamos ter o controle da quantidade de operadores que saem para o intervalo ao mesmo tempo.
)
}


^F9:: ;Ctrl+F9
ep_s20:
try ep_f20()
catch e
ep_ShowError(20, A_LineNumber, e )
return
ep_f20()
{
Critical
SendInput {Text}
(
NCC CE

Em XX/07 às XX:XX - 

**Possível problema externo**


Informar prazo até XX:XXh | Concluir protocolos

Atenciosamente, Leonardo Costa
)
}


ep_ShowError(No, Line, e)
{
FileName := e.file
SplitPath, FileName, FileName
if (Line < A_LineNumber && FileName = "ShortKeeper.ahk")
  msgbox % "Error with shortcut " No ", Line " e.Line-Line-3 "`n`n" e.What ", " e.Message ", " e.Extra
else
  msgbox % "Error with shortcut " No "`n`n" e.What ", " e.Message ", " e.Extra "`n`n" e.File " (Line " e.Line ")"
}

ep_TrayEdit:
  run ShortKeeper.exe
return

ep_TrayReload:
  reload
return

ep_TrayExit:
  ExitApp

#Include Functions.ahk

