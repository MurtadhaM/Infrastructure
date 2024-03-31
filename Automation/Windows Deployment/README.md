#

<a>
<h1>https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/capture-and-apply-windows-using-a-single-wim?view=windows-11

</h1>
</a>

```powershell

function Get-WindowsADK {
    Write-Host "Downloading Windows ADK"
# Download the Windows ADK
Invoke-WebRequest -Uri https://go.microsoft.com/fwlink/?linkid=2196127 -OutFile C:\Windows\Temp\WindowsADK.exe

# Starting the Installer
Start-Process C:\Windows\Temp\WindowsADK.exe -ArgumentList " /features OptionId.DeploymentTools OptionId.ICDConfigurationDesigner OptionId.ImagingAndConfigurationDesigner OptionId.UserStateMigrationTool /q" -Wait

C:\Windows\Temp\WindowsADK.exe /quiet /features OptionId.DeploymentTools


}


function Get-PEAddOns {
    Write-Host "Downloading PE Addons"
       # Download the PE Addon
Invoke-WebRequest -Uri https://go.microsoft.com/fwlink/?linkid=2196224 -OutFile C:\Windows\Temp\PEAddon.exe
Write-Host "Installing PE Addons"
# Install the PE Addon
Start-Process C:\Windows\Temp\PEAddon.exe -ArgumentList "  /quiet /norestart" -Wait

}


function Get-WindowsDeploymentServices {
    Write-Host "Downloading Windows Deployment Services"
    # Download the Windows Deployment Services
Invoke-WebRequest -Uri https://download.microsoft.com/download/3/3/9/339BE62D-B4B8-4956-B58D-73C4685FC492/MicrosoftDeploymentToolkit_x64.msi -OutFile C:\Windows\Temp\MicrosoftDeploymentToolkit_x64.msi



# Install the Windows Deployment Services
Write-Host "Installing Windows Deployment Services"
Start-Process C:\Windows\Temp\MicrosoftDeploymentToolkit_x64.msi -ArgumentList " /quiet /norestart" -Wait

}


function Get-WindowsMediaCreationTool {
    Write-Host "Downloading Windows Media Creation Tool"
    # Download the Windows Media Creation Tool
Invoke-WebRequest -Uri https://go.microsoft.com/fwlink/?LinkId=691209  -OutFile C:\Windows\Temp\MediaCreationTool22H2.exe
    # Download ISO
    Write-Host "Downloading Windows 11 ISO"
  Start-Process C:\Windows\Temp\MediaCreationTool22H2.exe -ArgumentList "/Eula Accept /Retail /MediaArch x64   /MediaEdition Enterprise /MediaLangCode en-US  /MediaPath  C:\Windows\Temp\Win10_21H2_English_x64.iso" -Wait
}


```
