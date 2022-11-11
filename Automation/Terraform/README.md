# Terraform
<img 
center src="https://www.devopsschool.com/blog/wp-content/uploads/2021/07/terraform-architecture-components-workflow-1.jpg" width="100%"/> 

----

## Table of Contents
----
- [Overview](#overview)
- [Environment](#environment)
- [Configuration](#configuration)
- [License](#license)
- [Author](#author)

# Overview

<a href="https://kodekloud.com/lessons/labs/" > RESOURCE & Labs <a/>
<h2 align="center"> Ansible VS Terraform</h2>

| Ansible | Terraform |
| --- | --- |
| Ansible is a configuration management tool. | Terraform is an infrastructure as code tool. |
| Ansible is agentless. | Terraform is agent-based. |
| Ansible is written in Python. | Terraform is written in Go. |
| Ansible is a push-based tool. | Terraform is a pull-based tool. |
| Ansible is a declarative tool. | Terraform is an imperative tool. |

# Resources
- [Terraform](https://registry.terraform.io/namespaces/hashicorp/)  
- [Terraform Docs](https://www.terraform.io/docs/index.html)
---
## Storing Credentials
---
Ansible supports storing credentials in a variety of ways. The most common way is to store them in a file called `vault.yml` and then encrypt it using `ansible-vault`. This file can then be used to store credentials for various services.


# Configuration 
### Sample Deployment
```json 
## This is a Terraform configuration file. For more information, see the Terraform documentation.
provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "Snake" {
  name     = "Snake-resources"
  location = "West Europe"
}

resource "azurerm_virtual_network" "Snake" {
  name                = "SnakeNetwork"
  address_space       = ["10.0.0.0/16"]
  location            = azurerm_resource_group.Snake.location
  resource_group_name = azurerm_resource_group.Snake.name
}

resource "azurerm_subnet" "Snake" {
  name                 = "internal"
  resource_group_name  = azurerm_resource_group.Snake.name
  virtual_network_name = azurerm_virtual_network.Snake.name
  address_prefixes     = ["10.0.2.0/24"]
}

resource "azurerm_network_interface" "Snake" {
  name                = "Snake-nic"
  location            = azurerm_resource_group.Snake.location
  resource_group_name = azurerm_resource_group.Snake.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.Snake.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_windows_virtual_machine" "Snake" {
  name                = "Snake-machine"
  resource_group_name = azurerm_resource_group.Snake.name
  location            = azurerm_resource_group.Snake.location
  size                = "Standard_F2"
  admin_username      = "Snake"
  admin_password      = YOUR_PASSWORD
  network_interface_ids = [
    azurerm_network_interface.Snake.id,
  ]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "MicrosoftWindowsServer"
    offer     = "WindowsServer"
    sku       = "2016-Datacenter"
    version   = "latest"
  }
}

```




#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com 
    )
