#region Functions
<# SHAREPINT MANUAL SYNC
Author: Murtadha Marzouq
Original Source: https://potsolutions.nl/2023/08/06/sync-sharepoint-document-librarys-and-folders-with-azure-ad-group-assignments/
Source 2:https://www.youtube.com/watch?v=Zoac9lbUuG0
Description: This script will sync a custom sharepoint folder to your local machine.

#>
function Sync-SharepointLocation {
    param (
        [guid]$siteId,        # 🆔 Site ID
        [guid]$webId,         # 🆔 Web ID
        [guid]$listId,        # 🆔 List ID
        [mailaddress]$userEmail, # 📧 User Email
        [string]$webUrl,      # 🌐 Web URL
        [string]$webTitle,    # 🏷️ Web Title
        [string]$listTitle,   # 🏷️ List Title
        [string]$syncPath     # 📁 Sync Path
    )
    try {

        Add-Type -AssemblyName System.Web
        #Encode site, web, list, url & email
        [string]$siteId = [System.Web.HttpUtility]::UrlEncode($siteId)       # 🔒 Encode Site ID
        [string]$webId = [System.Web.HttpUtility]::UrlEncode($webId)         # 🔒 Encode Web ID
        [string]$listId = [System.Web.HttpUtility]::UrlEncode($listId)       # 🔒 Encode List ID
        [string]$userEmail = [System.Web.HttpUtility]::UrlEncode($userEmail) # 🔒 Encode User Email
        [string]$webUrl = [System.Web.HttpUtility]::UrlEncode($webUrl)       # 🔒 Encode Web URL        #build the URI
        # Build the URI 🌐
        $uri = New-Object System.UriBuilder
        $uri.Scheme = "odopen"  # 🔗 Set URI scheme
        $uri.Host = "sync"      # 🔗 Set URI host
        $uri.Query = "siteId=$siteId&webId=$webId&listId=$listId&userEmail=$userEmail&webUrl=$webUrl&listTitle=$listTitle&webTitle=$webTitle" # 🔗 Set URI query
        # Launch the process from URI 🚀
        Write-Host $uri.ToString()
        start-process -filepath $($uri.ToString())
    }
    catch {
        $errorMsg = $_.Exception.Message  # ⚠️ Capture error message
    }
    if ($errorMsg) {
        Write-Warning "Sync failed."  # ⚠️ Display sync failure warning
        Write-Warning $errorMsg       # ⚠️ Display error message
    }
    else {
        Write-Host "Sync completed."
        while (!(Get-ChildItem -Path $syncPath -ErrorAction SilentlyContinue)) {
            Start-Sleep -Seconds 2
        }
        return $true
    }    
}
#endregion
#region Main Process
try {
    #region Sharepoint Sync
    [mailaddress]$userUpn = cmd /c "whoami/upn"
    $params = @{
        #replace with data captured from your sharepoint site.
        siteId    = "{b5fc207b-c5f8-4d0f-9394-650b66c2b999}"
        webId     = "{67294312-c336-4a22-ae10-bbf85be3ee49}"
        listId    = "{23acca0f-1bac-42fc-8e17-dd1ab71e6d8f}"
        userEmail = "admin@alumnicharlotteedu.onmicrosoft.com"#$userUpn
        webUrl    = "https://alumnicharlotteedu.sharepoint.com"
        webTitle  = "Communication site"
        listTitle = "FolderName"
    }
    $params.syncPath = "$(split-path $env:onedrive)\$($userUpn.Host)\$($params.webTitle) - $($Params.listTitle)"
    Write-Host "SharePoint params:"
    $params | Format-Table
    if (!(Test-Path $($params.syncPath))) {
        Write-Host "Sharepoint folder not found locally, will now sync.." -ForegroundColor Yellow
        $sp = Sync-SharepointLocation @params
        if (!($sp)) {
            Throw "Sharepoint sync failed."
        }
    }
    else {
        Write-Host "Location already syncronized: $($params.syncPath)" -ForegroundColor Yellow
    }
    #endregion
}
catch {
    $errorMsg = $_.Exception.Message
}
finally {
    if ($errorMsg) {
        Write-Warning $errorMsg
        Throw $errorMsg
    }
    else {
        Write-Host "Completed successfully.."
    }
}
#endregion