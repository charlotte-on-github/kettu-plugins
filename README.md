# Charlotte's Kettu Plugins, Based on Rico040's Bunny Plugins
Plugins for [Kettu](https://codeberg.org/cocobo1/Kettu), that I tweaked to fit
personal preferences.
Freesticker plugin based on
[aliernfrog](https://github.com/aliernfrog/vd-plugins)'s.

## Building From Source
```bash
$ git clone https://github.com/charlotte-on-github/kettu-plugins
$ cd kettu-plugins
$ pnpm install
$ pnpm approve-builds
$ pnpm build
```

## Installing
The plugins needs to be downloaded from a website.
A locally hosted one can be created with Python using:
```bash
$ python3 -m http.server -d dist
```
From there the plugin can be installed using the
local servers ip address and port.

