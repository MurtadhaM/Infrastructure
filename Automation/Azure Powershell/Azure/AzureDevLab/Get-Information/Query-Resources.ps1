<#Author: Murtadha Marzouq#>


#Get all the Resource Groups in the current subscription
$ResourceGroups = Get-AzResourceGroup | Select-Object -Property ResourceGroupName

#Get all the Resource Types in the current subscription
$ResourceTypes = Get-AzResource  |Select-Object -Property ResourceType | Sort-Object -Property ResourceType

#Get all the VNETs in the current subscription
$VNETs = Get-AzVirtualNetwork | Select-Object -Property Name

#Get all the VMs in the current subscription
$VMs = Get-AzVM | Select-Object -Property Name

#Get all the users in the current subscription
$Users = Get-AzADUser | Select-Object -Property DisplayName

#Get all the Vaults in the current subscription
$Vaults = Get-AzKeyVault | Select-Object -Property VaultName

#Get all the Storage Accounts in the current subscription
$StorageAccounts = Get-AzStorageAccount | Select-Object -Property StorageAccountName


# Get all the Labs in the current subscription
$Labs = Get-AzResource -ResourceType "Microsoft.DevTestLab/labs"  | Select-Object -Property Name



#Convert All the information to a JSON object with the following structure:
$Data = @(

    @{
        "ResourceGroups" = $ResourceGroups
        "ResourceTypes" = $ResourceTypes
        "VNETs" = $VNETs
        "VMs" = $VMs
        "Users" = $Users
        "Vaults" = $Vaults
        "StorageAccounts" = $StorageAccounts
        "Labs" = $Labs
    }

)


$Data| ConvertTo-Json -Depth 10 


