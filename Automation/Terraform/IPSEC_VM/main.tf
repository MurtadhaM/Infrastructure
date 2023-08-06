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
