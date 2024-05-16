# Sync

Getting your music into micanto is pretty simple. You just to tell micanto in the setup where to look for mp3 files. 
It will search recursively through all folders inside that folder.

## Sync via CLI (recommend)
1. So go to your server via ssh and go to your document root. Mostly it is `/var/www/html`
2. call the sync command with `php artisan micanto:sync`
3. This will take some time and your library should fill up

### Sync automatically by watching your library folder
#### 1. Install inotify-tools
for ubuntu and debian it works like this:
```bash
sudo apt-get install inotify-tools
```
#### 2. Create a watcher script
Just create a file called `watch` in micantos root directoy with the following content:
```sh
#!/bin/bash

MUSIC_PATH=/var/www/music/
PHP_BIN=/usr/bin/php

inotifywait -rme move,close_write,delete --format "%e %w%f" MUSIC_PATH | while read file; do
  $PHP_BIN artisan micanto:sync "${file}"
done
```
#### 3. Run it in background
```sh
$ chmod +x watch
$ ./watch
[Ctrl+z]
$ bg
$ disown -h
```

## Sync via Frontend (not recommend)
You can start a sync in the frontend by clicking the "update" icon on the right headerbar but:
:::warning
The bigger your library is, the longer it takes. Starting a sync in the frontend is only recommend for small updates, not for initial imports!
:::


