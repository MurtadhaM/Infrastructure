# DHCP Relay  
----
DHCP Relay is a service that forwards DHCP packets between DHCP clients and DHCP servers without allowing the DHCP clients to communicate directly with the DHCP servers. This is useful when the DHCP clients are on a different subnet than the DHCP servers. The DHCP Relay service is enabled by default on the FortiGate unit.

## Table of Contents
----
  - [Overview](#overview)
  - [DHCP Relay Configuration](#dhcp-relay-configuration)
  - [DHCP Relay Configuration Example](#dhcp-relay-configuration-example)
  - [License](#license)
  - [Author](#author)


## Lab
![Demo](https://github.com/MurtadhaM/Infrastructure/blob/main/Networking/DHCP%20Relay/DHCP%20Relay.png?raw=true)
## DHCP Relay Configuration Guidelines (Cisco)

----
#### DHCP Relay Agent Overview
`A DHCP relay agent is any host that forwards DHCP packets between clients and servers. Relay agents are used to forward requests and replies between clients and servers when they are not on the same physical subnet. Relay agent forwarding is distinct from the normal forwarding of an IP router, where IP datagrams are switched between networks somewhat transparently. By contrast, relay agents receive DHCP messages and then generate a new DHCP message to send out on another interface. The relay agent sets the gateway address (giaddr field of the DHCP packet) and, if configured, adds the relay agent information option (option82) in the packet and forwards it to the DHCP server. The reply from the server is forwarded back to the client after removing option 82.`
#### DHCP Relay Agent Configuration
 DHCP Relay Agent and Relay Agent Information Option Support: Example

The following example shows how to enable the DHCP server, the relay agent, and the insertion and removal of the DHCP relay information option (option 82). Note that the Cisco IOS DHCP server is enabled by default. In this example, the DHCP server was disabled:
```
!reenables the DHCP server
service dhcp
ip dhcp relay information option
!
interface ethernet0/0
 ip address 192.168.100.1 255.255.255.0
 ip helper-address 10.55.11.3
```

## Source
[DHCP Relay](https://www.cisco.com/en/US/docs/ios/12_4t/ip_addr/configuration/guide/htdhcpre.html#wp1085232)



#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com 
    )
