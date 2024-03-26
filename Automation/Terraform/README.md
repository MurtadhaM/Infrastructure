# Terraform
<img 
center src="https://www.devopsschool.com/blog/wp-content/uploads/2021/07/terraform-architecture-components-workflow-1.jpg" width="100%"/> 

----

## Table of Contents
----
- [Terraform](#terraform)
  - [Table of Contents](#table-of-contents)
- [Overview](#overview)
    - [Installation](#installation)
    - [Resources:](#resources)
  - [Lifecycle](#lifecycle)
      - [Example:](#example)
  - [Shell Commands:](#shell-commands)
- [Configuration](#configuration)
      - [License](#license)
      - [Author](#author)

# Overview
Terraform is an open-source infrastructure as code software tool created by HashiCorp. Users define and provide data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language, or optionally JSON. Terraform generates an execution plan describing what it will do to reach the desired state, and then executes it to build the described infrastructure. As of May 2021, Terraform supports more than 90 infrastructure and service providers.
### Installation
- [Download Terraform](https://www.terraform.io/downloads.html)
- [Install Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
### Resources:
- [Labs](https://kodekloud.com/lessons/labs/)
- [Terraform Cheat Sheet](https://raw.githubusercontent.com/scraly/terraform-cheat-sheet/master/terraform-cheat-sheet.pdf)
- [Terraform Azure Provider](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)

## Lifecycle
| Order | Name | Description |
| --- | --- | --- |
| 1 | create_before_destroy | (Optional) When true, the resource will be destroyed and recreated if a change is made to the resource. This is useful for resources that cannot be updated in place. |
| 2 | prevent_destroy | (Optional) When true, the resource will not be destroyed when the resource is removed from the configuration. |
| 3 | ignore_changes | (Optional) A list of arguments to ignore changes to. This is useful for sensitive values that should not be stored in the state file. |

#### Example:

```bash
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "EastUS2"
  lifecycle {
    prevent_destroy = true
  }
}
```



## Shell Commands:
```bash
#Initialize working directory containing tf files
terraform init 
#Generate and show an execution plan
terraform plan 
#Inspect Terraform state or plan
terraform show 
#Builds or changes infrastructure
terraform apply 
#Destroy Terraform-managed infrastructure
terraform destroy 
#Read an output from a state file
terraform output 
#Verifies the  the configuration files in a directory
terraform validate 
#Rewrites config files to canonical format
terraform fmt 
#Prints a tree of the providers used in the configuration
terraform providers 
#Update local state file against real resources
terraform refresh 
#Create a visual graph of Terraform resources
terraform graph 
#Create a visual graph of Terraform resources and pipe the output to Graphviz (dot) to generate an SVG image
terraform graph |dot  -Tsvg > image.svg 


```
<h2 align="center"> Ansible VS Terraform</h2>

| Ansible | Terraform |
| --- | --- |
| Ansible is a configuration management tool. | Terraform is an infrastructure as code tool. |
| Ansible is agentless. | Terraform is agent-based. |
| Ansible is written in Python. | Terraform is written in Go. |
| Ansible is a push-based tool. | Terraform is a pull-based tool. |
| Ansible is a declarative tool. | Terraform is an imperative tool. |




# Configuration
```bash


variable "location" {
  default = "EastUS2"
}

variable "resource_group_name" {
  default = "Snake-Resource-Group"
}
variable "virtual_network_name" {
  default = "Snake-Vnet"
}
variable "subnet_name" {
  default = "SnakeSubnet"
}

variable "subnet_address_prefixes" {
  default = ["172.16.100.0/24"]
}

variable "address_space" {
  default =  ["172.16.0.0/16"]
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}

# RANDOM STRING
resource "random_id" "resource-name" {
  byte_length = 8
}



# APPEBD THE RANDOMIZED NAME TO THE RESOURCE GROUP NAME
resource "azurerm_resource_group" "resource-group" {
  name     = "Snake-${random_id.resource-name.hex}-RG"
  location = var.location
  depends_on = [
     random_id.resource-name
  ]
}


# Create a virtual network
resource "azurerm_virtual_network" "vnet" {
  name = var.virtual_network_name
  address_space       =  var.address_space
  location            = var.location
  resource_group_name = azurerm_resource_group.resource-group.name
  depends_on = [
     azurerm_resource_group.resource-group
  ]
}

# Create a subnet
resource "azurerm_subnet" "subnet" {
  name                 =  var.subnet_name
  resource_group_name  = azurerm_resource_group.resource-group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = var.subnet_address_prefixes
  depends_on = [
     azurerm_virtual_network.vnet
  ] 
}

```




#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Author
[Murtadha Marzouq](http://www.findasnake.com)
