# Network Design Topologies 
## Table of Contents
- [Network Design Topologies](#network-design-topologies)
  - [Table of Contents](#table-of-contents)
  - [Summary](#summary)
  - [Types of Network Topologies](#types-of-network-topologies)
    - [1. **Flat Topology**](#1-flat-topology)
    - [2. **Multi-Access Topology**](#2-multi-access-topology)
      - [2.1 **3-Tier Architecture**](#21-3-tier-architecture)
        - [2.1.1 **Core Layer**](#211-core-layer)
        - [2.1.2 **Distribution Layer**](#212-distribution-layer)
        - [2.1.3 **Access Layer**](#213-access-layer)
      - [2.2 **2-Tier Architecture**](#22-2-tier-architecture)
    - [3. **Spine-Leaf Topology**](#3-spine-leaf-topology)
    - [Performance Considerations](#performance-considerations)

## Summary

- **Network Design Topologies** are the physical and logical layout of a network.

| **Network Design Topologies** | **Description** | **Examples** | **Use Cases** |
| --- | --- | --- | --- |
| **Flat Topology** | All devices are connected to a single network segment. | Small office or home network. | Small office or home network. |
| **Multi-Access Topology** | Network is divided into multiple layers. | 3-Tier Architecture, 2-Tier Architecture, Spine-Leaf Topology. | Large office or enterprise network. |
| **Spine-Leaf Topology** | Network is divided into two layers: Spine and Leaf. | Data Center Network, AWS VPC, Azure Virtual Network, Google Cloud VPC. | Data Center Network, Cloud Network. |

**Campus LAN design options** include:
<img src=image-2.png width=100%/>


## Types of Network Topologies
### 1. **Flat Topology**
- Example: Small office or home network.
### 2. **Multi-Access Topology**
#### 2.1 **3-Tier Architecture**
##### 2.1.1 **Core Layer**
- High-speed switching backbone.
- Aggregates distribution layer switches.
- Redundant links to distribution layer.
- High availability.
- Example: Cisco Nexus 7000 Series.
##### 2.1.2 **Distribution Layer**
- Aggregates access layer switches.
- Redundant links to core layer.
- Provides routing, filtering, and WAN access.
- Example: Cisco Catalyst 6500 Series.
##### 2.1.3 **Access Layer**
- Connects end devices to the network.
- Provides user access to network resources.
- Example: Cisco Catalyst 3750 Series.
- Example: Data Center Network.

  Source: https://www.cisco.com/c/dam/global/en_ae/training-events/pdfs/designing-smart-and-reliable-networks.pdf

#### 2.2 **2-Tier Architecture**
Core and Distribution layers are combined.
- Example: Small to medium-sized networks.

### 3. **Spine-Leaf Topology**
Network is divided into two layers: Spine and Leaf.
- Spine Layer: Aggregates traffic between Leaf switches.
- Leaf Layer: Connects end devices to the network.
- Example: Data Center Network.
- Example: Cisco Nexus 9000 Series.
- Example: AWS VPC.
- Example: Azure Virtual Network.
- Example: Google Cloud VPC.

### Performance Considerations
<img src=image-3.png width=100%/>
