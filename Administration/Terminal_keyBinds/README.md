# Terminal Key Bindings Configurations

## Terminal Key Bindings
```zsh
bindkey -e # emacs key bindings
bindkey -v # vi key bindings
bindkey "[[D" backward-word
bindkey "[[C" forward-word
bindkey "[[A" beginning-of-line
bindkey "[[E" end-of-line
```

## Tools Key Bindings
```zsh
# fzf
bindkey '^T' fzf-file-widget
bindkey '^R' fzf-history-widget
bindkey '^X^T' fzf-cd-widget

# zsh-autosuggestions
bindkey '^ ' autosuggest-accept


# zsh-syntax-highlighting
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## EMACS Key Bindings
```zsh
# emacs key bindings
bindkey -e
bindkey "^[[A" history-beginning-search-backward
bindkey "^[[B" history-beginning-search-forward
bindkey "^[[C" forward-char

# vi key bindings
bindkey -v
bindkey "^[[A" history-beginning-search-backward
bindkey "^[[B" history-beginning-search-forward
bindkey "^[[C" forward-char
```

