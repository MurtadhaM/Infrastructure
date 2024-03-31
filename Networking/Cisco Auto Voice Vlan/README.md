# Cisco  Voice VLAN Configuration
<a href="http://www.findasnake.com" name="Cisco Voice VLAN Configuration"><img src="https://cdn-icons-png.flaticon.com/512/3162/3162235.png" width="100"/> </a>
----
This is a script to configure Cisco Voice VLANs. It is based on the Cisco Voice VLAN Configuration Guide.

## Table of Contents
----
- [Cisco  Voice VLAN Configuration](#cisco--voice-vlan-configuration)
  - [ ](#-)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Lab](#lab)
    - [Configuration](#configuration)
      - [License](#license)
      - [Author](#author)


## Overview

----
- Because a Cisco 7960 IP Phone also supports a connection to a PC or other device, a port connecting
the switch to a Cisco IP Phone can carry mixed traffic. You can configure a port to decide how the Cisco
IP Phone carries voice traffic and data traffic.
-  The voice VLAN should be present and active on the switch for the IP phone to correctly communicate
on the voice VLAN. Use the show vlan privileged EXEC command to see if the VLAN is present (listed
in the display). If the VLAN is not listed, create the voice VLAN.
-  The Power over Ethernet (PoE) switches are capable of automatically providing power to Cisco
pre-standard and IEEE 802.3af-compliant powered devices if they are not being powered by an AC
power source.
-  The Port Fast feature is automatically enabled when voice VLAN is configured. When you disable voice
VLAN, the Port Fast feature is not automatically disabled.
-  If the Cisco IP Phone and a device attached to the phone are in the same VLAN, they must be in the
same IP subnet. These conditions indicate that they are in the same VLAN:
◦They both use IEEE 802.1p or untagged frames.
◦The Cisco IP Phone uses IEEE 802.1p frames, and the device uses untagged frames.
◦The Cisco IP Phone uses untagged frames, and the device uses IEEE 802.1p frames.
◦The Cisco IP Phone uses IEEE 802.1Q frames, and the voice VLAN is the same as the access
VLAN.
``

### Lab
![Demo](https://github.com/MurtadhaM/Infrastructure/blob/main/Networking/Cisco%20Auto%20Voice%20Vlan/VOICE%20VLAN.png?raw=true)



### Configuration
```
interface GigabitEthernet1/0/5
switchport access vlan 100
switchport voice vlan 700
```
#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com 
    )