## QEUM/KVM 
---
#### Description
This script will install KVM/QEMU and all the required packages to run a macOS VM. It will also install the required packages to run a Windows VM.

---
#### Use Cases
- [macOS VM](https://github.com/kholia/OSX-KVM.git)
- [Windows VM](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/virtio-win-0.1.229-1/virtio-win.iso)"
- [Linux VM](https://google.com)
- [Android VM](https://google.com)
- [Embedded VM](https://google.com)
---

#### Usefull Tools
- [quickemu]("https://github.com/quickemu-project/quickemu/wiki/03-Create-macOS-virtual-machines")
- [virt-manager](https://virt-manager.org/)

## QUICKEMU
```bash
# Install quickemu
# DEBIAN/UBUNTU
 sudo apt-get install bash coreutils curl genisoimage grep jq mesa-utils ovmf pciutils procps python3 qemu sed socat spice-client-gtk swtpm-tools unzip usbutils util-linux xdg-user-dirs xrandr zsync 


 # FEDORA
 sudo dnf install bash coreutils curl edk2-tools genisoimage grep jq mesa-demos pciutils procps python3 qemu sed socat spice-gtk-tools swtpm unzip usbutils util-linux xdg-user-dirs xrandr zsync
# MACOS
brew install bash cdrtools coreutils jq python3 qemu usbutils samba socat swtpm zsync

# BUILD
git clone https://github.com/quickemu-project/quickemu
cd quickemu

```

- [Source]("https://github.com/quickemu-project/quickemu/wiki/01-Installation")
  

```bash
# Download the script and run it
curl -L -O "https://raw.githubusercontent.com/MurtadhaM/Infrastructure/main/Administration/KVM_QEMU/Install_KVM_MAC.sh"
# Make the script executable
chmod +x Install_KVM_MAC.sh
# Run the script
./Install_KVM_MAC.sh
```

#### References
- [KVM/QEMU](https://www.linux-kvm.org/page/Main_Page)
- [KVM/QEMU - ArchWiki](https://wiki.archlinux.org/index.php/QEMU)
- [KVM/QEMU - Gentoo Wiki](https://wiki.gentoo.org/wiki/QEMU)


#### GLOSSARY

| Component | Description |
| :--- | :--- |
| [KVM/QEMU](https://www.linux-kvm.org/page/Main_Page) | Kernel-based Virtual Machine (KVM) is a virtualization module in the Linux kernel that allows the kernel to function as a hypervisor. It was merged into the Linux kernel mainline in kernel version 2.6.20, which was released on February 5, 2007. KVM requires a processor with hardware virtualization extensions, such as Intel VT or AMD-V. |
| [libvirt](https://libvirt.org/) | libvirt is an open-source API, daemon and management tool for managing platform virtualization. It can be used to manage KVM, Xen, VMware ESXi, QEMU and other virtualization technologies. These APIs are widely used in the orchestration layer of hypervisors in the development of a cloud computing platform. |
| [virt-manager](https://virt-manager.org/) | Virtual Machine Manager (virt-manager) is a desktop user interface for managing virtual machines through libvirt. It primarily targets KVM VMs, but also manages Xen and LXC (linux containers). It presents a summary view of running domains, their live performance & resource utilization statistics. |
| [virt-viewer](https://virt-manager.org/) | Virtual Machine Viewer (virt-viewer) is a lightweight UI interface for interacting with the graphical display of virtualized guest OS. It uses the GTK-VNC widget to provide the display, and libvirt for looking up VNC server details. |