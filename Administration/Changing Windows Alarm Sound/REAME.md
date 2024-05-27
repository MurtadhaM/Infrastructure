# Changing Alarm Sound Windows
  

## Windows
``Note: Maybe you need TrustedInstaller permission to override the default alarm sound.``


1. Download the sound you want to use as an alarm.  
2. Move the sound file to the `C:\Windows\Media` folder.
3. Open the `Control Panel` and go to `Sound`.

#### Permissions to override the default alarm sound
```powershell
takeown /f "C:\Windows\Media\Alarm01.wav"
cmd.exe /c icacls "C:\Windows\Media\Alarm01.wav" /grant %username%:F
move /y "C:\Windows\Media\Alarm01.wav" "C:\Windows\Media\Alarm01.wav.bak"
copy /y "C:\path\to\your\sound.wav" "C:\Windows\Media\Alarm01.wav"
```

#### Permissions to override the default alarm sound as TrustedInstaller
```powershell

## Alternativly you can use the following command to run Command Prompt as TrustedInstaller:
# Download this tool:
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/jschicht/RunAsTI/master/RunAsTI64.exe" -OutFile "C:\windows\system32\RunAsTI64.exe"
# Run the following command:
RunAsTI64.exe cmd.exe 
## Now you can run the following command to change the permissions:
move /y "C:\Windows\Media\Alarm01.wav" "C:\Windows\Media\Alarm01.wav.bak"
copy /y "C:\path\to\your\sound.wav" "C:\Windows\Media\Alarm01.wav"
```
