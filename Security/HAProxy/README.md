# HAProxy


## Table of Contents
- [HAProxy](#haproxy)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Architecture](#architecture)
  - [HAProxy Modes](#haproxy-modes)
  - [Termination Vs. Pass-through](#termination-vs-pass-through)
  - [Dependencies](#dependencies)
  - [Example](#example)



## Introduction
HAProxy is a free, very fast and reliable solution offering high availability, load balancing, and proxying for TCP and HTTP-based applications. It is particularly suited for very high traffic web sites and powers quite a number of the world's most visited ones. Over the years it has become the de-facto standard opensource load balancer, is now shipped with most mainstream Linux distributions, and is often deployed by default in cloud platforms. Since it does not advertise itself, we only know it's used when the admins report it.


## Features
- **Load Balancing**: HAProxy is a very fast and reliable solution offering high availability, load balancing, and proxying for TCP and HTTP-based applications.
- **SSL Termination**: HAProxy can terminate SSL connections and pass unencrypted traffic to the backend servers.
- **Health Checks**: HAProxy can check the health of the backend servers and stop sending traffic to the unhealthy servers.
- **Reverse Proxy**: HAProxy can be used as a reverse proxy to redirect traffic to multiple servers.
- **Web Application Firewall**: HAProxy can be used as a Web Application Firewall to protect your web applications from common web exploits.
- **Caching**: HAProxy can be used as a caching server to cache the content and serve it to the clients.
- **Compression**: HAProxy can compress the content before sending it to the clients.
- **Rate Limiting**: HAProxy can limit the number of requests a client can make to the server.
- **Logging**: HAProxy can log the client requests and server responses for debugging purposes.
- **Monitoring**: HAProxy provides a web interface to monitor the health of the backend servers and the traffic statistics.
- **High Availability**: HAProxy can be configured in an active-passive or active-active mode to provide high availability.
- **Scalability**: HAProxy can be scaled horizontally by adding more servers to handle the increased traffic.
- **Security**: HAProxy provides security features like SSL termination, Web Application Firewall, and rate limiting to protect your web applications from common web exploits.
- **Customization**: HAProxy is highly customizable and can be configured to suit your requirements.
- **Open Source**: HAProxy is an open-source software and is free to use.

##  Architecture
1. Frontend - anything in front of haproxy
- Timeout Client
- Bind (IP:Port)
- ACL (Access Control List)


1. Backend - anything behind haproxy
- Timeout Connect
- Timeout Server
- Balance (roundrobin, leastconn, source)

## HAProxy Modes
1. **Layer 4 (TCP) Mode**: In this mode, HAProxy forwards the TCP packets from the client to the backend servers without inspecting the content of the packets. It is also known as TCP mode or TCP proxy mode. It is used for load balancing TCP traffic such as HTTP, HTTPS, SSH, SMTP, etc.
2. **Layer 7 (HTTP) Mode**: In this mode, HAProxy forwards the HTTP requests from the client to the backend servers after inspecting the content of the packets. It is also known as HTTP mode or HTTP proxy mode. It is used for load balancing HTTP traffic such as HTTP, HTTPS, etc.


## Termination Vs. Pass-through
1. **Termination**: In this mode, HAProxy terminates the SSL connection from the client and establishes a new SSL connection to the backend servers. It decrypts the SSL traffic from the client and encrypts the traffic to the backend servers. It is also known as SSL termination or SSL offloading. It is used to offload the SSL processing from the backend servers and improve the performance of the backend servers.
2. **Pass-through**: In this mode, HAProxy does not terminate the SSL connection from the client and forwards the SSL traffic to the backend servers without decrypting it. It is also known as SSL pass-through or SSL bridging. It is used to pass the SSL traffic to the backend servers without decrypting it.


## Dependencies
- [Docker](https://www.docker.com/)
- [HAProxy](https://www.haproxy.org/)
- [OpenSSL](https://www.openssl.org/)
- [Certbot](https://certbot.eff.org/)
- [Let's Encrypt](https://letsencrypt.org/)

- Commands to Install Dependencies:
  
```bash
sudo apt update
sudo apt install docker.io openssl certbot python3-certbot-nginx python3-certbot-apache haproxy -y
```

- Commands to Start Docker Service:
  
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

## Example

- HAProxy Configuration File:
  
```yaml
frontend http_front
    bind *:80
    timeout client 1m
    mode http
    default_backend http_back

backend http_back
    server server1 localhost:80

frontend https_front
    bind *:443 ssl crt /etc/ssl/certs/haproxy.pem
    timeout client 1m
    mode http
    default_backend https_back

backend https_back
    server server1 localhost:443


```

- Openssl Command to Generate SSL Certificate:
  
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/haproxy.key -out /etc/ssl/certs/haproxy.pem
```

- HAProxy Docker Command:
  
```bash
docker run -d -p 80:80 -p 443:443 haproxy
```

- Certbot Command to Generate SSL Certificate:
  
```bash
certbot certonly --standalone -d example.com
```





