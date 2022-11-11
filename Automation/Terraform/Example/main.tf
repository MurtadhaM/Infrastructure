resource "local_file" "NewFile"{
	filename = var.filename
	content = "The resource is ${random_pet.my-resource.id}"

}

resource "random_pet" "my-resource"{

prefix = var.prefix
separator = var.separator
length = var.length

}
