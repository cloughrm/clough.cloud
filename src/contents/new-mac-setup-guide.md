---
datetime: 2023-01-28
title: New Mac Setup Guide
slug: "new-mac-setup-guide"
featured: false
draft: false
tags:
  - macos
  - apple
  - guide
ogImage: ""
description: Due to my line of work & personal interest in development, I often find myself settings up new Apple laptops. This is intended to be a living document of steps I take when setting up a new Mac. Hopefully you will learn some helpful macOS customizations along the way.
---

Due to my line of work & personal interest in development, I often find myself settings up new Apple laptops. This is intended to be a living document of steps I take when setting up a new Mac. Hopefully you will learn some helpful macOS customizations along the way.

## Table of contents

## Safari

- Preferences → Autofill → User name and passwords: `false`
- Preferences → General → Safari opens with: `All non-private from last session`
- Preferences → Advanced → Show Develop in menu bar: `true`
- Preferences → Advanced → Smart Search Field → Show full website address: `true`
- Neeva Extension ([https://apps.apple.com/us/app/neeva-search-protect/id1540663248?mt=12](https://apps.apple.com/us/app/neeva-search-protect/id1540663248?mt=12))
  - Safari Preferences → Extensions → Neeva for Safari: `Enable`
  - Click Neeva Extension:
    - Make Neeva Default Search: `true`
    - Block tracking cookies: `false`
    - Block tracking requests: `false`
- 1Blocker Extension ([https://apps.apple.com/us/app/1blocker-ad-blocker/id1365531024](https://apps.apple.com/us/app/1blocker-ad-blocker/id1365531024))
  - Safari Preferences → Extensions → Block Ads Extension: `Enable`
  - Safari Preferences → Extensions → Block Annoyances: `Enable`
  - Safari Preferences → Extensions → Custom Rules: `Enable`
  - Open 1Blocker App to enable
- Notion Web Clipper Extension: [https://apps.apple.com/us/app/notion-web-clipper/id1559269364?mt=12](https://apps.apple.com/us/app/notion-web-clipper/id1559269364?mt=12)
- View → Customize Toolbar…: Remove `Privacy Report` & `Neeva Extension`

## Notification Center

- Remove all the widgets except weather and calendar

## Stock Apps to Delete

- Garageband
- iMovie
- Keynote
- Pages

## Apps to Install

- 1Password with safari extension ([https://1password.com/downloads/mac/](https://1password.com/downloads/mac/))
- Notion ([https://www.notion.so/desktop](https://www.notion.so/desktop))
- Spotify ([https://www.spotify.com/us/download/mac/](https://www.spotify.com/us/download/mac/))
  - Preferences → Startup and window behaviour → Open Spotify Automatically after you log into the computer: `No`
  - Preferences → Display → See what your friends are playing: `false`
- Sensible Side Buttons ([https://sensible-side-buttons.archagon.net](https://sensible-side-buttons.archagon.net/))
  - Menu Bar Icon → Enabled: `true`
  - Menu Bar Icon → Hide Menu Bar Icon: `true`
  - Open System Settings → General → Login Items → Open at Login: Add `/Applications/SensibleSideButtons`
- exelban/stats ([https://github.com/exelban/stats](https://github.com/exelban/stats))
  - Disk: `false`
  - Battery: `false`
  - RAM → Update interval: `3 sec`
  - RAM → Update interval for top processes: `3 sec`
- Copilot ([https://copilot.money/download](https://copilot.money/download))
- VSCode ([https://code.visualstudio.com](https://code.visualstudio.com/))
- Brave ([https://brave.com](https://brave.com/))
  - Settings → Sync → Start using sync: `true`

## Terminal

- Create Development Folder: mkdir `~/Dev`
- Install Command Line Developer Tools: `xcode-select --install`
<details><summary>- Install Theme: [https://github.com/lysyi3m/macos-terminal-themes](https://github.com/lysyi3m/macos-terminal-themes)</summary>

```bash
curl -o /tmp/idleToes.terminal "https://raw.githubusercontent.com/lysyi3m/macos-terminal-themes/master/themes/idleToes.terminal" && open /tmp/idleToes.terminal
```

</details>

- Preferences → Profiles → Text → Background → Color & Affects → Opacity: `95%`
- Preferences → Profiles → Text → Font → Change → Size: `13`
- Preferences → Profiles → Text → Cursor: `Vertical Bar`
- Preferences → Profiles → Keyboard → Use Option as Meta key: `true`
- Preferences → Profiles: `Default`

<details><summary>Install Homebrew</summary>

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

</details>

<details><summary>Set up .zshrc: `vim ~/.zshrc`</summary>

```bash
# Colors
export CLICOLOR=1

# Prompt
export PS1="%n@%m %1~ %# "

# Aliases
alias ll="ls -Flht"
alias ls="ls -F"
alias la="ls -Flhta"

# Node.js
export PATH="/opt/homebrew/opt/node@18/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/node@18/lib"
export CPPFLAGS="-I/opt/homebrew/opt/node@18/include"

# Set PATH, MANPATH, etc., for Homebrew.
eval "$(/opt/homebrew/bin/brew shellenv)"

# Case insensitive tab completion
zstyle ':completion:*' matcher-list 'm:{[:lower:][:upper:]}={[:upper:][:lower:]}' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*' 'm:{[:lower:][:upper:]}={[:upper:][:lower:]} l:|=* r:|=*'

# Automatic CD
setopt AUTO_CD

# ZSH History
export HISTFILESIZE=100000
export HISTSIZE=100000
export HISTFILE="~/.zsh_history"
setopt SHARE_HISTORY # share history across multiple zsh sessions
setopt HIST_REDUCE_BLANKS # removes blank lines from history
setopt HIST_IGNORE_DUPS # do not store duplications
bindkey "^[[A" history-beginning-search-backward # History substring search
bindkey "^[[B" history-beginning-search-forward # History substring search

# Load the ZSH config changes
autoload -Uz compinit && compinit

# Prompt, git branch on right
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\\1]/p'
}
setopt PROMPT_SUBST
COLOR_DEFAULT=$'%f'
COLOR_ORANGE=$'%F{214}'
COLOR_GRAY=$'%F{243}'
export PROMPT='${COLOR_ORANGE}%1~ ➤${COLOR_DEFAULT} '
export RPROMPT='${COLOR_GRAY}$(parse_git_branch)${COLOR_DEFAULT}'

# Fun greeting from a random pokemon
fortune -s 50% computers 50% all | pokemonsay
```

</details>

- Hush the login messages: `touch ~/.hushlogin`
- Install httpie: `brew install httpie`
- Install Node.js: `brew install node@18`
- Install htop: `brew install htop`
- Install fortune: `brew install fortune`
- Install pokemonsay: `brew tap possatti/possatti && brew install pokemonsay`

## System Settings

- Appearance
  - Appearance → Appearance: `Light`
- Control Center
  - Control Center Modules → Bluetooth: `Show in Menu Bar`
  - Other Modules → Battery → Show Percentage: `true`
  - Menu Bar Only → Spotlight: `Don't Show in Menu Bar`
- Siri & Spotlight
  - Listen for Hey Siri: Off
    - Siri voice: `Australian Voice 2`
  - Spotlight Privacy: Add `~/Dev`
- Desktop and Dock:
  - Show recent applications in Dock: `false`
  - Position on screen: `Left`
- Displays
  - Automatically adjust brightness: `false`
  - Advanced → Slightly dim the display on battery: `false`
- Wallpaper
  - Colors → Auto-Rotate
  - Change picture: `Every 15 mins`
- Screen Saver: `Drift`
- Lock Screen
  - Turn display off on power adapter when inactive: `For 1 hour`
- Touch ID & Password
  - Apple Watch → Ryan’s Apple Watch: `true`
- Keyboard:
  - Key repeat rate: `7/8`
  - Delay until repeat: `5/6`
  - Shortcuts → App Shortcuts → +
    - Menu Title: `Move Window to Left Side of Screen`
      Keyboard Command: `control-option-left`
    - Menu Title: `Move Window to Right Side of Screen`
      Keyboard Command: `control-option-right`

## Finder

- View → Show Path Bar
- Preferences → General → New Finder windows show: `ryan`
- Set up list view
  - Go → Go To Folder: `/`
  - View → Show View Options (⌘ - J)
    - Always open in list view: `true`
    - Browser in list view: `true`
    - Sort by: `Name`
  - Run in Terminal: `sudo find / -name ".DS_Store"  -exec rm {} \;`
- Set up Desktop View
  - Click on desktop
  - View → Show View Options (⌘ - J)
    - Sort by: `Name`
- Finder Sidebar:
  - Favorites
    - AirDrop
    - Applications
    - ryan
    - Dev
    - Desktop
    - Downloads
  - iCloud
    - iCloud Drive
  - Locations
    - Network

## Messages

- Settings → iMessage → Enable Messages in iCloud: `true`

## Podcasts

- Settings → Playback → Continuous Playback: `Stop when an episode ends`
- Settings → Playback → Skip Buttons → Forward: `15 seconds`

## Dock

- Downloads Stack → Right Click → View content as: `Grid`
- Add small spacers: `defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="small-spacer-tile";}'; killall Dock`

![My macOS Dock](/blog/dock.png)

## TextEdit

- Preferences → Format: `Plain Text`
- By default, open a new blank document: `defaults write com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile -bool false`
