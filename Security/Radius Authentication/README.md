# Radius Authentication 
<img 
center src="https://documentation.meraki.com/@api/deki/files/3580/RADIUS_IP.png?revision=1&size=bestfit&width=710&height=381" width="100%"/> 

## Table of Contents
----
- [Overview](#overview)
- [Windows Deployment](#configuration)
- [Deployment](#configuration)
- [License](#license)
- [Author](#author)
### Overview
----
RADIUS is a protocol that allows a network device to authenticate a user by sending a request to a RADIUS server. The RADIUS server then sends a response back to the network device, which can then allow or deny access to the user. RADIUS is a common protocol used for authentication in wireless networks, but it can also be used for authentication in wired networks.

## Windows Deployment
----
<img src=./1.png width=100% height=100%/>
<img src=./2.gif width=100% height=100%/>

## Deployment
----
`If you deploy Network Policy Server (NPS) as a RADIUS server, the NPS performs authentication, authorization, and accounting for connection requests. This is true for the local domain as well as the domains that trust the local domain. However, if you use NPS as the RADIUS proxy, it will relay the connection request to a server running NPS or another RADIUS server in remote domains.`

Deploying an NPS include planning for:

1. NPS configuration
2. RADIUS clients
3. Use of authentication methods
4. Network policies
5. Accounting


#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com 
    )