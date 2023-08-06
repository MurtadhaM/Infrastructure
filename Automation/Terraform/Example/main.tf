# Author: Murtadha Marzouq
# Date: 2022-11-11
# Description: This is a simple example of how to use Terraform to create a resource group in Azure



# resource "Provider_ResourceType" "NameOfResource"{
#	 Key = "Value"
#	Key2 = "Value2"
#}

# RANDOMIZE THE NAME OF THE RESOURCE GROUP
resource "random_id" "resource-name" {
  byte_length = 8
}

# APPEBD THE RANDOMIZED NAME TO THE RESOURCE GROUP NAME
resource "azurerm_resource_group" "resource-group" {
  name     = "Snake-${random_id.resource-name.hex}-RG"
  location = "eastus2"
}

# Configure the Azure Provider
provider "azurerm" {
  features {}
}

# Data Source
data local_file "my_file" {
  filename = "${path.module}/data-source.txt"
}



# Output the data source
 output "data-source_content" {
  value = data.local_file.my_file.content
 }

  


# Resource: local_file - https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file
resource "local_file" "NewFile" {
  filename = "${path.module}/${var.filename}"
  content  = "The resource is ${random_pet.my-resource.id}"

  # Rule that creates the resource before we destroy it
  lifecycle {
    create_before_destroy = true
  }
}

# Resource: random_pet  https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/pet

resource "random_pet" "my-resource" {

  prefix    = var.prefix
  separator = var.separator
  length    = var.length

  # Rule that prevents the resource from being destroyed until we destroy the terraform state
  lifecycle {
    prevent_destroy = true
  }

}


resource "local_file" "second-file" {
  filename = "${path.module}/second-file.txt"
  content  = "The resource is ${random_pet.my-resource.id}"
  # Rule that prevents the resource attribute from being changed 
  lifecycle {
    ignore_changes = [content]
    # or
    # ignore_changes = all
  }
}
  


# Output: 
output "resource-name1" {

  value       = random_pet.my-resource.id
  description = "This is the random name of the resource of the pet"

}