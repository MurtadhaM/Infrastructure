# Layer 3 Networking

## Quick Links
- [Cisco](../../Config/Cisco.md)
- [Linux](../../Config/Linux.md)
- [Windows](../../Config/Windows.md)



## Overview
Layer 3 Networking deals with the routing and switching frames and packets between different networks.  This is the layer where IP addresses are used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.  This is also the layer where the Internet Protocol (IP) is used to route traffic between different networks.

## Devices and Protocols

### Devices
- Routers
- Layer 3 Switches
- Firewalls
### Protocols
- Internet Protocol (IP)
- Internet Control Message Protocol (ICMP)
- Virtal Local Area Network (VLAN - 802.1q)
- Wireless Local Area Network (WLAN - 802.11)
- Open Shortest Path First (OSPF)
- Border Gateway Protocol (BGP)
- Routing Information Protocol (RIP)


## Network Setup and Configuration

## Linux Networking

### IP Addressing
```bash
# Show IP Address
ip addr show
```
#### Static IP Addressing
```bash
# Set IP Address
ip addr <interface> <ip address>/<subnet mask> broadcast <broadcast address> dev <interface>
```
#### Dynamic IP Addressing
```bash
# DHCP Client
dhclient eth0
```
#### DHCP SERVER 
---

```javascript

IMPORTANT: The interface must be in the same subnet as the clients.

```

This install of dhcpd expects config files to be in :

``/usr/local/etc.``

All state files (leases and pids) are stored in:

`` /usr/local/var/dhcpd.``

---

- [x]  DHCPv4: 
``/usr/local/etc/dhcpd.conf``
 - [x] DHCPv6: ``/usr/local/etc/dhcpd6.conf``


```bash
# Install DHCP Server
sudo apt install isc-dhcp-server
# Configure DHCP Server
sudo nano /etc/dhcp/dhcpd.conf
# Start DHCP Server
sudo systemctl start isc-dhcp-server
# Enable DHCP Server
sudo systemctl enable isc-dhcp-server
```

#### DNS
```bash
# Install DNS Server
sudo apt install bind9
# Configure DNS Server
sudo nano /etc/bind/named.conf.options
# Start DNS Server
sudo systemctl start bind9
# Enable DNS Server
sudo systemctl enable bind9
```
#### ARP
```bash
# Show ARP Table
arp -a
```
#### Routing
```bash
# Show Routing Table
route -n
# Add Route
route add -net <network> netmask <subnet mask> gw <gateway> dev <interface>
# Delete Route
route del -net <network> netmask <subnet mask> gw <gateway> dev <interface>
# Add Default Route
route add default gw <gateway> dev <interface>
# Flush Routing Table
route flush
```
#### IP Forwarding
```bash 
# Enable IP Forwarding
echo 1 > /proc/sys/net/ipv4/ip_forward
# Forwarding Rules
iptables -t nat -A POSTROUTING -o <interface> -j MASQUERADE
iptables -A FORWARD -i <interface> -o <interface> -m state --state RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -i <interface> -o <interface> -j ACCEPT
```

