# Get IP Information
ipconfig /all
netsh interface ipv4 show address
Get-NetIpAddress -AddressFamily IPv4
Get-CimInstance -Class Win32_NetworkAdapterConfiguration -Filter IPEnabled=$true | Select-Object -Property IPAddress

# Release DHCP Address
ipconfig /release
Invoke-CimMethod -ClassName Win32_NetworkAdapterConfiguration -MethodName ReleaseDHCPLeaseAll
Invoke-CimMethod -MethodName ReleaseDHCPLease -Query 'SELECT * from Win32_NetworkAdapterConfiguration WHERE DHCPServer="10.0.0.1"'

# Renew DHCP Address
ipconfig /renew
Invoke-CimMethod -ClassName Win32_NetworkAdapterConfiguration -MethodName RenewDHCPLeaseAll
Invoke-CimMethod -MethodName RenewDHCPLease -Query 'SELECT * from Win32_NetworkAdapterConfiguration WHERE DHCPServer="10.0.0.1"'

# Clear DNS Cache
ipconfig /flushdns
Clear-DnsClientCache
Get-DnsClientCache

# Send Continuous Ping
ping -t 10.0.0.1

# Send Ping
ping 10.0.0.1
hping3 -c 1 -V -1 -C 17 osbornepro.com
Test-Connection -ComputerName 10.0.0.1 -BufferSize 32 -Count 2
Get-CimInstance -Class Win32_PingStatus -Filter "Address='10.0.0.1'"

# Test Open Port on Remote Device
Test-WsMan -ComputerName 10.0.0.1
Test-NetConnection -ComputerName 10.0.0.1 -Port 3389

# List Open Ports and Connections
netstat -ano
netsh interface ipv4 show tcpconnections
netsh interface ipv4 show dynamicportrange protocol=tcp
Get-NetTcpConnection -State Listen
Get-NetTcpConnection -State Established

# Run a Routing Trace
tracert 10.0.0.1
hping3 -traceroute -V -1 osbornepro.com
hping --traceroute -V -S -p 80 -s 5050 osbornepro.com
Test-NetConnection -ComputerName 10.0.0.1 -DiagnoseRouting
Test-NetConnection -ComputerName 10.0.0.1 -Traceroute

# Get Network Adapter Info
ipconfig /all
netsh interface ipv4 show interfaces
netsh interface ipv4 show config
netsh interface ipv4 show global
Get-NetAdapter -AddressFamily IPv4
Get-CimInstance -Class Win32_NetworkAdapter
Get-CimInstance -Class Win32_NetworkAdapterConfiguration -Filter IPEnabled=$true

# Use DHCP to obtain IP
netsh interface ipv4 set address name="Local Area Connection 2" source=dhcp
Set-NetIPInterface -InterfaceIndex 12 -Dhcp Enabled

# Set IP Address
netsh interface ipv4 set address name="Local Area Connection 2" static 10.0.0.2 255.255.255.0 10.0.0.1 store=persistent
New-NetIPAddress –InterfaceAlias 'Ethernet 2' –IPv4Address '10.0.0.2' –PrefixLength 24 -DefaultGateway '10.0.0.1'

# Set DNS Servers
netsh interface ipv4 set dnsservers name="Local Area Connection 2"  source=static address="1.1.1.1" validate=no
netsh interface ipv4 add dnsservers name="Local Area Connection 2" address="1.0.0.1" validate=no index=2
Set-DnsClientServerAddress -InterfaceIndex 12 -ServerAddresses @('1.1.1.1','1.0.0.1')
Get-DnsClientServerAddress

# Add Route
route /p add 10.0.0.0 mask 255.255.255.0 10.0.0.1 25
netsh interface add route prefix=10.0.0.0/24 interface="Local Area Connection 2" nexthop=10.0.0.1
New-NetRoute –DestinationPrefix "10.0.0.0/24" –InterfaceIndex 12 –NextHop 10.0.0.1
Add-VpnConnectionRoute -ConnectionName "WorkVPN" -DestinationPrefix "192.168.0.0/24" -RouteMetric 1

# Delete Route
route delete 10.0.0.0 mask 255.255.255.0 10.0.0.1
netsh interface delete route prefix=10.0.0.0/24 interface="Local Area Connection 2" nexthop=10.0.0.1
Remove-NetRoute -DestinationPrefix 10.0.0.0/24 -InterfaceIndex 12 -NextHop 10.0.0.1
Remove-VpnConnectionRoute -ConnectionName "WorkVPN" -DestinationPrefix "192.168.0.0/24" -RouteMetric 1

# View Routing Table
route print
netsh interface ipv4 show route
Get-NetRoute

# Restart Network Adapter
netsh interface set interface Ethernet0 disable
netsh interface set interface Ethernet0 enable
Restart-NetAdapter -Name "Wi-Fi"
    