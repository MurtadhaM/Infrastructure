# Author: Murtadha Marzouq
# Date: 2022-11-11
# Description: This is a template for creating a resource group in Azure using Terraform and Azure VMs

# Requiring the AzureRM Provider
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
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
  name     = "SnakeNet-${random_id.resource-name.hex}-RG"
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
  # For each subnet, we need to create a new resource
  for_each = var.all_subnets
  name                 = each.key
  resource_group_name  = azurerm_resource_group.resource-group.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = [each.value]
  depends_on = [
     azurerm_virtual_network.vnet
  ]
}

# Create a Public IP
resource "azurerm_public_ip" "public-ip" {
  name                = var.public_ip_name
  location            = var.location
  resource_group_name = azurerm_resource_group.resource-group.name
  allocation_method   = var.allocation_method
  depends_on = [
     azurerm_resource_group.resource-group
  ]
}



