variable "location" {
  default = "EastUS2"
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

variable "internal_subnet_address_prefixes" {
  default = ["172.16.200.0/24"]
}


variable "external_subnet_address_prefixes" {
  default = ["172.16.100.0/24"]
}

variable "all_subnets" {
  default = {"Local_Subnet" : "172.16.100.0/24",
            "Remote_Subnet" : "172,16,200.0/24",
            "External_Subnet" : "172.16.50.0/24"
            "Gateway_Subnet" : "172.16.0.0/24"
  }
}



variable "address_space" {
  default =  ["172.16.0.0/16"]
}

variable "public_ip_name" {
  default = "Snake-PublicIP"
  
}


variable "allocation_method" {
  default = "Static"
  
}
variable "gateway_subnet_address_prefixes" {
  default = ["172.16.0.0/24"]

  
}