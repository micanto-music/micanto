---
sidebar_position: 1
---

# Spotify
Micanto uses the spotify api to get missing covers for albums and artist images.

## How to setup
1. Create a spotify developer account https://developer.spotify.com/
2. Go to your dashboard and create an app. Give it a name and a description
3. After setting up you will get a Client ID and a Client Secret. You need both of them
4. Go to your webserver and edit the .env file in your document root. Mostly /var/www/html/.env
5. Add the credentials to your .env file with. e.g.:

```bash
SPOTIFY_CLIENT_ID=yourclientid
SPOTIFY_CLIENT_SECRET=yourclientsecret
```

If you now resync your library or edit tracks/albums it will check if spotify api is enabled and if there is an image/cover missing and will try to get it via the spotify api.
