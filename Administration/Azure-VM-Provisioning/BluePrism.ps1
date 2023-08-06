https://github.com/BPMikeLawrence/ScriptedInstall/blob/main/InteractAndDecipherInstallAssistant.ps1
https://github.com/rajeshmgc/terraform-aws-blueprism/blob/52debca9ec6fcac03bde0c7fec3efe051a5641e3/templates/client_setup.tpl
https://github.com/rajeshmgc/terraform-aws-blueprism/tree/52debca9ec6fcac03bde0c7fec3efe051a5641e3
https://github.com/rajeshmgc/terraform-aws-blueprism/blob/52debca9ec6fcac03bde0c7fec3efe051a5641e3/templates/appserver_setup.tpl
https://raw.githubusercontent.com/rajeshmgc/terraform-aws-blueprism/52debca9ec6fcac03bde0c7fec3efe051a5641e3/templates/resource_setup.tpl



az vm run-command create --name "myRunCommand" --vm-name "APP" --resource-group "EA" --scriptfile 


$URL_BluePrismInstaller="https://portal.blueprism.com/system/files/2022-12/BluePrism7.1.2_x64.msi"
$blueprism_installer_path="c:\BP\BluePrism.msi"
$hostname=AzureVMNameCli="Client"
$dns_suffix_domain_name="cel
lulartech.com"
$appserver_hostname="AppServer"
$appserver_port="8080"
$administrator_password="Mavaratchi1."
"


# Deploy the ARM template
$resourceGroupName="EA"
$templateFilePath="./ARMTemplateWindows.json"
$parametersFilePath="./ARMTemplateWindows.parameters.json" 
$location="eastus"
$PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition


az deployment group create --resource-group $resourceGroupName --template-file 





$URL_BluePrismInstaller="https://portal.blueprism.com/system/files/2022-12/BluePrism7.1.2_x64.msi"
$blueprism_installer_path="c:\BP\BluePrism.msi"
$hostname=AzureVMNameCli="Client"
$dns_suffix_domain_name="cellulartech.com"
$appserver_hostname="AppServer"
$appserver_port="8080"
$administrator_password="Mavaratchi1."

