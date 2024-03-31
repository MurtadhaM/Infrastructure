


#Continue on error
$ErrorActionPreference = 'silentlycontinue'

#Require elivation for script run
Write-Output "Elevating priviledges for this process"
do {} until (Elevate-Privileges SeTakeOwnershipPrivilege)

#Set Directory to PSScriptRoot
if ((Get-Location).Path -NE $PSScriptRoot) { Set-Location $PSScriptRoot }


# Getting The Infomation
Write-Host "Collecting OEM Information"
$CompanyName = Read-Host "Enter Company Name: " 
$SupportHours = "0800-1800 EST"
$SupportPhone = "800-690-3650" 
$Model = (Get-ItemProperty -Path "HKLM:\HARDWARE\DESCRIPTION\System\BIOS" -Name SystemProductName).SystemProductName
$SupportURL = "https://fluidflow.sharepoint.com/"
$RegisteredOwner = Read-Host "Enter Registered Owner: "
$RegisteredOrganization = Read-Host "Enter Registered Organization: "





Write-Host "Creating Destination Folders if Needed"
ForEach ($Path in ("C:\Windows\Web\Screen\","C:\ProgramData\Microsoft\User Account Pictures","C:\Windows\Web\Wallpaper\Theme1\")){
  If (!(Test-Path -Path "$Path")){
      Write-Host "$Path does not exist, creating..."
      New-Item -Type Directory "$Path" -Force | Out-Null
}}

Write-Host "Setting Wallpaper"
copy-item -Path .\Wallpaper.png -Destination C:\Windows\Web\Wallpaper\Theme1\wallpaper.jpg -Force
copy-item -Path .\oemlogo.bmp -Destination "C:\Windows\System32\" -Force
Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name Wallpaper -Type String -Value "C:\Windows\Web\Wallpaper\Theme1\wallpaper.png" -Force


Write-Host "Setting OEM Logo"
copy-item -Path .\Files\Branding\oemlogo.bmp -Destination "C:\Windows\System32\" -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name Logo -Type String -Value "C:\Windows\System32\oemlogo.bmp" -Force





Write-Host "Setting OEM Information"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name Manufacturer -Type String -Value $CompanyName -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name Model -Type String -Value $Model -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name SupportHours -Type String -Value $SupportHours -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name SupportPhone -Type String -Value $SupportPhone -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name SupportURL -Type String -Value $SupportURL -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name HelpCustomized -Type DWORD -Value "0" -Force


Write-Host "Setting Registered Information"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name RegisteredOwner -Type String -Value $RegisteredOwner -Force
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\OEMInformation" -Name RegisteredOrganization -Type String -Value $RegisteredOrganization -Force

##Enable Dark Mode
Write-Host "Setting Dark Mode"
Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" -Name AppsUseLightTheme -Type DWORD -Value "00000000" -Force
Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" -Name SystemUsesLightTheme -Type DWORD -Value "00000000" -Force
Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" -Name ColorPrevalence -Type DWORD -Value "00000000" -Force
Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" -Name EnableTransparency -Type DWORD -Value "00000001" -Force

#Branding GPOs
Write-Host "Setting Group Policies"
.\Files\LGPO\LGPO.exe /g .\Files\GPO