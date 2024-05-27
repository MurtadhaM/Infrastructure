# KUBERNETES TUTORIAL
## Table of Contents
- [KUBERNETES TUTORIAL](#kubernetes-tutorial)
  - [Table of Contents](#table-of-contents)
    - [Types of Kubernetes Cluster deployment](#types-of-kubernetes-cluster-deployment)
    - [Install Minikube Linux Script](#install-minikube-linux-script)
    - [Azure Deployment](#azure-deployment)
### Types of Kubernetes Cluster deployment

| Name | Type | Use Case |  Platform
| --- | --- | --- | --- |
| Minikube | Multi Node | Dev | Minikube is a  Kubernetes distribution that runs on a single node. It is optimized for development and testing.
| K3s | Single Node | Prod/Dev | K3s is a lightweight Kubernetes distribution that runs on a single node. It is optimized for production and development.
| AKS, EKS, GKE | Multi Node | Prod/Dev | Cloud providers offer managed Kubernetes services that run on multiple nodes. They are optimized for production and development.





### Install Minikube Linux Script
| Function | Description |
| --- | --- | 
| install-minikube | Downloads the minikube binary and installs it in /usr/local/bin/ |
| start-minikube | Starts the minikube cluster using the docker driver |
| install-minikube-dependencies | Installs the dependencies required for minikube to run |
| stop-minikube | Stops the minikube cluster and the docker service |


```bash
#!/bin/bash
# Author: Murtadha Marzouq 
# script to install minikube on linux machine including dependencies
install-minikube(){
  curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
  && chmod +x minikube
  sudo install minikube /usr/local/bin/
}
start-minikube(){
  # start docker service
  sudo service docker start
  # start minikube
  minikube start --driver=docker --force
}
install-minikube-dependencies(){
  sudo apt-get update
  sudo apt install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst virt-manager docker.io conntrack 
}
stop-minikube(){
  minikube stop
  sudo service docker stop
}

# main function that takes the action as an argument
main(){
  case $1 in
    install)
      install-minikube
      install-minikube-dependencies
      ;;
    start)
      start-minikube
      ;;
    stop)
      stop-minikube
      ;;
    *)
      echo "Usage: $0 {install|start|stop}"
      exit 1
      ;;
  esac
}

```
### Azure Deployment
```bash
export RESOURCE_GROUP_NAME=aks-rg
export CLUSTER_NAME=aks-cluster
export LOCATION=eastus
export NODE_SIZE=Standard_B2s 
export NODE_COUNT=1
export KUBERNETES_VERSION=1.21.2
export DNS_PREFIX=aks-cluster
export ADDONS=monitoring
export TIER=free

# Create a resource group
az group create --name $RESOURCE_GROUP_NAME --location $LOCATION

az aks create \
  --resource-group  $RESOURCE_GROUP_NAME \
  --name $CLUSTER_NAME \
  --node-count $NODE_COUNT \
  --node-vm-size $NODE_SIZE \
  --enable-addons $ADDONS  \
  --generate-ssh-keys \
  --tier $TIER \
  --dns-name-prefix $DNS_PREFIX

# Get the credentials for the cluster
az aks get-credentials --resource-group $RESOURCE_GROUP_NAME --name $CLUSTER_NAME


# Verify the connection to the cluster
kubectl get nodes

# Delete the cluster
az group delete --resource-group $RESOURCE_GROUP_NAME --yes --no-wait

az group delete -g $RESOURCE_GROUP_NAME -y --no-wait


```

