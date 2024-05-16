# Docker
Micanto offers a ready to use docker image with installed micanto in it.

## How to use
1. Clone the micanto docker repository to your server/pc (https://github.com/micanto-music/docker)
2. Create the needed folders for your local assets and to persist them. These are:
    * `music` - the folder with your music files
    * `img` - a folder where micanto will save the covers from artists, albums, playlists and users
    * `mariadb` - your database data will be stored outside of docker to persist
    * `search_index` - the sqlite files with your search index
4. Change the username/password database credentials in the `docker-compose.yaml` for your needs
4. Let docker compose your application: `docker compose up -d`
