# Fortinet HA Configuration
<img 
center src="https://fortinetweb.s3.amazonaws.com/docs.fortinet.com/v2/resources/4dcf9363-d124-11ea-8b7d-00505692583a/images/704d2c17f4677c8b53ad06ca675aed18_HA%20virtual%20cluster%20topology.png" width="100%"/> 

----

## Table of Contents
----
- [Overview](#overview)
- [Lab](#lab)
- [Configuration](#configuration)
- [License](#license)
- [Author](#author)


## Overview
The FortiGate Clustering Protocol (FGCP) provides failover protection
FGCP supports failover protection in four ways:
1.   If a link fails.
2.  If a device loses power.
3.  If an SSD fails.
4.  If memory utilization exceeds the threshold for a specified amount of time.

## Connecting to the FortiGate
To connect a FortiGate HA cluster
- Connect the WAN1 interfaces of each cluster unit to a switch connected to the internet.
- Connect the Port1 interfaces of each cluster unit to a switch connected to the internal network.
-  Connect the HA1 interfaces of the cluster units together. You can use a crossover Ethernet cable or a regular Ethernet cable. (You can also connect the interfaces using Ethernet cables and a switch.)
-  Connect the HA2 interfaces of the cluster units together. You can use a crossover Ethernet cable or a regular Ethernet cable. (You can also connect the interfaces using Ethernet cables and a switch.)
-  Power on both FortiGates.


### Configuration Example
```
# CHANGING HOSTNAME
config system global
    set hostname Example1_host
End
# Enabling HA
config system ha
    set mode a-p
    set group-name Example_cluster
  #Setting the HEARTBEAT INTERFACE
   # set hbdev InterfaceName Priority Interface2Name Priority2
    set hbdev port3 10 port2 2
end

```
#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com 
    )