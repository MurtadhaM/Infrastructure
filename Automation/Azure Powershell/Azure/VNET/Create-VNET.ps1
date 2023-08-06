<# Author: Murtadha Marzouq#>


<#--- Parameters --#>

$Location = "eastus2"
$ResourceGroupName = "SnakeStorage-rg"
$VNETName = "SnakeVNET-rg"
$Subnet1Name = "SnakeSubnet_Local"
$Subnet2Name = "SnakeSubnet_Remote"
$Subnet1AddressPrefix = "192.168.100.0/24"
$Subnet2AddressPrefix = "192.168.200.0/24"
$SuperNetAddressPrefix = "192.168.0.0/16"
$NSG1Name = $Subnet1Name + "-NSG"


function FunctionName {

    <#-----   INTERACTIVE  ------#>
$ResourceGroupName = Read-Host -Prompt "Enter the Resource Group name"
$VNETName = Read-Host -Prompt "Enter the VNET Name"
$Location = Read-Host -Prompt "Location of the Network (Default: East US)"
$SuperNetAddressPrefix = Read-Host -Prompt "Enter the Supernet (MUST INCLUDE THE TWO) CIDR (Default: 10.0.0.0/16)"
$Subnet1Name = Read-Host -Prompt "Enter the First Subnet Name"
$Subnet1AddressPrefix = Read-Host -Prompt "Enter the First Subnet Address Prefix"
$Subnet2Name = Read-Host -Prompt "Enter the Second Subnet Name"
$Subnet2AddressPrefix = Read-Host -Prompt "Enter the Second Subnet Address Prefix"
$NSG1Name = $Subnet1Name + "-NSG"
   

<#----- CODE EXECUTION -------#>

$rdpRule = New-AzNetworkSecurityRuleConfig -Name rdp-rule -Description "Allow RDP" -Access Allow -Protocol Tcp -Direction Inbound -Priority 100 -SourceAddressPrefix Internet -SourcePortRange * -DestinationAddressPrefix * -DestinationPortRange 3389
$networkSecurityGroup = New-AzNetworkSecurityGroup -ResourceGroupName $ResourceGroupName -Location $Location -Name $NSG1Name -SecurityRules $rdpRule  
$Subnet1 = New-AzVirtualNetworkSubnetConfig -Name $Subnet1Name -AddressPrefix $Subnet1AddressPrefix -NetworkSecurityGroup $networkSecurityGroup
$Subnet2 = New-AzVirtualNetworkSubnetConfig -Name $Subnet2Name  -AddressPrefix $Subnet2AddressPrefix -NetworkSecurityGroup $networkSecurityGroup
New-AzVirtualNetwork -Name $VNETName -ResourceGroupName $ResourceGroupName -Location $Location -AddressPrefix $SuperNetAddressPrefix -Subnet $Subnet1, $Subnet2

}




#check if the resource group exists
$ResourceGroup = Get-AzResourceGroup -Name $ResourceGroupName -ErrorAction SilentlyContinue
if ($ResourceGroup -eq $null) {
    Write-Host "Resource Group does not exist. Creating a new one..."
    New-AzResourceGroup -Name $ResourceGroupName -Location $Location
}  else{
    Write-Host "Resource Group exists. Using the existing one... Name: $ResourceGroupName"
$rdpRule = New-AzNetworkSecurityRuleConfig -Name rdp-rule -Description "Allow RDP" -Access Allow -Protocol Tcp -Direction Inbound -Priority 100 -SourceAddressPrefix Internet -SourcePortRange * -DestinationAddressPrefix * -DestinationPortRange 3389
$networkSecurityGroup = New-AzNetworkSecurityGroup -ResourceGroupName $ResourceGroupName -Location $Location -Name $NSG1Name -SecurityRules $rdpRule  
$Subnet1 = New-AzVirtualNetworkSubnetConfig -Name $Subnet1Name -AddressPrefix $Subnet1AddressPrefix -NetworkSecurityGroup $networkSecurityGroup
$Subnet2 = New-AzVirtualNetworkSubnetConfig -Name $Subnet2Name  -AddressPrefix $Subnet2AddressPrefix -NetworkSecurityGroup $networkSecurityGroup
New-AzVirtualNetwork -Name $VNETName -ResourceGroupName $ResourceGroupName -Location $Location -AddressPrefix $SuperNetAddressPrefix -Subnet $Subnet1, $Subnet2

}






