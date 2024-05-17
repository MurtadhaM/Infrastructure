# KUBERNETES LAB

## Minikube 

### Install Minikube

```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
  && chmod +x minikube
sudo install minikube /usr/local/bin/
```

### Start Minikube WSL2

```bash
# INSTALL DEPENDENCIES
apt install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst virt-manager docker.io conntrack 
# RUN SERVICES
libvirtd ;
disown %libvirtd ; 
virtlogd  ;
disown %virtlogd;
service docker start
# START MINIKUBE
minikube addons enable metrics-server
minikube start --driver=docker --force 

```
