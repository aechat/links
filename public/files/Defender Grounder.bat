@echo off
net session >nul 2>&1 || (powershell -Command "Start-Process '%~f0' -Verb RunAs" & exit /b)
set "ps=%TEMP%\~dgr-%RANDOM%.ps1"
powershell -NoProfile -Command "$f=Get-Content '%~f0' -Encoding UTF8;$i=[Array]::IndexOf($f,':PS_START');if($i-ge 0){$f[($i+1)..($f.Length-1)]|Set-Content '%ps%' -Encoding UTF8}"
powershell -NoProfile -ExecutionPolicy Bypass -File "%ps%"
del "%ps%" 2>nul
exit /b
:PS_START
$ErrorActionPreference = 'Continue'
$log = Join-Path $env:TEMP 'defender-grounder.log'
$version = '0.2'
"=== Grounder run at $(Get-Date) ===" | Out-File $log -Encoding UTF8

$isRu = (Get-UICulture).TwoLetterISOLanguageName -eq 'ru'
try { [Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding((Get-WinSystemLocale).TextInfo.OEMCodePage) } catch { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 }
function msg($en, $ru) { if ($isRu) { $ru } else { $en } }

$isWin11 = [Environment]::OSVersion.Version.Build -ge 22000
$isWin10 = [Environment]::OSVersion.Version.Major -eq 10 -and -not $isWin11

$tamper = $false
try { $tamper = (Get-MpComputerStatus -ErrorAction Stop).IsTamperProtected } catch {}

function Draw-Box($lines, $bg = 'Red', $fg = 'Black', $width = 0) {
    if ($width -eq 0) {
        $width = 78
        try {
            if ($Host.UI.RawUI.WindowSize.Width -gt 20) {
                $winWidth = $Host.UI.RawUI.WindowSize.Width - 6
                if ($winWidth -lt $width) {
                    $width = $winWidth
                }
            }
        } catch {}
    }
    $e = [char]27
    $bgCode = '41'
    if ($bg -eq 'Yellow') { $bgCode = '43' }
    $fgCode = '30'
    if ($fg -eq 'White') { $fgCode = '37' }
    
    $colorStart = "$e[${bgCode};${fgCode}m"
    $colorReset = "$e[0m"
    
    $border = "┌" + ("─" * ($width - 2)) + "┐"
    Write-Host "  ${colorStart}${border}${colorReset}"
    
    foreach ($line in $lines) {
        if ($line -eq "") {
            $spaces = " " * ($width - 2)
            Write-Host "  ${colorStart}│${spaces}│${colorReset}"
            continue
        }
        
        $rem = $line
        while ($rem.Length -gt 0) {
            $maxLen = $width - 6
            $chunk = ""
            if ($rem.Length -le $maxLen) {
                $chunk = $rem
                $rem = ""
            } else {
                $chunk = $rem.Substring(0, $maxLen)
                $lastSpace = $chunk.LastIndexOf(' ')
                if ($lastSpace -ge 0) {
                    $chunk = $rem.Substring(0, $lastSpace)
                    $rem = $rem.Substring($lastSpace + 1)
                } else {
                    $chunk = $rem.Substring(0, $maxLen)
                    $rem = $rem.Substring($maxLen)
                }
            }
            
            $pad = $width - 4 - $chunk.Length
            $padSpaces = " " * $pad
            Write-Host "  ${colorStart}│  ${chunk}${padSpaces}│${colorReset}"
        }
    }
    
    $bottomBorder = "└" + ("─" * ($width - 2)) + "┘"
    Write-Host "  ${colorStart}${bottomBorder}${colorReset}"
}

function Try-Run($name, $script) {
    "--- $name ---" | Out-File $log -Append -Encoding UTF8
    try {
        & $script *>&1 | Out-File $log -Append -Encoding UTF8
        "[OK] $name" | Out-File $log -Append -Encoding UTF8
    } catch {
        "[ERR] $name : $_" | Out-File $log -Append -Encoding UTF8
        Write-Host "  [ERR] $name : $_" -ForegroundColor Red
    }
}

while ($true) {
    Clear-Host
    try { $tamper = (Get-MpComputerStatus -ErrorAction Stop).IsTamperProtected } catch {}
    
    $sacState = -1
    $sacPath = 'HKLM:\SYSTEM\CurrentControlSet\Control\CI\Policy'
    if (Test-Path $sacPath) {
        try { $sacState = (Get-ItemProperty $sacPath -Name VerifiedAndReputablePolicyState -EA SilentlyContinue).VerifiedAndReputablePolicyState } catch {}
    }
    
    $s = $null
    $p = $null
    try {
        $s = Get-MpComputerStatus -ErrorAction Stop
        $p = Get-MpPreference -ErrorAction Stop
    } catch {}
    
    if ($null -eq $s -or $null -eq $p) {
        $noDefenderText = @(
            $(msg 'Failed to read Windows Defender status.' 'Не удаётся прочитать состояние Windows Defender.'),
            $(msg 'Windows Defender might be removed from your system.' 'Возможно, Windows Defender вырезан из вашей системы.')
        )
        Write-Host ""
        Draw-Box $noDefenderText 'Yellow' 'Black'
        Write-Host ""
        Write-Host "  $(msg 'Do you want to continue anyway?' 'Всё равно продолжить?')" -ForegroundColor Yellow
        Write-Host "  $(msg 'Press «Enter» to continue or any other key to exit.' 'Нажмите «Enter» для продолжения или любую другую клавишу для выхода.')" -ForegroundColor Yellow
        $confirm = [Console]::ReadKey($true)
        if ($confirm.Key -ne 'Enter') {
            exit
        }
        Clear-Host
    }
    
    if ($null -ne $s -and $null -ne $p) {
        $spynetPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet'
        $puaPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender'
        $rtPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection'
        $npPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard\Network Protection'
        $cfaPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard\Controlled Folder Access'

        $realtimeDisabled = (-not $s.RealTimeProtectionEnabled)
        if (-not $realtimeDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $rtPath -Name DisableRealtimeMonitoring -EA Stop).DisableRealtimeMonitoring -eq 1) { $realtimeDisabled = $true } } catch {}
        }

        $behaviorDisabled = (-not $s.BehaviorMonitorEnabled)
        if (-not $behaviorDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $rtPath -Name DisableBehaviorMonitoring -EA Stop).DisableBehaviorMonitoring -eq 1) { $behaviorDisabled = $true } } catch {}
        }

        $ioavDisabled = (-not $s.IoavProtectionEnabled)
        if (-not $ioavDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $rtPath -Name DisableIOAVProtection -EA Stop).DisableIOAVProtection -eq 1) { $ioavDisabled = $true } } catch {}
        }

        $scriptScanDisabled = [bool]$p.DisableScriptScanning
        if (-not $scriptScanDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $rtPath -Name DisableScriptScanning -EA Stop).DisableScriptScanning -eq 1) { $scriptScanDisabled = $true } } catch {}
        }

        $blockAtFirstDisabled = [bool]$p.DisableBlockAtFirstSeen
        if (-not $blockAtFirstDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $rtPath -Name DisableBlockAtFirstSeen -EA Stop).DisableBlockAtFirstSeen -eq 1) { $blockAtFirstDisabled = $true } } catch {}
        }

        $mapsDisabled = ($p.MAPSReporting -in @(0, 'Disabled'))
        if (-not $mapsDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $spynetPath -Name SpynetReporting -EA Stop).SpynetReporting -eq 0) { $mapsDisabled = $true } } catch {}
        }

        $samplesDisabled = ($p.SubmitSamplesConsent -in @(2, 'NeverSend', 0, 'AlwaysPrompt'))
        if (-not $samplesDisabled -and -not $tamper) {
            try {
                $sscVal = (Get-ItemProperty $spynetPath -Name SubmitSamplesConsent -EA Stop).SubmitSamplesConsent
                if ($sscVal -eq 2 -or $sscVal -eq 0) { $samplesDisabled = $true }
            } catch {}
        }

        $puaDisabled = ($p.PUAProtection -in @(0, 'Disabled'))
        if (-not $puaDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $puaPath -Name PUAProtection -EA Stop).PUAProtection -eq 0) { $puaDisabled = $true } } catch {}
        }

        $networkDisabled = ($p.EnableNetworkProtection -in @(0, 'Disabled'))
        if (-not $networkDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $npPath -Name EnableNetworkProtection -EA Stop).EnableNetworkProtection -eq 0) { $networkDisabled = $true } } catch {}
        }

        $folderDisabled = ($p.EnableControlledFolderAccess -in @(0, 'Disabled'))
        if (-not $folderDisabled -and -not $tamper) {
            try { if ((Get-ItemProperty $cfaPath -Name EnableControlledFolderAccess -EA Stop).EnableControlledFolderAccess -eq 0) { $folderDisabled = $true } } catch {}
        }

        Write-Host ""
        Write-Host "  $(msg 'Current Protection Status:' 'Текущее состояние защиты:')" -ForegroundColor Cyan
        Write-Host "  --------------------------------------------------" -ForegroundColor Cyan
        
        Write-Host "  - $(msg 'Tamper Protection:' 'Защита от подделки:') " -NoNewline
        if ($tamper) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
        Write-Host "  --------------------------------------------------" -ForegroundColor Cyan

        Write-Host "  - $(msg 'Real-time protection:' 'Защита в реальном времени:') " -NoNewline
        if (-not $realtimeDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
    
        Write-Host "  - $(msg 'Behavior monitoring:' 'Поведенческий мониторинг:') " -NoNewline
        if (-not $behaviorDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
    
        Write-Host "  - $(msg 'IOAV protection:' 'Проверка скачиваемых файлов и вложений IOAV:') " -NoNewline
        if (-not $ioavDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
    
        Write-Host "  - $(msg 'Script scanning:' 'Сканирование скриптов:') " -NoNewline
        if (-not $scriptScanDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }

        Write-Host "  - $(msg 'Block at First Seen:' 'Блокировка при первом появлении:') " -NoNewline
        if (-not $blockAtFirstDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }

        Write-Host "  - $(msg 'Cloud-delivered protection:' 'Облачная защита:') " -NoNewline
        if (-not $mapsDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }

        Write-Host "  - $(msg 'Automatic sample submission:' 'Автоматическая отправка образцов:') " -NoNewline
        if (-not $samplesDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
    
        Write-Host "  - $(msg 'SmartScreen:' 'SmartScreen:') " -NoNewline
        $ssEnabled = $true
        try {
            $ssVal = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer' -Name SmartScreenEnabled -EA SilentlyContinue).SmartScreenEnabled
            $ssPol = (Get-ItemProperty 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\System' -Name EnableSmartScreen -EA SilentlyContinue).EnableSmartScreen
            if ($ssVal -eq 'Off' -or $ssPol -eq 0) { $ssEnabled = $false }
        } catch {}
        if ($ssEnabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
    
        Write-Host "  - $(msg 'Smart App Control:' 'Интеллектуальное управление приложениями:') " -NoNewline
        if ($sacState -eq 1) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } elseif ($sacState -eq 2) {
            Write-Host "[$(msg 'EVALUATION' 'ОЦЕНКА')]" -ForegroundColor Yellow
        } elseif ($sacState -eq 0) {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        } else {
            Write-Host "[$(msg 'NOT PRESENT' 'ОТСУТСТВУЕТ')]" -ForegroundColor Gray
        }

        Write-Host "  - $(msg 'PUA protection:' 'Защита от потенциально нежелательных программ:') " -NoNewline
        if (-not $puaDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }

        Write-Host "  - $(msg 'Network protection:' 'Сетевая защита:') " -NoNewline
        if (-not $networkDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }

        Write-Host "  - $(msg 'Controlled Folder Access:' 'Контролируемый доступ к папкам:') " -NoNewline
        if (-not $folderDisabled) {
            Write-Host "[$(msg 'ENABLED' 'ВКЛЮЧЕНО')]" -ForegroundColor Green
        } else {
            Write-Host "[$(msg 'DISABLED' 'ОТКЛЮЧЕНО')]" -ForegroundColor Red
        }
        Write-Host ""
    }
    
    Write-Host "  $(msg "Windows Defender Grounder $version" "Заземлитель Windows Defender $version")" -ForegroundColor Cyan
    Write-Host "  --------------------------------------------------" -ForegroundColor Cyan
    Write-Host "  [0] $(msg 'Disable protection' 'Отключить защиту')"
    Write-Host "  [1] $(msg 'Enable protection' 'Включить защиту')"
    Write-Host ""
    Write-Host "  $(msg 'Select an action [0/1]:' 'Выберите действие [0/1]:') " -NoNewline
    $choice = [Console]::ReadKey($true).KeyChar.ToString()
    Write-Host $choice
    
    $disableSac = $false
    
    if ($choice -eq '0') {
        Write-Host "  $(msg 'Selected: 0 (Disable)' 'Выбрано: 0 (Отключить)')" -ForegroundColor Red
        Write-Host ""
        
        $allDisabled = $false
        if ($null -ne $s -and $null -ne $p) {
            $allDisabled = ($realtimeDisabled -and $behaviorDisabled -and $ioavDisabled -and $scriptScanDisabled -and $blockAtFirstDisabled -and $mapsDisabled -and $samplesDisabled -and $puaDisabled -and $networkDisabled -and $folderDisabled -and (-not $ssEnabled))
        }
        
        if ($allDisabled) {
            Write-Host "  $(msg 'Protection is already disabled. Do you want to continue anyway?' 'У вас и так отключена защита. Всё равно продолжить?')" -ForegroundColor Yellow
            Write-Host "  $(msg 'Press «Enter» to continue or any other key to return to the main menu.' 'Нажмите «Enter» для продолжения или любую другую клавишу для возврата на главную страницу.')" -ForegroundColor Yellow
            $confirm = [Console]::ReadKey($true)
            if ($confirm.Key -ne 'Enter') {
                Write-Host "  $(msg 'Cancelled.' 'Отменено.')" -ForegroundColor Red
                Start-Sleep -Seconds 1
                continue
            }
        } else {
            $warningText = @(
                $(msg 'PROCEED WITH CAUTION!' 'ДЕЙСТВУЙТЕ С ОСТОРОЖНОСТЬЮ!'),
                "",
                $(msg 'Disabling antivirus software on this device may harm your mental health and nervous system.' 'Отключение антивирусного ПО на этом устройстве может нанести вред вашему психическому здоровью и нервной системе.'),
                $(msg 'By disabling system protection, you run the risk of malware infection.' 'Отключая защиту системы, вы подвергаете риск заражения устройства вредоносным ПО.')                
            )
            Draw-Box $warningText 'Red' 'Black'
            Write-Host ""
            Write-Host "  $(msg 'If you are sure about your actions, press «Enter» to continue.' 'Если вы уверены в своих действиях над системой — нажмите «Enter» для продолжения.') " -ForegroundColor Yellow
            Write-Host "  $(msg 'If not, press any other key to return to the main menu.' 'Если нет — нажмите любую другую клавишу для возврата на главную страницу.') " -ForegroundColor Yellow
            $confirm = [Console]::ReadKey($true)
            if ($confirm.Key -ne 'Enter') {
                Write-Host "  $(msg 'Cancelled.' 'Отменено.')" -ForegroundColor Red
                Start-Sleep -Seconds 1
                continue
            }
        }
    } elseif ($choice -eq '1') {
        Write-Host "  $(msg 'Selected: 1 (Enable)' 'Выбрано: 1 (Включить)')" -ForegroundColor Green
    } else {
        Write-Host "  $(msg 'Invalid choice.' 'Неверный выбор.')" -ForegroundColor Red
        Start-Sleep -Seconds 1
        continue
    }

    Write-Host ""

    if ($choice -eq '0') {
        if ($tamper) {
            $tamperWarnText = @(
                $(msg 'TAMPER PROTECTION IS ENABLED' 'ЗАЩИТА ОТ ПОДДЕЛКИ ВКЛЮЧЕНА'),
                "",
                $(msg 'Tamper Protection is enabled on your system. Because of this, commands to disable protection may not work as expected.' 'В вашей системе включена защита от подделки. Из-за этого команды по отключению защиты могут работать не так как надо.'),
                $(msg 'For the script to work properly, disable it manually:' 'Для корректной работы скрипта отключите его вручную:'),
                "",
                $(msg '«Windows Security» → «Virus & threat protection» → «Manage settings» under «Virus & threat protection settings» → turn off «Tamper Protection».' '«Безопасность Windows» → «Защита от вирусов и угроз» → «Управление настройками» под «Параметры защиты от вирусов и других угроз» → отключите «Защита от подделки».')
            )
            Draw-Box $tamperWarnText 'Yellow' 'Black'
            Write-Host ""
            Write-Host "  $(msg 'Press «Enter» to continue or any other key to return to the main menu.' 'Нажмите «Enter» для продолжения или любую другую клавишу для возврата на главную страницу.')" -ForegroundColor DarkYellow
            $tamperConfirm = [Console]::ReadKey($true)
            if ($tamperConfirm.Key -ne 'Enter') {
                Write-Host "  $(msg 'Cancelled.' 'Отменено.')" -ForegroundColor Red
                Start-Sleep -Seconds 1
                continue
            }
            Write-Host ""
        }

        if ($sacState -in @(1, 2)) {
            $diagEnabled = $true
            $hvciEnabled = $true
            try {
                $telemetry = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\DataCollection' -Name AllowTelemetry -EA SilentlyContinue).AllowTelemetry
                if ($null -ne $telemetry -and $telemetry -lt 3) { $diagEnabled = $false }
                $hvci = (Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\DeviceGuard\Scenarios\HypervisorEnforcedCodeIntegrity' -Name Enabled -EA SilentlyContinue).Enabled
                if ($hvci -ne 1) { $hvciEnabled = $false }
            } catch {}

            Write-Host ""
            $sacWarnText = @(
                $(msg 'SMART APP CONTROL' 'ИНТЕЛЛЕКТУАЛЬНОЕ УПРАВЛЕНИЕ ПРИЛОЖЕНИЯМИ'),
                "",
                $(msg 'This feature does not completely affect the security of your system, but it may prevent you from running applications from untrusted sources.' 'Эта функция не совсем влияет на безопасность вашей системы, однако она может мешать вам запускать приложения, полученные из недоверенных источников.'),
                "",
                $(msg 'In some Windows builds, disabling it is IRREVERSIBLE! You will not be able to enable it back using standard Windows reinstallation methods.' 'В некоторых сборках Windows его отключение НЕОБРАТИМО! Вы не сможете включить его обратно штатными средствами переустановки Windows.')
            )

            Draw-Box $sacWarnText 'Yellow' 'Black'
            Write-Host ""
            Write-Host "  $(msg 'Do you want to disable Smart App Control too?' 'Отключить интеллектуальное управление приложениями?')" -ForegroundColor DarkYellow
            Write-Host "  $(msg 'Press Enter to disable, any other key to skip...' 'Нажмите «Enter» для отключения или любую другую клавишу, чтобы пропустить.')" -ForegroundColor DarkYellow
            $sacConfirm = [Console]::ReadKey($true)
            if ($sacConfirm.Key -eq 'Enter') {
                $disableSac = $true
                Write-Host "  $(msg 'Selected: Disable Smart App Control' 'Выбрано: «Отключить интеллектуальное управление приложениями»')" -ForegroundColor Red
            } else {
                Write-Host "  $(msg 'Selected: Skip Smart App Control' 'Выбрано: «Пропустить отключение интеллектуального управления приложениями»')" -ForegroundColor Gray
            }
            Write-Host ""
        }

        Write-Host "  $(msg 'Disabling protection...' 'Отключаем защиту...')" -ForegroundColor Cyan

        Try-Run 'Defender realtime off'                 { Set-MpPreference -DisableRealtimeMonitoring $true }
        Try-Run 'Defender IOAV off'                     { Set-MpPreference -DisableIOAVProtection $true }
        Try-Run 'Defender behavior off'                 { Set-MpPreference -DisableBehaviorMonitoring $true }
        Try-Run 'Defender blockatfirst'                 { Set-MpPreference -DisableBlockAtFirstSeen $true }
        Try-Run 'Defender script scan'                  { Set-MpPreference -DisableScriptScanning $true }
        Try-Run 'Defender MAPS off'                     { Set-MpPreference -MAPSReporting Disabled }
        Try-Run 'Defender samples off'                  { Set-MpPreference -SubmitSamplesConsent NeverSend }
        Try-Run 'Defender PUA protection off'           { Set-MpPreference -PUAProtection Disabled }
        Try-Run 'Defender Network protection off'       { Set-MpPreference -EnableNetworkProtection Disabled }
        Try-Run 'Defender Controlled Folder Access off' { Set-MpPreference -EnableControlledFolderAccess Disabled }

        Try-Run 'Defender policy: realtime off' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name DisableRealtimeMonitoring -Value 1 -Type DWord
            Set-ItemProperty -Path $p -Name DisableBehaviorMonitoring -Value 1 -Type DWord
            Set-ItemProperty -Path $p -Name DisableIOAVProtection -Value 1 -Type DWord
            Set-ItemProperty -Path $p -Name DisableScriptScanning -Value 1 -Type DWord
            Set-ItemProperty -Path $p -Name DisableBlockAtFirstSeen -Value 1 -Type DWord
        }
        Try-Run 'Defender policy: Spynet off' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name SubmitSamplesConsent -Value 2 -Type DWord
            Set-ItemProperty -Path $p -Name SpynetReporting -Value 0 -Type DWord
        }
        Try-Run 'Defender policy: PUA off' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name PUAProtection -Value 0 -Type DWord
        }
        Try-Run 'Defender policy: Exploit Guard off' {
            $eg = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard'
            if (-not (Test-Path $eg)) { New-Item -Path $eg -Force | Out-Null }
            $np = "$eg\Network Protection"
            if (-not (Test-Path $np)) { New-Item -Path $np -Force | Out-Null }
            Set-ItemProperty -Path $np -Name EnableNetworkProtection -Value 0 -Type DWord
            $cfa = "$eg\Controlled Folder Access"
            if (-not (Test-Path $cfa)) { New-Item -Path $cfa -Force | Out-Null }
            Set-ItemProperty -Path $cfa -Name EnableControlledFolderAccess -Value 0 -Type DWord
        }

        Try-Run 'SmartScreen Explorer off' {
            $p = 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name SmartScreenEnabled -Value 'Off'
        }
        Try-Run 'SmartScreen System off' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\System'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name EnableSmartScreen -Value 0 -Type DWord
        }
        Try-Run 'SmartScreen Edge off' {
            $p = 'HKCU:\Software\Microsoft\Edge'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name SmartScreenEnabled -Value 0 -Type DWord
        }
        if ($disableSac) {
            Try-Run 'Smart App Control off' {
                Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Control\CI\Policy' -Name VerifiedAndReputablePolicyState -Value 0 -Type DWord
            }
        }

        Try-Run 'Add root exclusions' {
            $existing = @()
            try { $existing = (Get-MpPreference -ErrorAction Stop).ExclusionPath } catch {}
            $drives = [System.IO.DriveInfo]::GetDrives() | Where-Object { $_.IsReady } | ForEach-Object { $_.Name }
            $addedDrives = @()
            $now = [DateTimeOffset]::UtcNow
            $timeStr = $now.ToString('o')
            foreach ($drive in $drives) {
                if ($existing -notcontains $drive) {
                    Add-MpPreference -ExclusionPath $drive
                    $addedDrives += $drive
                }
            }
            if ($addedDrives.Count -gt 0) {
                $regKey = 'HKCU:\Software\DefenderGrounder\Exclusions'
                if (-not (Test-Path $regKey)) { New-Item -Path $regKey -Force | Out-Null }
                foreach ($dr in $addedDrives) {
                    Set-ItemProperty -Path $regKey -Name $dr -Value $timeStr -Force | Out-Null
                }
            }
        }

        '--- VERIFICATION ---' | Out-File $log -Append -Encoding UTF8
        Write-Host ""
        Write-Host "  $(msg 'Checking protection status...' 'Проверяем состояние защиты...')" -ForegroundColor Gray
        Start-Sleep -Seconds 4
        Write-Host "  $(msg 'Verification:' 'Проверка результата:')" -ForegroundColor Cyan

        function CheckDisabled($prefValue, $regPath, $regName, $prefDisabledValues = $null, $regDisabledValues = $null) {
            if ($prefDisabledValues -eq $null) {
                $byPref = [bool]$prefValue
                if ($tamper) { return $byPref }
                $byReg = $false
                try { $byReg = ((Get-ItemProperty $regPath -Name $regName -EA Stop).$regName -eq 1) } catch {}
                return $byPref -or $byReg
            } else {
                $byPref = ($prefValue -in $prefDisabledValues)
                if ($tamper) { return $byPref }
                $byReg = $false
                try {
                    $val = (Get-ItemProperty $regPath -Name $regName -EA Stop).$regName
                    if ($val -in $regDisabledValues) { $byReg = $true }
                } catch {}
                return $byPref -or $byReg
            }
        }

        $rtPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection'
        $spynetPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet'
        $puaPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender'
        $npPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard\Network Protection'
        $cfaPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard\Controlled Folder Access'
        $failed = @()
        try {
            $p = $null
            try { $p = Get-MpPreference -ErrorAction Stop } catch {
                $p = [PSCustomObject]@{
                    DisableRealtimeMonitoring = $true
                    DisableBehaviorMonitoring = $true
                    DisableIOAVProtection = $true
                    DisableScriptScanning = $true
                    DisableBlockAtFirstSeen = $true
                    MAPSReporting = 0
                    SubmitSamplesConsent = 2
                    PUAProtection = 0
                    EnableNetworkProtection = 0
                    EnableControlledFolderAccess = 0
                }
            }
            if (-not (CheckDisabled $p.DisableRealtimeMonitoring    $rtPath 'DisableRealtimeMonitoring'))    { $failed += $(msg 'Real-time protection' 'защиту в реальном времени') }
            if (-not (CheckDisabled $p.DisableBehaviorMonitoring    $rtPath 'DisableBehaviorMonitoring'))    { $failed += $(msg 'Behavior monitoring' 'поведенческий мониторинг') }
            if (-not (CheckDisabled $p.DisableIOAVProtection        $rtPath 'IOAVProtection'))               { $failed += $(msg 'IOAV protection' 'проверку скачиваемых файлов и вложений IOAV') }
            if (-not (CheckDisabled $p.DisableScriptScanning        $rtPath 'DisableScriptScanning'))        { $failed += $(msg 'Script scanning' 'сканирование скриптов') }
            if (-not (CheckDisabled $p.DisableBlockAtFirstSeen      $rtPath 'DisableBlockAtFirstSeen'))      { $failed += $(msg 'Block at First Seen' 'блокировку при первом появлении') }
            
            if (-not (CheckDisabled $p.MAPSReporting                $spynetPath 'SpynetReporting' @(0, 'Disabled') @(0))) { $failed += $(msg 'Cloud-delivered protection' 'облачную защиту') }
            if (-not (CheckDisabled $p.SubmitSamplesConsent         $spynetPath 'SubmitSamplesConsent' @(2, 'NeverSend', 0, 'AlwaysPrompt') @(2, 0))) { $failed += $(msg 'Automatic sample submission' 'автоматическую отправку образцов') }
            if (-not (CheckDisabled $p.PUAProtection                $puaPath 'PUAProtection' @(0, 'Disabled') @(0))) { $failed += $(msg 'PUA protection' 'защиту от потенциально нежелательных программ') }
            if (-not (CheckDisabled $p.EnableNetworkProtection      $npPath 'EnableNetworkProtection' @(0, 'Disabled') @(0))) { $failed += $(msg 'Network protection' 'сетевую защиту') }
            if (-not (CheckDisabled $p.EnableControlledFolderAccess $cfaPath 'EnableControlledFolderAccess' @(0, 'Disabled') @(0))) { $failed += $(msg 'Controlled Folder Access' 'контролируемый доступ к папкам') }

            $ssVal = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer' -Name SmartScreenEnabled -EA SilentlyContinue).SmartScreenEnabled
            $ssPol = (Get-ItemProperty 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\System' -Name EnableSmartScreen -EA SilentlyContinue).EnableSmartScreen
            if ($ssVal -ne 'Off' -and $ssPol -ne 0) { $failed += $(msg 'SmartScreen' 'SmartScreen') }

            if ($disableSac) {
                $sacPol = (Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\CI\Policy' -Name VerifiedAndReputablePolicyState -EA SilentlyContinue).VerifiedAndReputablePolicyState
                if ($sacPol -ne 0) { $failed += $(msg 'Smart App Control' 'Smart App Control') }
            }

            "[STATUS] RT=$($p.DisableRealtimeMonitoring) Behavior=$($p.DisableBehaviorMonitoring) IOAV=$($p.DisableIOAVProtection)" | Out-File $log -Append -Encoding UTF8
        } catch {
            "[STATUS ERR] $_" | Out-File $log -Append -Encoding UTF8
        }

        if ($failed.Count -eq 0) {
            Write-Host "  $(msg 'All protections disabled successfully.' 'Все защиты успешно отключены.')" -ForegroundColor Green
        } else {
            foreach ($f in $failed) {
                Write-Host "  [!] $(msg 'Failed to disable' 'Не удалось отключить'): $f" -ForegroundColor Red
            }
            if ($tamper) {
                Write-Host ""
                Write-Host "  $(msg 'Disable Tamper Protection and run again.' 'Отключите защиту от подделки и запустите скрипт снова.')" -ForegroundColor Yellow
            }
        }
        Write-Host ""
        Write-Host "  $(msg 'Please reboot the PC for all changes to take effect.' 'Рекомендуется перезагрузить устройство, чтобы все изменения вступили в силу.')" -ForegroundColor Yellow
    } else {
        Write-Host "  $(msg 'Enabling protections...' 'Включение защиты...')" -ForegroundColor Cyan

        Try-Run 'Defender policy: remove DisableAntiSpyware' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender'
            if (Test-Path $p) { Remove-ItemProperty -Path $p -Name DisableAntiSpyware -ErrorAction SilentlyContinue }
        }
        Try-Run 'Defender policy: remove realtime keys' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection'
            if (Test-Path $p) {
                Remove-ItemProperty -Path $p -Name DisableRealtimeMonitoring -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p -Name DisableBehaviorMonitoring -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p -Name DisableIOAVProtection -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p -Name DisableScriptScanning -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p -Name DisableBlockAtFirstSeen -ErrorAction SilentlyContinue
            }
        }
        Try-Run 'Defender policy: remove Spynet keys' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet'
            if (Test-Path $p) {
                Remove-ItemProperty -Path $p -Name SubmitSamplesConsent -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p -Name SpynetReporting -ErrorAction SilentlyContinue
            }
        }
        Try-Run 'Defender policy: remove PUA keys' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender'
            if (Test-Path $p) {
                Remove-ItemProperty -Path $p -Name PUAProtection -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p -Name MpEnablePus -ErrorAction SilentlyContinue
            }
            $p2 = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\MpEngine'
            if (Test-Path $p2) {
                Remove-ItemProperty -Path $p2 -Name PUAProtection -ErrorAction SilentlyContinue
                Remove-ItemProperty -Path $p2 -Name MpEnablePus -ErrorAction SilentlyContinue
            }
        }
        Try-Run 'Defender policy: remove Exploit Guard keys' {
            $eg = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard'
            if (Test-Path $eg) {
                Remove-Item -Path $eg -Recurse -Force -ErrorAction SilentlyContinue
            }
        }

        Try-Run 'Restore Defender service' {
            if (Test-Path "$env:ProgramFiles\Windows Defender\MpCmdRun.exe") {
                & "$env:ProgramFiles\Windows Defender\MpCmdRun.exe" -WdEnable | Out-Null
            }
        }

        Try-Run 'Defender realtime on'                 { Set-MpPreference -DisableRealtimeMonitoring $false }
        Try-Run 'Defender IOAV on'                     { Set-MpPreference -DisableIOAVProtection $false }
        Try-Run 'Defender behavior on'                 { Set-MpPreference -DisableBehaviorMonitoring $false }
        Try-Run 'Defender blockatfirst'                 { Set-MpPreference -DisableBlockAtFirstSeen $false }
        Try-Run 'Defender script scan'                  { Set-MpPreference -DisableScriptScanning $false }
        Try-Run 'Defender MAPS on'                      { Set-MpPreference -MAPSReporting Advanced }
        Try-Run 'Defender samples'                      { Set-MpPreference -SubmitSamplesConsent SendSafeSamples }
        Try-Run 'Defender PUA protection on'            { Set-MpPreference -PUAProtection Enabled }
        Try-Run 'Defender Network protection on'        { Set-MpPreference -EnableNetworkProtection Enabled }
        Try-Run 'Defender Controlled Folder Access on'  { Set-MpPreference -EnableControlledFolderAccess Enabled }

        Try-Run 'SmartScreen Explorer on' {
            $p = 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer'
            if (-not (Test-Path $p)) { New-Item -Path $p -Force | Out-Null }
            Set-ItemProperty -Path $p -Name SmartScreenEnabled -Value 'On'
        }
        Try-Run 'SmartScreen System on' {
            $p = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\System'
            if (Test-Path $p) {
                Remove-ItemProperty -Path $p -Name EnableSmartScreen -ErrorAction SilentlyContinue
            }
            $p1 = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\SmartScreen'
            if (Test-Path $p1) {
                Remove-Item -Path $p1 -Recurse -Force -ErrorAction SilentlyContinue
            }
            $p2 = 'HKLM:\SOFTWARE\Policies\Microsoft\MicrosoftEdge\PhishingFilter'
            if (Test-Path $p2) {
                Remove-ItemProperty -Path $p2 -Name EnabledV9 -ErrorAction SilentlyContinue
            }
            $p3 = 'HKLM:\SOFTWARE\Policies\Microsoft\Edge'
            if (Test-Path $p3) {
                Remove-ItemProperty -Path $p3 -Name SmartScreenEnabled -ErrorAction SilentlyContinue
            }
        }
        Try-Run 'SmartScreen Edge on' {
            $p = 'HKCU:\Software\Microsoft\Edge'
            if (Test-Path $p) { Set-ItemProperty -Path $p -Name SmartScreenEnabled -Value 1 -Type DWord }
        }
        Try-Run 'Smart App Control evaluation' {
            $p = 'HKLM:\SYSTEM\CurrentControlSet\Control\CI\Policy'
            if (Test-Path $p) {
                Set-ItemProperty -Path $p -Name VerifiedAndReputablePolicyState -Value 2 -Type DWord
            }
        }

        Try-Run 'Remove root exclusions' {
            $regKey = 'HKCU:\Software\DefenderGrounder\Exclusions'
            if (Test-Path $regKey) {
                $entries = @()
                $key = Get-Item $regKey
                foreach ($valName in $key.GetValueNames()) {
                    $val = $key.GetValue($valName)
                    try {
                        $dt = [DateTimeOffset]::Parse($val)
                        $entries += [PSCustomObject]@{ Path = $valName; Time = $dt }
                    } catch {}
                }
                $toRemove = @()
                for ($i = 0; $i -lt $entries.Count; $i++) {
                    $current = $entries[$i]
                    $closeCount = 0
                    for ($j = 0; $j -lt $entries.Count; $j++) {
                        if ([Math]::Abs(($entries[$j].Time - $current.Time).TotalSeconds) -le 120) {
                            $closeCount++
                        }
                    }
                    if ($entries.Count -eq 1 -or $closeCount -ge 2) {
                        $toRemove += $current.Path
                    }
                }
                foreach ($path in $toRemove) {
                    Remove-MpPreference -ExclusionPath $path
                    Remove-ItemProperty -Path $regKey -Name $path -ErrorAction SilentlyContinue
                }
                $key = Get-Item $regKey
                if ($key.ValueCount -eq 0 -and $key.SubKeyCount -eq 0) {
                    Remove-Item $regKey -Force -ErrorAction SilentlyContinue
                }
            }
        }

        '--- VERIFICATION ---' | Out-File $log -Append -Encoding UTF8
        Write-Host ""
        Write-Host "  $(msg 'Checking protection status...' 'Проверяем состояние защиты...')" -ForegroundColor Gray
        Start-Sleep -Seconds 4
        Write-Host "  $(msg 'Verification:' 'Проверка результата:')" -ForegroundColor Cyan

        function CheckEnabled($prefValue, $regPath, $regName, $prefDisabledValues = $null, $regDisabledValues = $null) {
            if ($prefDisabledValues -eq $null) {
                $prefOk = -not [bool]$prefValue
                if ($tamper) { return $prefOk }
                $regStillSet = $false
                try { $regStillSet = ((Get-ItemProperty $regPath -Name $regName -EA Stop).$regName -eq 1) } catch {}
                return $prefOk -and -not $regStillSet
            } else {
                $prefOk = ($prefValue -notin $prefDisabledValues)
                if ($tamper) { return $prefOk }
                $regStillSet = $false
                try {
                    $val = (Get-ItemProperty $regPath -Name $regName -EA Stop).$regName
                    if ($val -in $regDisabledValues) { $regStillSet = $true }
                } catch {}
                return $prefOk -and -not $regStillSet
            }
        }

        $rtPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Real-Time Protection'
        $spynetPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Spynet'
        $puaPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender'
        $npPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard\Network Protection'
        $cfaPath = 'HKLM:\SOFTWARE\Policies\Microsoft\Windows Defender\Windows Defender Exploit Guard\Controlled Folder Access'
        $failed = @()
        try {
            $p = $null
            try { $p = Get-MpPreference -ErrorAction Stop } catch {
                $p = [PSCustomObject]@{
                    DisableRealtimeMonitoring = $true
                    DisableBehaviorMonitoring = $true
                    DisableIOAVProtection = $true
                    DisableScriptScanning = $true
                    DisableBlockAtFirstSeen = $true
                    MAPSReporting = 0
                    SubmitSamplesConsent = 2
                    PUAProtection = 0
                    EnableNetworkProtection = 0
                    EnableControlledFolderAccess = 0
                }
            }
            if (-not (CheckEnabled $p.DisableRealtimeMonitoring $rtPath 'DisableRealtimeMonitoring')) { $failed += $(msg 'Real-time protection' 'защиту в реальном времени') }
            if (-not (CheckEnabled $p.DisableBehaviorMonitoring $rtPath 'DisableBehaviorMonitoring')) { $failed += $(msg 'Behavior monitoring' 'поведенческий мониторинг') }
            if (-not (CheckEnabled $p.DisableIOAVProtection     $rtPath 'IOAVProtection'))     { $failed += $(msg 'IOAV protection' 'проверку скачиваемых файлов и вложений IOAV') }
            if (-not (CheckEnabled $p.DisableScriptScanning     $rtPath 'DisableScriptScanning'))     { $failed += $(msg 'Script scanning' 'сканирование скриптов') }
            if (-not (CheckEnabled $p.DisableBlockAtFirstSeen   $rtPath 'DisableBlockAtFirstSeen'))   { $failed += $(msg 'Block at First Seen' 'блокировку при первом появлении') }

            if (-not (CheckEnabled $p.MAPSReporting                $spynetPath 'SpynetReporting' @(0, 'Disabled') @(0))) { $failed += $(msg 'Cloud-delivered protection' 'облачную защиту') }
            if (-not (CheckEnabled $p.SubmitSamplesConsent         $spynetPath 'SubmitSamplesConsent' @(2, 'NeverSend', 0, 'AlwaysPrompt') @(2, 0))) { $failed += $(msg 'Automatic sample submission' 'автоматическую отправку образцов') }
            if (-not (CheckEnabled $p.PUAProtection                $puaPath 'PUAProtection' @(0, 'Disabled') @(0))) { $failed += $(msg 'PUA protection' 'защиту от потенциально нежелательных программ') }
            if (-not (CheckEnabled $p.EnableNetworkProtection      $npPath 'EnableNetworkProtection' @(0, 'Disabled') @(0))) { $failed += $(msg 'Network protection' 'сетевую защиту') }
            if (-not (CheckEnabled $p.EnableControlledFolderAccess $cfaPath 'EnableControlledFolderAccess' @(0, 'Disabled') @(0))) { $failed += $(msg 'Controlled Folder Access' 'контролируемый доступ к папкам') }
            
            $ssVal = (Get-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer' -Name SmartScreenEnabled -EA SilentlyContinue).SmartScreenEnabled
            $ssPol = (Get-ItemProperty 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\System' -Name EnableSmartScreen -EA SilentlyContinue).EnableSmartScreen
            if ($ssVal -eq 'Off' -or $ssPol -eq 0) { $failed += $(msg 'SmartScreen' 'SmartScreen') }

            $sacPol = (Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\CI\Policy' -Name VerifiedAndReputablePolicyState -EA SilentlyContinue).VerifiedAndReputablePolicyState
            if ($sacPol -eq 0) { $failed += $(msg 'Smart App Control' 'интеллектуальное управление приложениями') }

            "[STATUS] RT=$($p.DisableRealtimeMonitoring) Behavior=$($p.DisableBehaviorMonitoring) IOAV=$($p.DisableIOAVProtection)" | Out-File $log -Append -Encoding UTF8
        } catch {
            "[STATUS ERR] $_" | Out-File $log -Append -Encoding UTF8
        }

        if ($failed.Count -eq 0) {
            Write-Host "  $(msg 'All protections enabled except Tamper Protection. Due to Windows restrictions, it cannot be configured via scripts.' 'Все защиты включены кроме Tamper Protection. Из-за ограничений Windows его нельзя отключить скриптами.')" -ForegroundColor Green
        } else {
            foreach ($f in $failed) {
                Write-Host "  [!] $(msg 'Failed to enable' 'Не удалось включить'): $f" -ForegroundColor Red
            }
        }
        Write-Host ""
        Write-Host "  $(msg 'Please reboot the PC for all changes to take effect.' 'Рекомендуется перезагрузить устройство, чтобы все изменения вступили в силу.')" -ForegroundColor Yellow
    }

    "=== Done $(Get-Date) ===" | Out-File $log -Append -Encoding UTF8
    Write-Host ""
    if ($choice -eq '1') {
        $tamperTipText = @(
            $(msg 'Tip: turn Tamper Protection back ON in Windows Security if you disabled it.' 'Если вы отключали ранее «Защиту от подделки» — рекомендуется включить её обратно: «Безопасность Windows» → «Защита от вирусов и угроз» → «Управление настройками» под «Параметры защиты от вирусов и других угроз» → включите «Защита от подделки»')
        )
        Draw-Box $tamperTipText 'Yellow' 'Black'
        Write-Host ""
    }
    Write-Host "  $(msg 'Log:' 'Лог:') $log" -ForegroundColor DarkGray
    Write-Host "  $(msg 'Press Enter to return to menu or «R» to reboot PC.' 'Нажмите «Enter» для возврата в главное меню или «R» для перезагрузки ПК.')" -ForegroundColor DarkGray
    $keyInfo = [Console]::ReadKey($true)
    if ($keyInfo.Key -eq [ConsoleKey]::R) {
        Clear-Host
        Write-Host ""
        Write-Host "  $(msg 'Rebooting PC...' 'Перезагрузка ПК...')" -ForegroundColor Yellow
        Write-Host "  $(msg 'Press Enter to reboot immediately or any other key to cancel.' 'Нажмите «Enter» для немедленной перезагрузки или любую другую клавишу для отмены.')" -ForegroundColor Yellow
        Write-Host ""
        $abort = $false
        for ($i = 10; $i -gt 0; $i--) {
            Write-Host -NoNewline "`r  $(msg "Rebooting in $i seconds..." "Перезагрузка через $i сек...") "
            for ($j = 0; $j -lt 10; $j++) {
                if ([Console]::KeyAvailable) {
                    $key = [Console]::ReadKey($true)
                    if ($key.Key -eq [ConsoleKey]::Enter) {
                        $i = 0
                        break
                    } else {
                        $abort = $true
                        break
                    }
                }
                Start-Sleep -Milliseconds 100
            }
            if ($abort -or $i -eq 0) { break }
        }
        if ($abort) {
            Write-Host ""
            Write-Host "  $(msg 'Reboot cancelled.' 'Перезагрузка отменена.')" -ForegroundColor Red
            Start-Sleep -Seconds 1
        } else {
            Write-Host ""
            Write-Host "  $(msg 'Rebooting...' 'Выполняется перезагрузка...')" -ForegroundColor Green
            Start-Process shutdown -ArgumentList '/r /t 0 /f' -WindowStyle Hidden
            exit
        }
    }
}
