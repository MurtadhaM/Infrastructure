# Network Packet Capture

# Read a pcap file
tcpdump -r packetcapture.pcap
# -r : Reads a pcap type file
# -n : No DNS lookup
# -X : Print hex packet data and ASCII format
# -A : Print each packet minus its link level header in ASCII


# Filter by source host
tcpdump -n src host 10.0.0.1 -r file.pcap

# Filter by destination
tcpdump -n dst host 10.0.0.1 -r file.pcap

# Filter by port
tcpdump -n port 80 -r file.pcap

# Filter by bits set for ACK and PSH
tcpdump -A -n 'tcp[13] = 24' -r file.pcap

# Print hex data
tcpdump -nX -r file.pcap

# Actively Capture DHCP requests on ethernet interface eth0
ifup eth0 &amp; echo " " &amp; tcpdump -n -s0 port 67 and 68

# Capture packets that contain a password
tcpdump -s 0 -A -n -l | egrep -i "POST /|pwd=|passwd=|password=|Host:I"

# Capture HTTP Request Info
sudo tcpdump -nn -A -s1500 -l | egrep -i 'User-Agent:|Host:'

# Capture POST Requests
sudo tcpdump -s 0 -A -vv 'tcp[((tcp[12:1] &amp; 0xf0) &gt;&gt; 2):4] = 0x504f5354'

# Capture Visited URLs:
sudo tcpdump -s 0 -v -n -l | egrep -i "POST /|GET /|Host:"

# Capture Cookies:
sudo tcpdump -nn -A -s0 -l | egrep -i 'Set-Cookie|Host:|Cookie:'

# Capture Emails:
sudo tcpdump -nn -l port 25 | grep -i 'MAIL FROM\|RCPT TO'

# Capture SNMP:
sudo tcpdump -n -s0  port 161 and udp

# Capture FTP Creds:
sudo tcpdump -nn -v port ftp or ftp-data

# Capture DNS:
sudo tcpdump -i wlp58s0 -s0 port 53
debugger eval code:1:62
# Common GUI Filters
# Filter by tcp port 21
tcp.port==21

# Filter for IP address 10.0.0.1
ip.addr=10.0.0.1

# Filter for RADIUS traffic
radius

#========================
# SSL Filters
#========================
# Client Hello
ssl.handshake.type == 1

# Client Hello Packets
ssl.handshake.extensions_server_name

# Server Hello
ssl.handshake.type == 2

# NewSessionTicket
ssl.handshake.type == 4

# Certificate
ssl.handshake.type == 11

# CertificateRequest
ssl.handshake.type == 13

# ServerHelloDone
ssl.handshake.type == 14
# Note: "ServerHellpDone" means full-handshake TLS session

# Cipher Suites
ssl.handshake.ciphersuite

#==============================
# Decrypt SSL Traffic
#==============================
# WINDOWS
$env:SSLKEYLOGFILE = "$env:USERPROFILE\Documents\ssl-keys.log"
# Then visit HTTPS sites
# LINUX
export SSLKEYLOGFILE=~/.ssl-key.log
# Then visit HTTPS sites

# Open Wireshark and click Edit &gt; Preferences
# Expand Protocols in the left-hand pane and scroll down, then click SSL

# Under '(Pre)-Master-Secret' log filename select "$env:USERPROFILE\Documents\ssl-keys.log" and click OK
# Run a packet capture and use the below Wireshark filter and view your packets
ssl
debugger eval code:1:62
undefined
