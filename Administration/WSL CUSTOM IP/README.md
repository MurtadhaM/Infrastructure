# WSL2 Custom IP Setup

---

## <a align=center href="https://github.com/sirredbeard/Awesome-WSL">Interesting Links</a>

---

**Dependencies**
- [x] Powershell Core 7
- [x] WSL2 

### Powershell Core 7 Installation
```bash
winget install --id Microsoft.Powershell --source winget
winget install --id Microsoft.Powershell.Preview --source winget
```


- [x] Wsl-IpHandler Installation

```bash
Invoke-WebRequest https://raw.githubusercontent.com/wikiped/Wsl-IpHandler/master/Install-WslIpHandlerFromGithub.ps1 | Select -ExpandProperty Content | Invoke-Expression
```
- [x] Wsl-IpHandler Usage

```bash 
$gatewayIpAddress = "172.16.55.1"
$wslInstanceIpAddress = "172.16.55.101"
# Install Wsl-IpHandler
Install-WslIpHandler -WslInstanceName Ubuntu -GatewayIpAddress $gatewayIpAddress  -WslInstanceIpAddress $wslInstanceIpAddress -UseScheduledTaskOnUserLogOn -DontModifyPsProfile

```


- [x] Configure WSL
```bash
# GET INTERFACE DHCP IP 
dhclient eth0
echo "nameserver 1.1.1.1 8.8.8.8 >> /etc/resolv.conf
apt update  && apt install net-tools zsh git nano -y
```

