<# Author: Murtadha Marzouq #>




<#-------  TIPS -----#>

# 1. List ALL RESOURCE TYPES IN THE CURRENT SUBSCRIPTION
$ResourceTypes = Get-AzResource  |Select-Object -Property ResourceType | Sort-Object -Property ResourceType 
# 2. List ALL RESOURCE Groups IN THE CURRENT SUBSCRIPTION
$ResourceGroups = Get-AzResourceGroup | Select-Object -Property Name
# 3. List ALL VNETS IN THE CURRENT SUBSCRIPTION
$VNETs = Get-AzVirtualNetwork | Select-Object -Property Name





# <#-------- RANDOM VARIABLE SUFFIX (To avoid naming conflicts) ----------#>

$RandomSuffix = Get-Random -Minimum 1000 -Maximum 9999
$LabName = "SnakeLab-" + $RandomSuffix
# <#-------- AUTO-FILLED VNET DEPLOY ----------#>
$Region = "eastus2" # Default Region
$ResourceGroup = Get-AzResource -ResourceType "Microsoft.DevTestLab/labs" 
$c = "SnakeDevTestLab"
$ShutdownTime = "18:00".ToDateTime($null) # 6:00:00 PM
$Threshold = 2 # MAX Number of VMs to be created



<#------ GETTING USER INPUT   --------#>
$LabName = Read-Host -Prompt "Enter the Lab Name"
$ResourceGroup = Read-Host -Prompt "Enter the Resource Group"
$ShutdownTime = Read-Host -Prompt "Enter the Shutdown Time in Military Time (HH:MM) format, e.g. 17:00"
$Threshold = Read-Host -Prompt "Enter the number allowed VMs in the labs (Default: 1)"


# Automatically Turn off VMs at 8PMs
Set-AzDtlAutoShutdownPolicy -Enable -LabName $LabName -ResourceGroupName  -Time $ShutdownTime                           

# Limit the number of VMs in the lab
Set-AzDtlVMsPerLabPolicy -LabName $LabName -ResourceGroupName $ResourceGroup -Threshold $THREASHOLD
# Limit the number of VMs per users
Set-AzDtlVMsPerUserPolicy -LabName $LabName -ResourceGroupName $ResourceGroup -Threshold $THREASHOLD
# Do not Auto-Start VMs
Set-AzDtlAutoStartPolicy -LabName $LabName -ResourceGroupName $ResourceGroup -Enable $false
# Do not allow users to create VMs
Set-AzDtlUserAccessPolicy -LabName $LabName -ResourceGroupName $ResourceGroup -AllowUserToCreateVm $false



Set-AzDtlAutoShutdownPolicy -Enable -LabName $LabName -ResourceGroupName  -Time $ShutdownTime                           
Install-Module Universal