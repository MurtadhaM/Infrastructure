# Installing & Configuring Patch My PC 

https://docs.patchmypc.com/installation-guides/intune


# Requirements Checklist
- [ ] Installer Package (MSI)
- [ ] Enable Windows Features (RSAT Tools: Update Service) 
- [ ] Azure AD App Registration
- [ ] Endpoint Autopilot Configuration and Dynamic Groups
- [ ] Intune Configuration


``` 
# Enable Windows Features
```
Get-WindowsCapability -Name RSAT* -Online | Select-Object -Property DisplayName, State
```

# Write-Host "Installing RSAT Tools: Update Service" -ForegroundColor Green
Add-WindowsCapability -Online -Name Rsat.WSUS.Tools 


Write-Host "Installing RSAT Tools: Update Service" -ForegroundColor Green

 Install-WindowsFeature -Name UpdateServices-API  


 #Download MSI
# Print Download URL
Write-Host "Downloading MSI" -ForegroundColor Green
$downloadURL = "https://patchmypc.com/scupcatalog/downloads/publishingservice/PatchMyPC-Publishing-Service.msi"


 iwr -Uri  $downloadURL -OutFile C:\Temp\PatchMyPC-Publishing-Service.msi


# Install MSI

Write-Host "Installing MSI" -ForegroundColor Green

msiexec /i C:\Temp\PatchMyPC-Publishing-Service.msi /qn


# Configure MSI
# Enable Windows Features

Write-Host "Enabling Windows Features" -ForegroundColor Green
``` 
Get-WindowsCapability -Name RSAT* -Online | Select-Object -Property DisplayName, State
```

# Write-Host "Installing RSAT Tools: Update Service" -ForegroundColor Green


## App Permissions 


<img src="https://1712629442-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MX7dvS0r_4fc0AikgJS%2Fuploads%2FycPBeuEoAGX9BqEZy41N%2Fimage.png?alt=media&token=36b651e4-8e5c-47c9-ab2a-88bdd4588e8a" width="50%"  alt="image.png"  title="image.png" align="center"  /> 



## Client Secret:




## Tenant ID:

<img  src="https://1712629442-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-MX7dvS0r_4fc0AikgJS%2F-MY6LQUH-umekEPxNl_P%2F-MY6V3XG0tiUugLEj8hY%2Ftenant-status.png?alt=media&token=e559948a-597c-4f30-89ad-4120c2538085" width="50%"  height="100%"  alt="tenant-status.png"  title="tenant-status.png"  />
