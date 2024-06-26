
// SETUP //

ip address add 172.16.250.0/24 dev pnet9
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -A POSTROUTING -o pnet0 -s 172.16.250.0/24 -j MASQUERADE

apt-get install isc-dhcp-server

nano /etc/default/isc-dhcp-server

INTERFACES="pnet9"

nano /etc/dhcp/dhcpd.conf

# EVE-NG NAT Interface
subnet 172.16.250.0 netmask 255.255.255.0 {
        range 172.16.250.10 172.16.250.240;
        interface pnet9;
        default-lease-time 600;
        max-lease-time 7200;
        option domain-name "evengnet.local";
        option domain-name-servers 1.1.1.1;
        option broadcast-address 172.16.250.255;
        option subnet-mask 255.255.255.0;
        option routers 172.16.250.1;
}

systemctl start isc-dhcp-server
systemctl enable isc-dhcp-server



// make iptables change persistent //

sudo apt-get install iptables-persistent
sudo netfilter-persistent save
sudo netfilter-persistent reload

#reboot, verify iptables with this command: 

iptables -t nat -L

// make ip forwarding persistent //
nano /etc/sysctl.conf
# Uncomment the next line to enable packet forwarding for IPv4
net.ipv4.ip_forward=1

#issue the following command

sudo sysctl -p /etc/sysctl.conf

#reboot the system, verify with the following command, should show 1 in output

cat /proc/sys/net/ipv4/ip_forward


# You may need to delay the start of the DHCP service, to wait until eve-ng can create the interface it uses.
# create a file called /etc/systemd/system/isc-dhcp-server.timer

Add the following text to the file:
[Timer]
OnBootSec=2min



// MAINTENANCE //
service isc-dhcp-server status





// AFTER REBOOT //
ip address add 172.16.250.1/24 dev pnet9
echo 1 > /proc/sys/net/ipv4/ip_forward
iptables -t nat -A POSTROUTING -o pnet0 -s 172.16.250.1/24 -j MASQUERADE
service isc-dhcp-server start
service isc-dhcp-server status