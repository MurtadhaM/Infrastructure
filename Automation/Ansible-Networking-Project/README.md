# NETWORKING Automation with Ansible

## Introduction
- [Ansible](https://www.ansible.com/) is an open-source automation tool, or platform, used for IT tasks such as configuration management, application deployment, intraservice orchestration, and provisioning.

## Agentless Architecture
- Ansible is agentless, which means it doesn't require any agent installation on the client machine. It uses SSH for connecting to the client machine. For Windows, it uses WinRM protocol.



---

| Ansible | Puppet | Chef | SaltStack |
|---------|--------|------|-----------|
| Ansible is agentless | Puppet has an agent | Chef has an agent | SaltStack has an agent |


<img src=https://img.shields.io/badge/ansible-2.9.6-red width=100 >


#### Directory Structure

```bash
⚡ tree
├── group_vars
│   └── all.yml
├── host_vars
│   ├── routers.yml
│   └── switches.yml
├── library
│   ├── filter_plugins
│   └── module_utils
├── production
├── roles
│   ├── common
│   │   └── tasks
│   │       └── main.yml
│   ├── routers
│   │   └── tasks
│   │       └── main.yml
│   └── switches
│       └── tasks
│           └── main.yml
├── routers.yml
├── site.yml
└── switches.yml
```

#### Inventory
```bash

[switches]
172.16.0.4
```

#### Playbook
```yaml
---
- name: Gather IOS Facts
  hosts: switches
  connection: local
  tasks:
    - name: Show ip int brief
      ios_command:
        commands:
          - show ip int brief
        provider:
          host: 172.16.0.4
          port: 22
          authorize: yes
          auth_pass: cisco
          username: cisco
          password: cisco
      register: if_data

    - name: Interfaces output
      debug:
        var: if_data['stdout_lines'][0]
```

#### Run the playbook

```bash
ansible-playbook  -i inventory playbook.yml
```

#### Output
```bash

TASK [Show ip int brief] **************************************************************************************************************************************************
[WARNING]: ['connection local support for this module is deprecated and will be removed in version 2.14, use connection ansible.netcommon.network_cli']
[DEPRECATION WARNING]: Param 'provider' is deprecated. See the module docs for more information. This feature will be removed from ********.ios in a release after
2022-06-01. Deprecation warnings can be disabled by setting deprecation_warnings=False in ansible.cfg.
ok: [172.16.0.4]

TASK [Interfaces output] **************************************************************************************************************************************************
ok: [172.16.0.4] => {
    "if_data['stdout_lines'][0]": [
        "Interface              IP-Address      OK? Method Status                Protocol",
        "Vlan1                  10.0.0.4        YES DHCP   up                    up      ",
        "Vlan50                 10.1.1.2        YES DHCP   up                    up      ",
        "Vlan100                172.16.0.4      YES NVRAM  up                    up      ",
        "Vlan300                172.16.3.4      YES DHCP   up                    up      ",
        "Vlan500                172.16.50.2     YES DHCP   up                    up      ",
        "Vlan600                172.16.6.4      YES DHCP   up                    up      ",
        "FastEthernet0          unassigned      YES NVRAM  down                  down    ",
        "GigabitEthernet1/0/1   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/2   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/3   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/4   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/5   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/6   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/7   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/8   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/9   unassigned      YES unset  up                    up      ",
        "GigabitEthernet1/0/10  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/11  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/12  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/13  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/14  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/15  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/16  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/17  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/18  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/19  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/20  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/21  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/22  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/23  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/24  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/25  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/26  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/27  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/28  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/29  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/30  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/31  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/32  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/33  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/34  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/35  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/36  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/37  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/38  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/39  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/40  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/41  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/42  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/43  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/44  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/45  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/46  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/0/47  unassigned      YES unset  up                    up      ",
        "GigabitEthernet1/0/48  unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/1/1   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/1/2   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/1/3   unassigned      YES unset  down                  down    ",
        "GigabitEthernet1/1/4   unassigned      YES unset  down                  down    ",
        "Te1/1/1                unassigned      YES unset  down                  down    ",
        "Te1/1/2                unassigned      YES unset  down                  down    ",
        "Port-channel12         unassigned      YES unset  down                  down    ",
        "Port-channel23         unassigned      YES unset  down                  down"
    ]
}

PLAY RECAP ****************************************************************************************************************************************************************
172.16.0.4                 : ok=3    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

```

