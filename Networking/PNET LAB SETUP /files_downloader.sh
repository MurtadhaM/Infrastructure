## This script will download IOU, Dynamips, and QEMU images for the VM


BASEURL_QEMU=http://dl.nextadmin.net/dl/EVE-NG-image/qemu
BASEURL_DYNAMIPS=http://dl.nextadmin.net/dl/EVE-NG-image/dynamips
BASEURL_IOL=http://dl.nextadmin.net/dl/EVE-NG-image/iol/bin



BASEDIR_QEMU=/opt/unetlab/addons/qemu/
BASEDIR_DYNAMIPS=/opt/unetlab/addons/dynamips/
BASEDIR_IOL=/opt/unetlab/addons/iol/bin/


# Download Dynamips images
function dynamips(){
    echo "Downloading Dynamips images"
    cd $BASEDIR_DYNAMIPS
    wget -r -nc  -nd -R index.html --no-parent $BASEURL_DYNAMIPS
       /opt/unetlab/wrappers/unl_wrapper -a fixpermissions

}

# Download IOU images
function iou(){
    echo "Downloading IOU images"
    cd $BASEDIR_IOL
    wget -r -nc  -nd -R index.html --no-parent $BASEURL_IOL
    # CiscoIOUKeygen.py
    python /opt/unetlab/addons/iol/bin/CiscoIOUKeygen.py

    ## ALTERNATIVE
    $HOME/.iourc
    IOUKey=VALUE
    
    echo "[license]" > $HOME/.iourc
    echo "pnetlab = $IOUKey" >> $HOME/.iourc

    # ADDING HOSTS
    echo  '127.0.0.1 xml.cisco.com' >> /etc/hosts  

    # FIXING PERMISSIONS
       /opt/unetlab/wrappers/unl_wrapper -a fixpermissions

    # EXCECUTABLE
    chmod +x /opt/unetlab/addons/iol/bin/*

}


# Download QEMU images
function qemu(){
    echo "Downloading QEMU images"
    cd $BASEDIR_QEMU
    wget -r -nc  -nd -R index.html --no-parent $BASEURL_QEMU
       /opt/unetlab/wrappers/unl_wrapper -a fixpermissions

}

# Fix Permissions & Unwrapper
function fix_permissions(){
    echo "Fixing Permissions"
    chown -R root:root /opt/unetlab/addons/qemu/
    chown -R root:root /opt/unetlab/addons/dynamips/
    chown -R root:root /opt/unetlab/addons/iol/bin/
    chmod -R 755 /opt/unetlab/addons/qemu/
    chmod -R 755 /opt/unetlab/addons/dynamips/
    chmod -R 755 /opt/unetlab/addons/iol/bin/
   /opt/unetlab/wrappers/unl_wrapper -a fixpermissions

}


# UNWRAPPER QEMU

function QEMU_UNRAPPER(){
     echo "Unwrapping QEMU images"
    cd $BASEDIR_QEMU
    for f in *.gz; do
        mv -- "$f" "${f%.gz}"
    done
}


# MAIN FUNCTION WITH ARGUMENTS
function main(){
    case $1 in
        dynamips)
            dynamips
            ;;
        iou)
            iou
            ;;
        qemu)
            qemu
            ;;
        fix_permissions)
            fix_permissions
            ;;
        QEMU_UNRAPPER)
            QEMU_UNRAPPER
            ;;
        *)
            echo "Usage: $0 {dynamips|iou|qemu|fix_permissions|QEMU_UNRAPPER}"
            exit 1
    esac
}


main $1