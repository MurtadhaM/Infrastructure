$ResourceGroupName = 'SnakeCharity'
$Location = 'EastUS2'
$VNetName = 'SnakeCharity-vnet'
$SubnetName = 'SnakeCharitySubnet'
$NetworkSecurityGroupName = 'CentOS-StudentCharity-nsg'
$PublicIpAddressName = 'CentOS-StudentCharity-ip' + (Get-Random) 
$VmName = 'CentOS-StudentCharity-vm' + (Get-Random)
$VmSize = 'Standard_B1s'
$DataDiskSizeInGb = 32
$Credential = Get-Credential


New-AzVm `
-ResourceGroupName $ResourceGroupName `
-Location $Location `
-VirtualNetworkName $VNetName `
-SubnetName $SubnetName `
-Name $VmName `
-ImageName 'OpenLogic:CentOS:7.5:latest' `
-Credential $Credential `
-Size $VmSize `
-PublicIpAddressName $PublicIpAddressName `
-SecurityGroupName $NetworkSecurityGroupName `
-DataDiskSizeInGb $DataDiskSizeInGb `
-Verbose -AsJob