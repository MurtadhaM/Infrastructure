## Install QEMU and other packages.
### Installation Preparation

function download_repo(){
## Clone this repository on your QEMU system. Files from this repository are used in the following steps.
echo "Clone this repository on your QEMU system. Files from this repository are used in the following steps."
cd ~
git clone --depth 1 --recursive https://github.com/kholia/OSX-KVM.git
cd OSX-KVM
#Repository updates can be pulled via the following command:
echo "Repository updates can be pulled via the following command:"
git pull --rebase
}

function linux_install_kvm(){
## Install KVM and other packages.
echo "Install KVM and other packages."
sudo apt-get install qemu uml-utilities virt-manager git wget libguestfs-tools p7zip-full make dmg2img tesseract-ocr  tesseract-ocr-eng genisoimage libvirt  cpu-checker -y
echo "Add user to the `kvm` and `libvirt` groups (might be needed)."
sudo usermod -aG kvm $(whoami)
sudo usermod -aG libvirt $(whoami)
sudo usermod -aG input $(whoami)
## Check if KVM module is loaded.
}

function virtualization_enable(){
echo "KVM may need the following tweak on the host machine to work."
sudo modprobe kvm; echo 1 | sudo tee /sys/module/kvm/parameters/ignore_msrs
#To make this change permanent, you may use the following command.
echo "To make this change permanent, you may use the following command."
sudo cp kvm.conf /etc/modprobe.d/kvm.conf  # for intel boxes only
sudo cp kvm_amd.conf /etc/modprobe.d/kvm.conf  # for amd boxes only
## Add user to the `kvm` and `libvirt` groups (might be needed).
echo "Check if KVM module is loaded."
kvm-ok
## Check if KVM acceleration can be used.
echo "Check if KVM acceleration can be used."
sudo kvm-ok
## Check if nested virtualization is supported.
echo "Check if nested virtualization is supported."
cat /sys/module/kvm_intel/parameters/nested
## Enable nested virtualization.
echo "Enable nested virtualization."
sudo modprobe -r kvm_intel
sudo modprobe kvm_intel nested=1
cat /sys/module/kvm_intel/parameters/nested
## Enable nested virtualization on boot.
echo "Enable nested virtualization on boot."
sudo cp kvm_intel.conf /etc/modprobe.d/kvm_intel.conf
## Check if KVM acceleration can be used.
echo "Check if KVM acceleration can be used."
sudo kvm-ok
}

function download_macos(){
## Download macOS installer.
echo "Fetch macOS installer."
./fetch-macOS-v2.py
}



function create_installation_media(){
## Create an installation media.
echo "Create an installation media."
./dmg2img.sh BaseSystem.dmg
qemu-img create -f qcow2 -o preallocation=metadata MyDisk2.qcow2 128G
qemu-img resize MyDisk2.qcow2 +64G
sudo virt-resize --expand /dev/sda2 BaseSystem.dmg MyDisk2.qcow2
qemu-img convert -O qcow2 MyDisk2.qcow2 MyDisk.qcow2
rm -f MyDisk2.qcow2
}

function start_installation(){
## Start the macOS installation process.
echo "Start the macOS installation process."
./basic.sh
}

function start_macos(){
## Start macOS.
echo "Start macOS."
./start.sh
}


function detect_os(){
    os_name=$OSTYPE
    case "$os_name" in
        darwin*)  echo "Mac OS X" ;; 
        linux*)   echo "Linux" ;;
        bsd*)     echo "BSD" ;;
        msys*)    echo "Windows" ;;
        *)        echo "unknown: $OSTYPE" ;;
    esac
}


function linux_install_kvm(){
## Install KVM and other packages.
echo "Install KVM and other packages."
sudo apt-get install qemu uml-utilities virt-manager git wget libguestfs-tools p7zip-full make dmg2img tesseract-ocr  tesseract-ocr-eng genisoimage libvirt  cpu-checker -y
echo "Add user to the `kvm` and `libvirt` groups (might be needed)."
sudo usermod -aG kvm $(whoami)
sudo usermod -aG libvirt $(whoami)
sudo usermod -aG input $(whoami)
## Check if KVM module is loaded.
}

function macos_install_kvm(){
## Install KVM and other packages.
echo "Install KVM and other packages."
brew install qemu  virt-manager git wget   make dmg2img tesseract-ocr  tesseract-ocr-eng genisoimage libvirt  cpu-checker
}

function windows_install_kvm(){
## Enable Hyper-V
echo "Enable Hyper-V"
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
# WSL2
echo "WSL2"
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform -All
# WSL2
echo "WSL2"
wsl --set-default-version 2
# Install Ubuntu 20.04 LTS
echo "Install Ubuntu 20.04 LTS"
wsl --install -d Ubuntu-20.04
# Install KVM
echo "Install KVM"
wsl -u root apt-get install qemu uml-utilities virt-manager git wget libguestfs-tools p7zip-full make dmg2img tesseract-ocr  tesseract-ocr-eng genisoimage libvirt  cpu-checker -y
# Add user to the `kvm` and `libvirt` groups (might be needed).
echo "Add user to the `kvm` and `libvirt` groups (might be needed)."
sudo usermod -aG kvm $(whoami)
sudo usermod -aG libvirt $(whoami)
sudo usermod -aG input $(whoami)
## Check if KVM module is loaded.
}






function main(){
    detect_os
    download_repo
    install_kvm
    virtualization_enable
    download_macos
    create_installation_media
    start_installation
    start_macos
}


