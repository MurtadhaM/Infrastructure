<#
    

#>

$VaultName="EAKeyVault"
$SecretName="EAStorageAccountKey"

$secret = Get-AzKeyVaultSecret -VaultName $VaultName -Name $SecretName -AsPlainText

az deployment group create --resource-group $ResourceGroupName --template-file .\ARMTemplateWindows.json --parameters-file .\ARMTemplateWindows.parameters.json
$PS1Script = @" 
cmd.exe /C "cmdkey /add:`"bpshare.file.core.windows.net`" /user:`"localhost\bpshare`" /pass:`"$secret`""
# Mount the drive
New-PSDrive -Name Z -PSProvider FileSystem -Root "\\bpshare.file.core.windows.net\installs" -Persist
$blueprism_installer_path="z:\BluePrism.msi"
# Install the Blue Prism Installer
Start-Process -FilePath $blueprism_installer_path -ArgumentList "/quiet /norestart " -Wait
# Set the DNS-Suffix
$dnsSuffix = "anywhererpa.com"
Set-DnsClientGlobalSetting -SuffixSearchList $dnsSuffix

# DOTNET 4.8
$dotnet48_installer_path="z:\ndp481-web.exe"
Start-Process -FilePath $dotnet48_installer_path -ArgumentList "/quiet /norestart " -Wait

# Open the firewall for the Blue Prism Ports
Enable-NetFirewallRule -Name FPS-ICMP4-ERQ-In;Enable-NetFirewallRule -Name FPS-ICMP6-ERQ-In

# Allow incoming remote connection using WinRM
netsh advfirewall firewall add rule name="WinRM in" protocol=TCP dir=in profile=any localport=5985 remoteip=any localip=any action=allow

# Allow incoming connection to port 8181
netsh advfirewall firewall add rule name="Open Port 8181" dir=in action=allow protocol=TCP localport=8181




# Add Blue Prism dir to the path variable permanently 
#---------------------------------------------------- 
$oldpath = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH).path 
$newpath = "$oldpath;C:\Program Files\Blue Prism Limited\Blue Prism Automate" 
Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $newPath 
$env:Path += ";C:\Program Files\Blue Prism Limited\Blue Prism Automate" 


# Configure Appserver Connection with Blue Prism 
#-----------------------------------------------
Automate.exe /dbconname "default" /setbpserver "$appserver_hostname" "$appserver_port" /connectionmode 5

# Activate the License

AutomateC.exe /license "z:\blueprism.lic"

# Update default BP Server Service to auto start
#-----------------------------------------------
sc.exe config "Blue Prism Server" start= auto
sleep 1
sc.exe stop "Blue Prism Server"
sleep 1
sc.exe start "Blue Prism Server"

$hostname = $hostname
$domainname = $dnsSuffix

# Join the Domain
netdom computername $env:COMPUTERNAME /add:"$hostname.$domainname"
netdom computername $env:COMPUTERNAME /makeprimary:"$hostname.$domainname" 
netdom renamecomputer $env:COMPUTERNAME /newname:$hostname /force /reboot:15


"@



az vm run-command invoke --resource-group $ResourceGroupName --name $VMNAME --command-id RunPowerShellScript --script $PS1Script
