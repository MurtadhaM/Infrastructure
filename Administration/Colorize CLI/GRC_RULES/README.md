# CLI Styling & Syntax Highlighting with *ChromaTerm*
---
![](https://img.shields.io/badge/ChromaTerm-CLI%20Styling%20%26%20Syntax%20Highlighting%20with%20ChromaTerm-red)

using ChromaTerm to colorize the CLI on many popular terminal emulators like PuTTY, Minicom, etc.
---
## Installation
![](https://img.shields.io/badge/Installation-ChromaTerm-orange)

| Steps | Command |
| :---: | :---: |
| Installation | `pip3 install chromaterm` |
| Configuration | `curl -L https://raw.githubusercontent.com/0x1CA3/ChromaTerm/main/ChromaTerm.conf -o ~/.chromaterm.yml` |
| Integration | `TOOLS="ssh telnet minicom ifconfig ip netstat ping traceroute"` |
| Alias | `for tool in $TOOLS; do alias $tool="ct  $tool"; done` |

![DEMO](https://img.shields.io/badge/Demo-Colorize-purple)
---

<img src="Chroma.gif" width=100%>


## Why ChromaTerm
![](https://img.shields.io/badge/Why-ChromaTerm-blue)
---
## *Because IT SUPPORTS REAL-TIME COLORIZATION*
---
## Credits
![](https://img.shields.io/badge/Credits-hSaria-yellow)
---
<a href="https://github.com/hSaria/ChromaTerm" align=center><p align="center"  >**ChromaTerm**</p></a>
---

- ChromaTerm is a Python library that colorizes the CLI on many popular terminal emulators like PuTTY, Minicom, etc. unlike other tools that only work on a specific terminal emulator.

## Usage
![](https://img.shields.io/badge/Usage-Colorize-green)
```zsh
# install ChromaTerm
pip3 install chromaterm 
#start minicom with colorize
ct minicom -c on -D /dev/ttyUSB0
# For SSH
ct ssh user@host
# For telnet
ct telnet host
```




