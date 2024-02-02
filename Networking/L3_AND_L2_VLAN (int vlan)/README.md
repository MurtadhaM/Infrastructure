## L3 VS L2 VLANS IN CISCO SWITCHES
---
<!--# BANNER CUSTOM SVG -->

<p align="center"> <img  src="https://img.shields.io/badge/VLANS-Cisco-blue" alt="L3 VS L2 VLANS IN CISCO SWITCHES"  width=200/></p>

---

## Overview

``
L2 VLANs are used to segregate traffic within a single broadcast domain. L3 VLANs are used to segregate traffic within a single IP subnet
``

<img src=image.png width=100% align=center/>



#### Comparison Table
| L2 VLANs | L3 VLANs |
|----------|----------|
| L2 VLANs are used to segregate traffic within a single broadcast domain. | L3 VLANs are used to segregate traffic within a single IP subnet. |
| L2 VLANs are used to break up broadcast domains. | L3 VLANs are used to break up IP subnets. |
| L2 Switches are used to create L2 VLANs. | Routers & L3 Switches are used to create L3 VLANs. |
| Commonly used in small to medium-sized networks. | Commonly used in medium to large-sized networks. |
---

<p align=center> <img  src="https://img.shields.io/badge/CONFIGURATION-Cisco-blue" alt="L3 VS L2 VLANS IN CISCO SWITCHES"  width=200/></p>

---
- [x] L2 VLANs Configuration

```bash
# Create VLANs
vlan 10 
name LAN
# Assign ports to VLANs
int g0/1
switchport mode access
switchport access vlan 10
# Trunking between switches (802.1Q)
int g0/24
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 10,20
# Show VLANs
show vlan
# Show trunk ports
show int trunk
```


- [x] L3 VLANs Configuration
```bash
# Create VLANs
vlan 10
name LAN
# Assign ports to VLANs
int g0/1
switchport mode access
switchport access vlan 10
# Create SVI
int vlan 10
ip address
# Show SVI
show ip int brief
# Inter-VLAN routing
int g0/24
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 10,20
int vlan 10
ip address
int vlan 20
ip address
# Show routing table
show ip route
```

## Conclusion
---
**L2 VLANs are used to segregate traffic within a single broadcast domain. L3 VLANs are used to segregate traffic within a single IP subnet.**


