<# Author: Murtadha Marzouq#>

# Get Current Date
$CurrentDate=Get-Date -Format "MM-dd-yyyy"

# Get all the Resource Groups in the current subscription 
#$ResourceGroups = Get-AzResourceGroup |Select-Object ResourceGroupName



#Create a folder, if doesn't exist already to store the JSON file
New-Item -ItemType Directory -Path $PWD -Name "Templates" -Force

#Get current directory path and append the folder name
$Templates_Directory = $PWD.ToString() + "\\Templates"

function Export-ResourceGroup{ 
    param(
        [Parameter(Mandatory=$false)]
        [string]$ResourceGroupName
    )
    #Get all the resources in the current resource group
    $Resources = Get-AzResourceGroup |Select-Object ResourceGroupName  
    #Iterate over the resources and export them to a JSON file
    foreach ($ResourceGroupName in $Resources.ResourceGroupName) {
       Export-AzResourceGroup  -ResourceGroupName $ResourceGroupName -Path      $Templates_Directory  -Force

    }

    #Print the Content of the folder
    Get-ChildItem -Path $Templates_Directory
    
}


#execute the function   
Export-ResourceGroup