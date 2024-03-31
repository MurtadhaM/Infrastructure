<#
this script will mount the Storage Account Share to the VM
#>

$VaultName="EAKeyVault"
$SecretName="EAStorageAccountKey"

function Set-Share{
# Get the Share Key
$secret = Get-AzKeyVaultSecret -VaultName $VaultName -Name $SecretName -AsPlainText

# Test the connection to the Azure storage account
$connectTestResult = Test-NetConnection -ComputerName bpshare.file.core.windows.net -Port 445
if ($connectTestResult.TcpTestSucceeded) {
    # Save the password so the drive will persist on reboot
    cmd.exe /C "cmdkey /add:`"bpshare.file.core.windows.net`" /user:`"localhost\bpshare`" /pass:`"$secret`""
    # Mount the drive
    New-PSDrive -Name Z -PSProvider FileSystem -Root "\\bpshare.file.core.windows.net\installs" -Persist
    # Log
    Write-Host "Successfully mounted the Azure storage account share to the Z: drive."
} else {
    Write-Error -Message "Unable to reach the Azure storage account via port 445. Check to make sure your organization or ISP is not blocking port 445, or use Azure P2S VPN, Azure S2S VPN, or Express Route to tunnel SMB traffic over a different port."
}
}