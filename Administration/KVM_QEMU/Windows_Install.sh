#!/bin/bash

# Download & Install Windows on KVM/QEMU
cd  ~

# ISO & QCOW2 file Download Windows 10
curl   https://software-download.microsoft.com/download/pr/19041.264.200511-0456.vb_release_svc_refresh_CLIENTENTERPRISEEVAL_OEMRET_x64FRE_en-us.iso -o win10.iso
# Create a QCOW2 file
qemu-img create -f qcow2 win10.qcow2 50G
# Install Windows 10
# Connect to VNC

vncviewer localhost:5900
# Install Windows 10
# After installation, install the virtio driver
qemu-system-x86_64 -machine q35 -smp 16,cores=16,sockets=1 -device qemu-xhci -device usb-kbd -device usb-tablet -boot d -drive file=./windows.iso,media=cdrom -drive if=virtio,index=0,file=./windows_hdd.img.qcow2,format=qcow2 -netdev user,id=net0 -device e1000e,netdev=net0,id=net0,mac=52:54:00:c9:18:27 -monitor stdio -vga vmware