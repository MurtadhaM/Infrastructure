# Azure CLI  

##### <p align="center"> <img src="https://img.shields.io/badge/Azure--CLI-Administration-ff0000?style=for-the-badge" width="40%"/> </p>


---

## References
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest)
- [Sample Scripts](https://github.com/Azure-Samples/azure-cli-samples)
- [Extensions](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azurecli)

---  

<a align=center href="https://github.com/Azure-Samples/azure-cli-samples"> <p align="center"> <img src="https://img.shields.io/badge/SAMPLE-SCRIPTS-orange?style=for-the-badge" width="15%"/> </p></a>


<p align="center"> <img src="https://img.shields.io/badge/VSCODE-Demo-ff0000?style=for-the-badge" width="15%"/> </p>

<p align=center><img src="https://github.com/Microsoft/vscode-azurecli/raw/HEAD/images/in_action.gif" width=75% /></p>

## Install
<p align="center"> <img src="https://img.shields.io/badge/Installation-SCRIPT-ff0000?style=for-the-badge" width="15%"/> </p>
---


```bash
## Install Azure CLI on Ubuntu
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
## Install Azure CLI on Windows
choco install azure-cli -y 
winget install azure-cli -y
pip install azure-cli
```


## Development Environment
<p align="center"> <img src="https://img.shields.io/badge/Basic-Config-ff0000?style=for-the-badge" width="15%"/> </p>
---

```bash
## Install Azure CLI Extension for VS Code
code --install-extension ms-vscode.azurecli
## Install Azure CLI Extension for VS Code



```bash
## Commands

```bash
az login

az config set core.collect_telemetry=no 
# Azure CLI

## Install Azure CLI
pip install azure-cli
## Login to Azure
az login
## List all subscriptions
az account list --query "[].name"  
## Set Default Subscription
az account set  --subscription "findasnake.com" 
## List all resource groups
az group list --query "[].name"
## Set Default configuration
az configure --defaults group=findasnake-cli-rg 
az configure --defaults location=eastus
az configure --defaults subscription=findasnake.com
az configure --defaults output=table
az configure --list defaults
## Create Resource Group
az group create --name findasnake-cli-rg --location eastus

## Create Storage Account
az storage account create --name findasnakeclisa --location eastus --resource-group findasnake-cli-rg --sku Standard_LRS

## GET Storage Account Connection String

$connectionString = az storage account show-connection-string  --name snakefunction  --query connectionString -o json |ConvertFrom-Json
## List Storage Account Containers
az storage container list --account-name snakefunction --connection-string $connectionString
