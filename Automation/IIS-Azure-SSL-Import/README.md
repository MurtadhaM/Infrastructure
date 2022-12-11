# Azure Import PFX Certificate to VM


This script will import a PFX certificate to a VM in Azure.  The script will also create a new certificate store if one does not exist.

## Usage

```powershell

$ResourceGroupName = "WEBVM-RG"
$CertificateStoreName = "My"
$VMName = "Snake-IISVM"
$PFXFilePath = "C:\certs\mycert.pfx"
$PFXPassword = "myPFXPassword" (Optional)

# Import the PFX file to the VM
Import-PFXCertificateToVM -ResourceGroupName $ResourceGroupName -VMName $VMName -PFXFilePath $PFXFilePath    -CertificateStoreName "My" 
```

## Parameters

* **ResourceGroupName**: The name of the resource group that contains the VM.
* **VMName**: The name of the VM.
* **PFXFilePath**: The path to the PFX file.
* **PFXPassword**: The password for the PFX file.
* **CertificateStoreName**: The name of the certificate store to import the certificate to.  If the store does not exist, it will be created.

## Notes

* The script will create a new certificate store if one does not exist.
* The script will not overwrite an existing certificate store.
* The script will not overwrite an existing certificate in the certificate store.
* The script will not overwrite an existing certificate in the VM's certificate store.


## Implementation

### Create a PFX file with a self-signed certificate or a certificate from a certificate authority

```powershell
# POPULATE THESE VARIABLES
$CertName = "Snake-IISCerts"
$PFXFilePath = "C:\certs\mycert.pfx"
$VaultName = "Snake-IISKeyVault"
$ResourceGroupName = "WEBVM-RG"
$Location = "East US 2"
$Cert = $null
$CertPassword = "snakeP@ssW0rd"

# Create a Key Vault if one does not exist
$Vault = Get-AzKeyVault -VaultName $VaultName -ResourceGroupName $ResourceGroupName
if (!$Vault) {
    $Vault = New-AzKeyVault -VaultName $VaultName -ResourceGroupName $ResourceGroupName -Location $Location
}

# Import a PFX file to the Key Vault
$Cert = Import-AzKeyVaultCertificate -VaultName $VaultName -Name $CertName -FilePath $PFXFilePath

# Get the certificate from the Key Vault
$Cert = Get-AzKeyVaultCertificate -VaultName $VaultName -Name $CertName

# Create a PFX file from the certificate
Export-PfxCertificate -Cert cert:\LocalMachine\My\$($Cert.Thumbprint) -FilePath $PFXFilePath -Password (ConvertTo-SecureString -String $CertPassword -Force -AsPlainText)
```


---
##

# Create a Key Vault and import a PFX file

```powershell
# Create a Key Vault if one does not exist
$VaultName = "Snake-IISCerts"
$ResourceGroupName = "WEBVM-RG"
$Location = "East US 2" 
$Vault = Get-AzKeyVault -VaultName $VaultName -ResourceGroupName $ResourceGroupName
if (!$Vault) {
    $Vault = New-AzKeyVault -VaultName $VaultName -ResourceGroupName $ResourceGroupName -Location $Location
}

# Import a PFX file to the Key Vault
$CertName = "Snake-IISCerts"
$PFXFilePath = "C:\certs\mycert.pfx"

# Import the PFX file to the Key Vault
$Cert = Import-AzKeyVaultCertificate -VaultName $VaultName -Name $CertName -FilePath $PFXFilePath

# Get the certificate from the Key Vault
$Cert = Get-AzKeyVaultCertificate -VaultName $VaultName -Name $CertName




Import-AzKeyVaultCertificate -VaultName $VaultName -Name $CertName -FilePath ./PKCS7.pfx 



```

### CReate the VM if one does not exist

```powershell
# Create a VM
$cred = Get-Credential
$VMName = "Snake-IISVM"
$ResourceGroupName = "WEBVM-RG"
$Location = "East US 2"
$CertificateStoreName = "My"

# Get the VM if one exists
$VM = Get-AzVM -ResourceGroupName $ResourceGroupName -Name $VMName
# Create a VM if one does not exist
if (!$VM) {
    $VM = New-AzVM -ResourceGroupName $ResourceGroupName -Name $VMName -Location $Location -Credential $cred -VirtualNetworkName "Snake-IISVNET" -SubnetName "Snake-IISSubnet" -PublicIpAddressName "Snake-IISPublicIP" -OpenPorts 80,443
}


# Get the VM

$VM = Get-AzVM -ResourceGroupName $ResourceGroupName -Name $VMName


# Use the Custom Script Extension to install IIS 
 Set-AzVMExtension -ResourceGroupName $ResourceGroupName      -ExtensionName "IIS"     -VMName $VMName     -Location $Location     -Publisher "Microsoft.Compute"     -ExtensionType "CustomScriptExtension"      -TypeHandlerVersion 1.8      -SettingString    '{"commandToExecute":"powershell Add-WindowsFeature Web-Server -IncludeManagementTools"}'


# GET URL OF CERTIFICATE
$certURL=(Get-AzKeyVaultSecret -VaultName $VaultName -Name  $CertName ).id
# GET THE VM
$vm=Get-AzVM -ResourceGroupName $ResourceGroupName -Name $VMName
# GET THE VM ID
$vaultId=(Get-AzKeyVault -ResourceGroupName $ResourceGroupName -VaultName $VaultName).ResourceId
# ADD THE CERTIFICATE TO THE VM
$vm = Add-AzVMSecret -VM $vm -SourceVaultId $vaultId -CertificateStore $CertificateStoreName -CertificateUrl $certURL
# UPDATE THE VM
Update-AzVM -ResourceGroupName $ResourceGroupName -VM $vm


<#----  
RUNNING A CUSTOM SCRIPT EXTENSION
----#>
# RUNNIN A Custom Script Extension
$publicSettings = '{
    "fileUris":["https://raw.githubusercontent.com/Azure-Samples/compute-automation-configurations/master/secure-iis.ps1"],
    "commandToExecute":"powershell -ExecutionPolicy Unrestricted -File secure-iis.ps1"
}'


Set-AzVMExtension -ResourceGroupName $ResourceGroupName -VMName $VMName -Location $Location -Name "CustomScriptExtension" -Publisher "Microsoft.Compute" -ExtensionType "CustomScriptExtension" -TypeHandlerVersion 1.8 -SettingString $publicSettings


```