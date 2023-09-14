# Podman & Docker Overview/Setup
---
<a href="http://findasnake.com">![](https://img.shields.io/badge/Setup-Overview-blue)</a>
<a href="http://findasnake.com">![](https://img.shields.io/badge/Setup-Podman-green)</a>
<a href="http://findasnake.com">![](https://img.shields.io/badge/Setup-Docker-red)</a>
<a href="http://findasnake.com">![](https://img.shields.io/badge/Setup-Dockerfile-yellow)</a>

*Docker & Podman are both container engines that allow you to run containers on your system. Unlike Docker, **Podman does not require a daemon** to run containers and pods. Podman can run as a rootless container engine. Podman uses a storage driver called overlayfs. Podman uses a CNI-based networking stack. Podman uses a setuid binary to run container*
---
# Overview
<a href="http://findasnake.com">![Overview](https://img.shields.io/badge/Overview-Podman%20vs%20Docker-red)</a>
## <p align=center> Podman vs Docker</p>

| Component | Podman | Docker |
| --- | --- | --- |
| Architecture | Podman is a daemonless container engine for developing, managing, and running OCI Containers on your Linux System. | Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. |
| Daemon | Podman does not require a daemon to run containers and pods. | Docker requires a daemon to run containers and pods. |
| Rootless | Podman can run as a rootless container engine. | Docker can not run as a rootless container engine. |
| Images | Podman can run Docker images. | Docker can run Docker images. |
| Storage | Podman uses a storage driver called overlayfs. | Docker uses a storage driver called overlay2. |
| Networking | Podman uses a CNI-based networking stack. | Docker uses a libnetwork-based networking stack. |
| Security | Podman uses a setuid binary to run containers. | Docker uses a setgid binary to run containers. |
# Podman
| [Install Podman](#install-podman) | [Run Podman](#run-podman) | [Build Podman Image](#build-podman-image) | [Push Podman Image](#push-podman-image) | [Run Podman Image](#run-podman-image) |
| --- | --- | --- | --- | --- |




## Install Podman
<a href="http://findasnake.com">![](https://img.shields.io/badge/Overview-Podman-green)</a>
```bash
sudo apt-get update && sudo apt-get install podman
## Install podman-workstation
podman machine init
podman machine startcm
podman machine env


## Run Podman
podman run -it --rm ubuntu:latest
## Build Podman Image
podman build .  -t docker.io/mmarzouq/$REPONAME --file Dockerfile
## Push Podman Image
podman push docker.io/mmarzouq/$REPONAME
## Run Podman Image
podman run --hostname SnakeDevBox  -it mmarzouq/snake-dev-box:latest zsh

```
# Docker
## Install Docker
<a href="http://findasnake.com">![](https://img.shields.io/badge/Overview-Docker-blue)</a>
```bash
sudo apt-get update  && sudo apt-get install docker-ce docker-ce-cli containerd.io

## Run Docker
docker run -it --rm ubuntu:latest
## Build Docker Image
docker build .  -t docker.io/mmarzouq/$REPONAME --file Dockerfile
## Push Docker Image
dockr push docker.io/mmarzouq/$REPONAME
## Run Docker Image
docker run --hostname SnakeDevBox  -it mmarzouq/snake-dev-box:latest zsh
```
---
# Dockerfile 
<a href="http://findasnake.com">![](https://img.shields.io/badge/Overview-Dockerfile-yellow)</a>

```dockerfile
# Set the base image
FROM ubuntu:latest
# Set the maintainer
MAINTAINER mmarzouq
# Set the commands to run
# Update the system
RUN apt-get update
# Install ZSH
RUN apt-get install zsh curl git nano wget
# Set the default shell
SHELL ["/bin/zsh", "-c"]
# Set the default user
USER root
# INSTALL OH-MY-ZSH
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
# INSTALL SSH
RUN apt-get install openssh-server
# ENABLE SSH
RUN ssh-keygen -A
RUN echo "PermitRootLogin yes" >> /etc/ssh/sshd_config
RUN echo "PasswordAuthentication yes" >> /etc/ssh/sshd_config
# OMZSH THEME
RUN sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="agnoster"/g' ~/.zshrc
# EXPOSE PORTS
EXPOSE 22
EXPOSE 8080
```
---
<!--  
# DOCKER BUILD 
```bash
REPONAME=snake-dev-box
podman build .  -t docker.io/mmarzouq/$REPONAME --file Dockerfile
podman push docker.io/mmarzouq/$REPONAME
DOCKER RUN
podman run --hostname SnakeDevBox  -it mmarzouq/snake-dev-box:latest zsh
```
-->