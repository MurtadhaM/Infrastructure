
<h1 align="center"> Azure Powershells </h1>

<img 
center src="Site-To-Site.png" width="100%"/> 

----

## Table of Contents
----
- [Overview](#overview)
- [Resourcess](#resourcess)
- [Sample Deployment](#sample-deployment)
- [License](#license)
- [Author](#author)

# Overview
Azure PowerShell is a set of PowerShell cmdlets that you can use to manage your Azure resources from the PowerShell command line. You can use Azure PowerShell to manage your Azure resources from a Windows, Linux, or macOS computer.s

# Resourcess


---
| Resource         | Link                                                                            |
|------------------|---------------------------------------------------------------------------------|
| Azure PowerShell | https://docs.microsoft.com/en-us/powershell/azure/overview?view=azps-4.4.0      |
| Azure PowerShell | https://docs.microsoft.com/en-us/powershell/azure/install-az-ps?view=azps-4.4.0 |
| Azure PowerShell | https://docs.microsoft.com/en-us/powershell/azure/overview?view=azps-4.4.0      |
| Azure PowerShell | https://docs.microsoft.com/en-us/powershell/azure/overview?view=azps-4.4.0      |


---


# Sample Deployment 

```powershell
<# Author: Murtadha Marzouq 
   Description: This script will create a VNET with two subnets and a NSG and Virtual Gateway and Local Gateway with a rule to allow all traffic from internet to all ports on both subnets
#>

# <#--- Parameters --#>

$global:Location = "eastus2"
$ResourceGroupName = "SnakeNetwork-rg"
$VNETName = "SnakeVNET-rg"
$Subnet1Name = "SnakeSubnet_Local"
$Subnet2Name = "SnakeSubnet_Remote"
$GatewaySubnetName = "GatewaySubnet"
$Subnet1AddressPrefix = "172.16.100.0/24"
$Subnet2AddressPrefix = "172.16.200.0/24"
$GatewaySubnetAddressPrefix = "172.16.0.0/24"
$SuperNetAddressPrefix = "172.16.0.0/16"
$NSGName = $VNETName + "-NSG"
$SharedKey = "p@ssW0rd123"

$LocalGatewayAddressPrefix = "10.0.1.0/24"

$GatewayName = $VNETName + "-GW"
$LocalGatewayName = $VNETName + "-LGW"
$LocalGatewayIP = "20.29.82.7"
$PublicIPName = $VNETName + "-GW-PublicIP" 
$PublicIPAllocationMethod = "Static"
$PublicIPDnsLabel = "snakevnet-gw"
$VirtualNetwsorkGatewayType = "Vpn"
$VirtualNetworkGatewaySku = "VpnGw1"

function Get-InteractiveParameters {

    <#-----   INTERACTIVE  ------#>
$ResourceGroupName = Read-Host -Prompt "Enter the Resource Group name"
$VNETName = Read-Host -Prompt "Enter the VNET Name"
$Location = Read-Host -Prompt "Location of the Network (Default: East US)"
$SuperNetAddressPrefix = Read-Host -Prompt "Enter the Supernet (MUsST INCLUDE THE TWO) CIDR (Default: 172.16.0.0/24)"
$Subnet1Name = Read-Host -Prompt "Enter the Subnet 1 Name (Default: Subnet1 with CIDR 172.16.100.0/24)"
$Subnet2Name = Read-Host -Prompt "Enter the Subnet 2 Name (Default: Subnet2 with CIDR 172.16.200.0/24"
$NSGName = $VNETName + "-NSG "
$GatewayName = $VNETName + "-GW"
$LocalGatewayName = $VNETName + "-LGW"
$LocalGatewayIP = Read-Host -Prompt "Enter the Local Gateway IP (Remote Device IP)"
$PublicIPName = $VNETName + "-GW-PublicIP"
$PublicIPAllocationMethod = "Static"
$PublicIPDnsLabel = Read-Host -Prompt "Enter the Public IP DNS Label (Default: snakevnet-gw)"
$VirtualNetworkGatewayType = "Vpn"
$VirtualNetworkGatewaySku = "VpnGw1"


}

# <#--- Functions --#>



function Create-ResourceGroup {
    if(Get-AzResourceGroup -Name $ResourceGroupName -ErrorAction SilentlyContinue) {
        Write-Host "Resource Group $ResourceGroupName already exists"
    }
    else {
        Write-Host "Creating Resource Group $ResourceGroupName"
        New-AzResourceGroup -Name $ResourceGroupName -Location $Location
    }
    

   return $ResourceGroupName
}
function Create-VNET {
    
    

    if(Get-AzResourceGroup -Name $ResourceGroupName -ErrorAction SilentlyContinue) {
        $VNET = New-AzVirtualNetwork -ResourceGroupName $ResourceGroupName -Name $VNETName -AddressPrefix $SuperNetAddressPrefix -Location $Location -Subnet $Subnet1 , $subnet2,  $GatewaySubnet
    }
    else {
        Write-Host "Resource Group does not exist"
    }


    return $VNET

}

function Create-NSG{
    if(Get-AzResourceGroup -Name $ResourceGroupName -ErrorAction SilentlyContinue) {
        $NSG = New-AzNetworkSecurityGroup -ResourceGroupName $ResourceGroupName -Name $NSGName -Location $Location
    }
    else {
        Write-Host "Resource Group does not exist"
    }
    return $NSG
}

function Create-Subnet1 {
 
    $VNET = Get-AzVirtualNetwork -ResourceGroupName $ResourceGroupName -Name $VNETName

    if($NSGName -and $VNETName -and $ResourceGroupName -and $Subnet1Name -and $Subnet1AddressPrefix){
        $Subnet1 = New-AzVirtualNetworkSubnetConfig -Name $Subnet1Name -AddressPrefix $Subnet1AddressPrefix   
    }
    else {
        Write-Host "One of the parameters is missing"
    }
    return $Subnet1
}

function Create-Subnet2 {
    
    $NSGName = Get-AzNetworkSecurityGroup -ResourceGroupName $ResourceGroupName 
    if($NSGName -and $VNETName -and $ResourceGroupName -and $Subnet2Name -and $Subnet2AddressPrefix){
        $Subnet2 = New-AzVirtualNetworkSubnetConfig -Name $Subnet2Name -AddressPrefix $Subnet2AddressPrefix 
    }
    else {
        Write-Host "One of the parameters is missing"
    }
    return $Subnet2
}

function Create-GatewaySubnet{
    $GatewaySubnet = New-AzVirtualNetworkSubnetConfig -Name $GatewaySubnetName -AddressPrefix $GatewaySubnetAddressPrefix
    return $GatewaySubnet
}
function Create-Gateway {
    $PublicIP = get-AzPublicIpAddress -ResourceGroupName $ResourceGroupName -Name $PublicIPName

    $subnet = New-AzVirtualNetworkSubnetConfig -Name $GatewaySubnetName -AddressPrefix $GatewaySubnetAddressPrefix 
    $subnetID = Get-AzVirtualNetworkSubnetConfig -VirtualNetwork $VNET -Name $GatewaySubnetName  | Select-Object -ExpandProperty Id
    $vnetIpConfig = New-AzVirtualNetworkGatewayIpConfig -Name "GatewaySubnet" -PublicIpAddressId $publicip.id -Subnetid  $subnetID 


    if($ResourceGroupName -and $VNETName -and $GatewayName -and $PublicIPName  -and $PublicIPDnsLabel -and $VirtualNetworkGatewayType -and $VirtualNetworkGatewaySku){
        $Gateway = New-AzVirtualNetworkGateway -ResourceGroupName $ResourceGroupName -Name $GatewayName -Location $Location     -GatewayType $VirtualNetworkGatewayType -VpnType RouteBased -GatewaySku VpnGw1  -IpConfigurations $vnetIpConfig  
    }
    else {
        Write-Host "One of the parameters is missing"
    }

    return $Gateway

}

function Create-LocalGateway {

 
    if($ResourceGroupName -and $LocalGatewayName -and $LocalGatewayIPs){
        $LocalGateway = New-AzLocalNetworkGateway -ResourceGroupName $ResourceGroupName -Name $LocalGatewayName  -GatewayIpAddress  $LocalGatewayIP -Location $Location  -AddressPrefix $LocalGatewayAddressPrefix
    }
    else {
        Write-Host "One of the parameters is missing"
    }

    return $LocalGateway
}

function Create-PublicIP {

 

    if($ResourceGroupName -and $PublicIPName){
        $PublicIP = New-AzPublicIpAddress -ResourceGroupName $ResourceGroupName -Name $PublicIPName -Location $Location -AllocationMethod $PublicIPAllocationMethod 
    }
    else {
        Write-Host "One of the parameters is missing"
    }

    return $PublicIP

}

function Create-Connection {
   
    param(
        [Parameter(Mandatory=$true)]
        [string]$LocalGatewayName,
        [Parameter(Mandatory=$true)]
        [string]$ConnectionName
    )

    $Gateway = Get-AzVirtualNetworkGateway -ResourceGroupName $ResourceGroupName 
    $GatewayName = $Gateway.Name

    if($ResourceGroupName -and $GatewayName -and $LocalGatewayName -and $ConnectionName -and $SharedKey){
        $Connection = New-AzVirtualNetworkGatewayConnection -ResourceGroupName $ResourceGroupName -Name $ConnectionName -Location $Location -VirtualNetworkGateway1 $Gateway -LocalNetworkGateway2 $LocalGateway -ConnectionType IPsec -SharedKey $SharedKey
    }
    else {
        Write-Host "One of the parameters is missing"
    }

    return $Connection

}

function Create-AllResources {

    Create-ResourceGroup
    $VNET = Create-VNET  
    $AzureSecurityGroup = Create-NSG
    $Subnet1 = Create-Subnet1 
    $Subnet2 = Create-Subnet2 
    $GatewaySubnet = Create-GatewaySubnet
    $PublicIP = Create-PublicIP 
    $Gateway = Create-Gateway 
    $LocalGateway = Create-LocalGateway 
    $Connection = Create-Connection (Get-Random -Minimum 1 -Maximum 1000) ('Connection' + (Get-Random -Minimum 1 -Maximum 1000))

}




```

# License
[MIT](https://choosealicense.com/licenses/mit/)

# Author
[Murtadha Marzouq](http://www.findasnake.com 
    )