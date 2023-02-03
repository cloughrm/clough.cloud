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
description: As someone who builds software for a living & as a hobby - I go through lots of computers. I also like to occasionally wipe my machines and reinstall from a clean state. Therefore I spend a lot of time setting up new Apple computers. This blog is intended to be a living document of steps I take when setting up a new Mac. I use macOS for both personal and professional work, and this setup guide reflects both use cases. Hopefully you will learn some helpful macOS customizations along the way.
---
As someone who builds software for a living & as a hobby - I go through lots of computers. I also like to occasionally wipe my machines and reinstall from a clean state. Therefore I spend a lot of time setting up new Apple computers. This blog is intended to be a living document of steps I take when setting up a new Mac. I use macOS for both personal and professional work, and this setup guide reflects both use cases. Hopefully you will learn some helpful macOS customizations along the way.

## Table of contents

## Browser: Safari

As of 2023, my daily driver is Safari. I also use Brave Browser heavly for development.

### Safari Extensions

- [Neeva](https://apps.apple.com/us/app/neeva-search-protect/id1540663248?mt=12)
  - Configure Neeva Extension:
    - Make Neeva Default Search: `true`
    - Block tracking cookies: `false`
    - Block tracking requests: `false`

- [1Blocker](https://apps.apple.com/us/app/1blocker-ad-blocker/id1365531024)
  - Configure 1Blocker Extension:
    - Block Ads Extension: `Enable`
    - Block Annoyances: `Enable`
    - Custom Rules: `Enable`
    - Be sure to open 1Blocker App to enable everything

- [Notion Web Clipper](https://apps.apple.com/us/app/notion-web-clipper/id1559269364?mt=12)
- [1Password](https://apps.apple.com/us/app/1password-for-safari/id1569813296?mt=12)

### Safari Preferences

- General → Safari opens with: `All non-private from last session`
- Autofill → User name and passwords: `false`
- Advanced → Show Develop in menu bar: `true`
- Advanced → Smart Search Field → Show full website address: `true`
- View → Customize Toolbar…: Remove `Privacy Report` & `Neeva Extension`


## Stock Apps to Delete

Lets be honest - nobody uses these apps, right? I will admit, I occasionally use Numbers, so that is not deleted.

- GarageBand
- iMovie
- Keynote
- Pages

## Apps to Install

- [1Password](https://1password.com/downloads/mac/)
- [Notion](https://www.notion.so/desktop)
- [Spotify](https://www.spotify.com/us/download/mac/)
  - Preferences
    - Startup and window behaviour → Open Spotify Automatically after you log into the computer: `No`
    - Display → See what your friends are playing: `false`
- [Sensible Side Buttons](https://sensible-side-buttons.archagon.net/)
  - Menu Bar Settings
    - Enabled: `true`
    - Hide Menu Bar Icon: `true`
  - System Settings → General → Login Items → Open at Login: Add `/Applications/SensibleSideButtons.app`
- [exelban/stats](https://github.com/exelban/stats)
  - Disk: `false`
  - Battery: `false`
  - RAM → Update interval: `3 sec`
  - RAM → Update interval for top processes: `3 sec`
- [Copilot](https://copilot.money/download)
- [VSCode](https://code.visualstudio.com/)
- [GitHub Desktop](https://desktop.github.com)
- [Brave](https://brave.com/)
  - Settings → Sync → Start using sync: `true`
- [Magnet](https://apps.apple.com/us/app/magnet/id441258766?mt=12)
  - Preferences → Disable all keyboard shortcuts except `Left` & `Right`
- [Mos](https://mos.caldis.me)
  - Preferences → Miscellaneous → Launch on Login: `true`
  - Preferences → Miscellaneous → Hide Status Bar Icon: `true`

## Terminal

- Create Development Folder: mkdir `~/Dev`
- Install Command Line Developer Tools: `xcode-select --install`

### Terminal Theme

- [lysyi3m/macos-terminal-themes](https://github.com/lysyi3m/macos-terminal-themes)
  ```bash
  curl -o /tmp/idleToes.terminal "https://raw.githubusercontent.com/lysyi3m/macos-terminal-themes/master/themes/idleToes.terminal" && open /tmp/idleToes.terminal
  ```

### Terminal Preferences

- Profiles → Text
  - Text → Background → Color & Affects → Opacity: `95%`
  - Text → Font → Change → Size: `13`
  - Text → Cursor: `Vertical Bar`
- Profiles → Keyboard → Use Option as Meta key: `true`
- Profiles → Window
  - Path: `true`
  - Acvite process name: `false`
  - Dimensions: `false`
- Profiles: Click `Default` to save
- Edit Menu → Marks → Automatically Mark Prompt Lines: `false`

### Terminal Utilities
- Install Homebrew

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

- Hush the login messages: `touch ~/.hushlogin`
- Install httpie: `brew install httpie`
- Install Node.js: `brew install node@18`
- Install htop: `brew install htop`
- Install fortune: `brew install fortune`
- Install pokemonsay: `brew tap possatti/possatti && brew install pokemonsay`

### .zshrc
Create a `.zshrc` with `touch ~/.zshrc` and add the following:

```bash
# Colors
export CLICOLOR=1

# Prompt
export PS1="%n@%m %1~ %# "

# Aliases
alias ll="ls -Flht"
alias ls="ls -F"
alias la="ls -Flhta"
alias activate="source env/bin/activate"
alias vactivate="source venv/bin/activate"

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

After all these modifications - your terminal should look something like this:
<p align="center"><img src="/blog/terminal.png" alt="My macOS Terminal" width="75%" /></p>


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

## Finder

- View → Show Path Bar
- Preferences → General → New Finder windows show: `ryan`
### Finder List View by Default
- Go → Go To Folder: `/`
- View → Show View Options (⌘ - J)
  - Always open in list view: `true`
  - Browser in list view: `true`
  - Sort by: `Name`
- Run in Terminal: `sudo find / -name ".DS_Store"  -exec rm {} \;`

### Finder + Desktop
- Click on desktop
- View → Show View Options (⌘ - J)
  - Sort by: `Name`

### Finder Sidebar:
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

## Notification Center

- Remove all the widgets except weather and calendar

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
- By default, open a new blank document (instead of asking which file to open): 
  ```bash
  defaults write com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile -bool false
  ```
