# <p align=center><img src="https://www.ansible.com/hubfs/2016_Images/Assets/Ansible-Mark-Large-RGB-Pool.png?hsLang=en-us&w=400" width=10%>Ansible Network Automation</p>

---
### Description:
This project is a simple example of how to use Ansible to automate network tasks. The project is designed to configure VLANs on Cisco switches and backup the running configuration of the switches.

## Project Structure:
```bash
├── ansible.cfg
├── backups
│   └── SW01.findasnake.com-running-config.txt
├── configs
├── group_vars
│   └── all.yml
├── handlers
│   └── debug.yml
├── inventories
│   └── hosts
├── playbooks
│   ├── backup.yml
│   └── vlan.yml
├── README.md
├── roles
│   ├── backup
│   │   ├── commit-changes.yml
│   │   └── tasks
│   │       ├── backup_running_config.yml
│   │       └── main.yml
│   └── configuration
│       ├── main.yml
│       ├── print_vlans.yml
│       ├── vlans-jinja.yml
│       └── vlans.yml
├── templates
│   └── vlans.j2
├── tmp
└── vars
    └── all.yml
```
---
### Commands:
- To backup the running configuration of the switches:
```bash
ansible-playbook  playbooks/vlan.yml -i inventories/hosts
```
---

# Author:
[Murtadha Marzouq](https://www.linkedin.com/in/murtadha-marzouq-61a2a3245/)

<img src="https://media.licdn.com/dms/image/C4D03AQFclh5n4aJ-OQ/profile-displayphoto-shrink_400_400/0/1657672649108?e=1717027200&v=beta&t=YgaM-HpBXB5XX8a1M2b40RyeZGlItOd5AGqmLwEpENQ" width="100" height="100">