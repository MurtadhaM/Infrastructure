# Get IP Information
ifconfig
ip a
ip addr show
hostname -I
nmcli -g ip4.address connection show eth1
nmcli -g ip4.address,ipv4.dns connection show eth1
nmcli -f ipv4.dns,ipv4.addresses,ipv4.gateway con show eth1


# Create a Wi-Fi connection profile with static IP configuration
nmcli con add con-name NSAVan-1 ifname wlan0 type wifi ssid NSAVan-1
ip4 192.168.0.8/24 gw4 192.168.0.1

# Set DNS servers For example, to set 192.0.2.1 as the DNS server
# NOTE: "nmcli con modify" sets the value for single-value properties. Multi-value properties it appends and prevents removing values
nmcli conn modify "NSAVan-1" ipv4.ignore-auto-dns yes
nmcli conn modify con-name NSAVan-1 ipv4.dns "1.1.1.2 1.0.0.2"

# Set a DNS search domain
nmcli con modify con-name NSAVan-1 ipv4.dns-search "osbornepro.com"

# View connection profile you created
nmcli conn show "NSAVan-1"

# Check a specific property, for example mtu:
nmcli connection show id NSAVan-1 | grep mtu
#  802-11-wireless.mtu:                     auto
# To change the property of a setting
nmcli connection modify id NSAVan-1 wireless.mtu 1350
# Verify the change
nmcli connection show id MyCafe | grep mtu
#  802-11-wireless.mtu:                     1350

# Apply nmcli Changes
systemctl restart NetworkManager

# FIREWALL HOLES
firewalk -s20-100 -i eth0 -n -pTCP 192.168.0.254 192.168.0.10
# This command scans ports 20 to 100 over interface eth0 on pings traveling from .254 to .10
# -d (destination port to use)
# -i (device interface)
# -n (do not resolve IP to hostname)
# -p TCP | UDP (protocol)
# -r (strict RFC adherence)
# -s (source port)
# -T 1 - 1000 (packet read timeout)
# -t 1 -25 (IP Time to Live)
# -v (program verison)
# -x 1 - 8 (expire vector)

# Release DHCP Address
sudo dhclient
ifconfig interface [inet6] dhcp release
ifconfig interface [inet6] dhcp drop
ip addr flush dev eth0

# Renew DHCP Address
sudo dhclient -r -v
sudo /etc/init.d/networking restart

# Clear DNS Cache
# Determine if you are using systemd-resolved or dnsmasq
sudo lsof -i :53 -S
# Flush the cache
sudo systemd-resolve --flush-caches
sudo resolvectl flush-caches
sudo systemd-resolve --statistics
sudo killall -HUP dnsmasq

# Send Continuous Ping
ping 10.0.0.1

# Send Ping
ping 10.0.0.1 -c 4

# Test Open Port on Remote Device
nc -z -v 10.0.0.1 80
nc -z -v -u 10.0.0.1 123
for PORT in {20..80}; do
  timeout 1 bash -c "/dev/tcp/10.10.8.8/$PORT &>/dev/null" &&  echo "port $PORT is open"
done

# List Open Ports and Connections
ss -lntu
netstat -o
netstat -antp
netstat -lntu
nmcli con show
cat /etc/services
sudo lsof -i -P -n | grep LISTEN

# Run a Routing Trace
traceroute 10.0.0.1
ip route get 10.0.0.20

# Get Network Adapter Info
nestat -i
ifconfig -a
ip addr
ip link show
nmcli dev status
nmcli con show eth2
nmcli connection show

# Use DHCP to obtain IP
dhclient eth0 -v
ifconfig interface [inet6] dhcp ping # Ping DHCP Server
ifconfig interface [inet6] dhcp status # Check DHCP Server Status
ifconfig interface inet dhcp start
nmcli con add con-name eth2 type ethernet ifname eth2 ipv4.method auto; nmcli con reload

# Set IP Address
ip addr add 10.0.0.1/24 dev eth0
ip addr add 2001:0001:0001:1443::0411/122 dev eno55
nmcli con add con-name eth2 type ethernet ifname eth2 ipv4.method manual ipv4.address 10.0.0.2/24 ipv4.gateway 10.0.0.1
nmcli con mod eth2 ipv4.method manual ipv4.address 10.0.0.2/24 ipv4.gateway 10.10.10.1

# Set DNS Servers
nmcli con mod eth1 ipv4.dns 1.1.1.1
nmcli con mod eth1 +ipv4.dns 1.0.0.1 && egrep DNS /etc/sysconfig/network-scripts/ifcfg-eth1

# Add Route
ip route add default via 10.0.0.1 dev eth0
ip route add default via 10.0.0.1 dev eth0 proto static metric 101
ip route replace 10.0.0.0/24 via 10.0.0.1 dev eth0
nmcli connection modify eth0 +ipv4.routes "10.0.0.0/24 10.10.10.1"

# Delete Route
sudo ip route delete default via 10.0.0.1
sudo ip route delete default dev eth0
sudo ip route del 10.0.0.0/24 via 10.0.0.1 dev ens3
sudo route del -net 0.0.0.0 gw 10.0.0.1 netmask 0.0.0.0 dev eth0

# View Routing Table
ip route
ip route list
route -n
print route
netstat -rn

# Restart Network Adapter
ip link set eth1 down; ip link set eth1 up
ifdown -a;  ifup -a
nmcli con reload
    