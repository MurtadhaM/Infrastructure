# PNET or EVE-NG LAB SETUP

## PRE-REQUISITES
- [x] Hypervisor (VMware Workstation, VMware Fusion, VMware ESXi, VirtualBox, KVM)
- [x] PNET or EVE-NG VM Image
- [x] PNET or EVE-NG Client


## Download Base VM Image
Download the base VM image from the following link:

https://pnetlab.com/pages/download

# Script to automate the installation of PNET or EVE-NG
```
URL=files_downloader.sh

sh -c $(curl -fsSL $URL)

```

# PNET or EVE-NG Client (Better than using the web browser)

https://www.eve-ng.net/index.php/download/#DL-COMM


# Files and Folders

/opt/unetlab/addons/qemu/ - QEMU VMs

/opt/unetlab/addons/dynamips/ - Dynamips VMs

/opt/unetlab/addons/iol/ - IOL VMs


# IOL IMAGES 
IOL images are Cisco IOS on Linux images. They run on an emulated x86 Linux system and are used to emulate Cisco IOS routers. They are not as fast as hardware routers but work well for most tasks, and run on inexpensive hardware. They are also useful for experimenting with Cisco IOS and test configurations before deploying in production.

## Dynamips Images

Dynamips is a Cisco router emulator written by Christophe Fillot. It emulates Cisco routers on a Linux or Windows system. It allows you to run a Cisco IOS in a virtual environment on your computer. It is a command line program that accepts a command line argument for the location of the IOS image, and starts a telnet server on port 7200. You can then telnet to the router and configure it as if it were a real router.

## QEMU Images

QEMU is a generic and open source machine emulator and virtualizer. When used as a machine emulator, QEMU can run OSes and programs made for one machine (e.g. an ARM board) on a different machine (e.g. your own PC). By using dynamic translation, it achieves very good performance.


