# Download Images & Appliance


## IShare Tool 

---

<a  href='https://github.com/ishare2-org/ishare2-cli'><img src='https://img.shields.io/badge/ISHARE2-CLI-blue?style=for-the-badge&logo=appveyor'></a>



- [x] Download the tool 

```bash
wget -O /usr/sbin/ishare2 https://raw.githubusercontent.com/ishare2-org/ishare2-cli/main/ishare2 && chmod +x /usr/sbin/ishare2 && ishare2
```


### Labs

https://user.pnetlab.com/store/labs/view


- [x] DIRECT LINK

https://drive.labhub.eu.org/0:/OVA/
## Appliance
<a href="https://dtechsmag.com/gns3-images-how-to-get-install/">
     <p align=center> Link Appliance </p>
     </a>




## GNS3
---

```sh
yum update
yum install  qemu-img python3-pip python3  libvirt gns3server 
pip install gns3-server
# RUN GNS3 Web Server
gns3server  
```
# LIBVIRT FOR NAT
systemctl start libvirtd
systemctl enable libvirtd
systemctl start virtlogd
systemctl enable virtlogd
virsh net-start default
virsh net-autostart default


http://localhost:3080


# INSTALL CHROME WEB BROWSER GATEWAY

sudo docker run --rm -it --shm-size=512m -p 6901:6901 -e VNC_PW=password kasmweb/chrome:1.13.0


    User : kasm_user
    Password: password


# IMAGES:

https://drive.google.com/drive/folders/1VHeLULwh5c0kcJ1Y_fgdQG14Y_IDcVYe?usp=sharing



https://support.fortinet.com/Download/FirmwareImages.aspx

https://sourceforge.net/projects/gns-3/files/Empty%20Qemu%20disk/empty30G.qcow2/download


https://archive.org/download/c2691-adventerprisek9-mz.124-15.T14/c7200-adventerprisek9-mz.124-24.T5.bin

https://archive.org/download/c2691-adventerprisek9-mz.124-15.T14/c7200-a3jk9s-mz.124-25g.bin

https://drive.google.com/file/d/1oErqwcEwiqaU6dzh_hRizayjzpGGvDF_/view


https://archive.org/download/c2600-advsecurityk9-mz.124-15.t14/c2600-advsecurityk9-mz.124-15.t14.bin


https://archive.org/download/c2691-adventerprisek9-mz.124-15.T14/c3620-a3jk8s-mz.122-26c.bin



https://www.telectronika.com/descargas/cisco-imagenes-ios-para-gns3-dynamips-y-vm/


