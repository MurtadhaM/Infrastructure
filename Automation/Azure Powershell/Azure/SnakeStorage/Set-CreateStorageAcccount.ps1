<# Author: Murtada Marzouq#>

$RandomSuffix = Get-Random -Minimum 1000 -Maximum 9999

<# Parameters#>
$Parameters = @(
    @{
        Name = "ResourceGroupName"
        Type = "String"
        Value = "SnakeStorage-rg"
    },
    @{
        Name = "StorageAccountName"
        Type = "String"
        Value = "snakestorage"
    },
    @{
        Name = "Location"
        Type = "String"
        Value = "eastus2"
    },
    @{
        Name = "AccountType"
        Type = "String"
        Value = "Standard_LRS"
    }
)



  
$Parameters.Set(0 ,"SnakeStorage-rg")
$Parameters.Set(1 ,"snakestorage" + $RandomSuffix)
$Parameters.Set(2 ,"eastus2")
$Parameters.Set(3 ,"Standard_LRS")




function Get-TemplateParameters{
    param (
        [Parameter(Mandatory=$true)]
        [string]$Template
    )

#Get The input from the user
$ResourceGroupName = Read-Host -Prompt "Enter the Resource Group Name"
$StorageAccountName = Read-Host -Prompt "Enter the Storage Account Name"
$Location = Read-Host -Prompt "Enter the Location"
$AccountType = Read-Host -Prompt "Enter the Account Type"

$Parameters.Set(0 ,$ResourceGroupName)
$Parameters.Set(1 ,$StorageAccountName + $RandomSuffix)
$Parameters.Set(2 ,$Location)
$Parameters.Set(3 ,$AccountType)

    
}



<#----- CODE EXECUTION -------#>

#check if the resource group exists
$ResourceGroup = Get-AzResourceGroup -Name $Parameters[0] -ErrorAction SilentlyContinue
if ($ResourceGroup -eq $null) {
    Write-Host "Resource Group does not exist. Creating a new one..."
    New-AzResourceGroup -Name $Parameters[0] -Location $Parameters[2]
} 


#check if the storage account exists
$StorageAccount = Get-AzStorageAccount -ResourceGroupName $Parameters[0] -Name $Parameters[1] -ErrorAction SilentlyContinue
if ($StorageAccount -eq $null) {
    Write-Host "Storage Account does not exist. Creating a new one..."
    New-AzStorageAccount -ResourceGroupName $Parameters[0] -Name $Parameters[1] -Location $Parameters[2] -SkuName $Parameters[3]
} else {
    Write-Host "Storage Account already exists. Skipping..."
}

 