## QEUM/KVM 

#### Getting Started
```
sudo apt-get install qemu-kvm libvirt-bin bridge-utils virt-manager
sudo adduser `id -un` libvirtd
sudo adduser `id -un` kvm
```

#### Create a VM
```
qemu-img create -f qcow2 mac_hdd.img 64G
```

### OSX-KVM
```
cd ~
git clone --depth 1 --recursive https://github.com/kholia/OSX-KVM.git
cd OSX-KVM