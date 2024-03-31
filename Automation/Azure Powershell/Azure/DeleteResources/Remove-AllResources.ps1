<#Author: Murtadha Marzouq#>


#Get all the Resource Groups in the current subscription except for the storage account
$ResourceGroups = Get-AzResourceGroup | Where-Object {$_.ResourceGroupName -ne "StorageAccount"} | Select-Object -Property ResourceGroupName


#Get all the Resource Types in the current subscription except for the storage account
$AllResourceIDS = Get-AzResource  |Where-Object {$_.ResourceType -ne 'Microsoft.Storage/storageAccounts'  }

# Deleting ALL THE RESOURCES
$AllResourceIDS | Select-Object -Property ResourceId |Remove-AzResource -Force -AsJob -Verbose -Confirm:$false


# Deleting ALL THE RESOURCE GROUPS
$ResourceGroups | Select-Object -Property ResourceGroupName | Remove-AzResourceGroup -Force -AsJob -Verbose -Confirm:$false



