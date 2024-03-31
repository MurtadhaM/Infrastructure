# Ansible
<img 
center src="https://cdn.educba.com/academy/wp-content/uploads/2019/10/ansible-architecture.png" width="100%"/> 

----

## Table of Contents
----
- [Ansible](#ansible)
  - [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Environment](#environment)
    - [Directory Structure](#directory-structure)
  - [Storing Credentials](#storing-credentials)
- [Configuration](#configuration)
    - [Sample Playbook](#sample-playbook)
    - [Sample Inventory](#sample-inventory)
    - [Sample Vault](#sample-vault)
      - [License](#license)
      - [Author](#author)


# Overview

Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code. It runs on many Unix-like systems, and can configure both Unix-like systems as well as Microsoft Windows.

<h2 align="center"> Ansible VS Terraform</h2>

| Ansible | Terraform |
| --- | --- |
| Ansible is a configuration management tool. | Terraform is an infrastructure as code tool. |
| Ansible is agentless. | Terraform is agent-based. |
| Ansible is written in Python. | Terraform is written in Go. |
| Ansible is a push-based tool. | Terraform is a pull-based tool. |
| Ansible is a declarative tool. | Terraform is an imperative tool. |

# Environment
### Directory Structure
```
├── dbservers.yml
├── filter_plugins
├── group_vars
│   ├── group1.yml
│   └── group2.yml
├── host_vars
│   ├── hostname1.yml
│   └── hostname2.yml
├── hosts
├── library
├── module_utils
├── production
├── roles
│   └── common
│       ├── defaults
│       │   └── main.yml
│       ├── handlers
│       │   └── main.yml
│       ├── tasks
│       │   └── main.yml
│       └── vars
│           └── main.yml
├── site.yml
├── staging
└── webservers.yml
```
Source: <a href="https://docs.ansible.com/ansible/2.8/user_guide/playbooks_best_practices.html#directory-layout"> Here </a>

---
## Storing Credentials
---
Ansible supports storing credentials in a variety of ways. The most common way is to store them in a file called `vault.yml` and then encrypt it using `ansible-vault`. This file can then be used to store credentials for various services.


# Configuration 
### Sample Playbook
```yaml
---
# Utilizing Jinja2 templating
- hosts: all
  vars:
    http_port: 80
    max_clients: 200
  remote_user: root
  tasks:
    - name: ensure apache is at the latest version
      yum: name=httpd state=latest
    - name: write the apache config file
      template: src=/srv/httpd.j2 dest=/etc/httpd.conf
      notify:
        - restart apache
    - name: ensure apache is running (and enable it at boot)
      service: name=httpd state=started enabled=yes
  handlers:
    - name: restart apache
      service: name=httpd state=restarted
```

### Sample Inventory
```yaml
# File: hosts
# List of hosts
[webservers]
10.0.100.120
10.0.100.121

[webservers:vars]
ansible_ssh_user={{ ansible_user }}
ansible_ssh_pass={{ ansible_password }}

[dbservers]
10.0.100.150
10.0.100.151

[dbservers:vars]
ansible_ssh_user={{ ansible_user }}
ansible_ssh_pass={{ ansible_password }}
```

### Sample Vault
```yaml
# File: vault.yml
# List of credentials
ansible_user: root
ansible_password: password
# To encrypt the file, run the following command
ansible-vault encrypt vault.yml

# To decrypt the file, run the following command
ansible-vault decrypt vault.yml

# To edit the file, run the following command
ansible-vault edit vault.yml

# To run a playbook with vault, run the following command
ansible-playbook playbook.yml --ask-vault-pass
```




#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com 
    )