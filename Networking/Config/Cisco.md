# Show the Cisco devices running configuration
sh run
show running-configuration
sh run int gi1/0/1
sh run | include domain

# Return information on a devices interfaces
sh ip int brie
show ip interface brief

# Show port-channel info
show lacp 2 stats
show lacp 2 status
show lacp 2 summary

# Show routing information
sh ip ro
show ip route

# Return VLAN summary info
sh vlan
sh vlan brief

# Save Configuration
copy running-config startup-config

# Set IP Address
int gi1
ip address 10.0.0.1 255.255.255.0

# Get DHCP Assigned IP
ip helper-address 10.0.0.68
ip address dhcp

# Restart Interface
shut
no shut

# Set Default Gateway
ip default-gateway 10.0.0.1

# Set DNS Server
ip name-server 1.1.1.1 1.0.0.1

# Ping
ping 10.0.0.1 repeat 2
ping 10.0.0.1 count 2

# Get Interface Info
sh interface status
sh interfaces trunk
sh interfaces switchport
sh int gi1/0/1
sh run int gi1/0/1

# Set Static Route
ip route 10.0.0.0 255.255.255.0 10.0.0.1

# Get Routing Table Info
show route
show route ospf
show isis routes
show route bgp
show access-list
show nat
  