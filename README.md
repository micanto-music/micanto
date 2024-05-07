<p align="center">
    <img src="https://avatars.githubusercontent.com/u/164861142?s=200&v=4"
    alt="Micanto Logo"
    height="200">
</p>

# Micanto Server
Micanto is a personal music player based on laravel as an api backend and react as a frontend.
With the  <a href="https://github.com/micanto-music/app">micanto mobile app</a> you can listen to your personal tracks everwhere.

## Installation
### Docker
The simplest way is to clone the docker repository of micanto and use docker compose. See <a href="https://github.com/micanto-music/docker">Micanto Docker</a> for more information.

### Setup without docker
**Prerequisites**  
* composer
* yarn
* php 8.2

**Steps**  
* Clone this repository to your server `git clone https://github.com/micanto-music/micanto.git`
* `composer install`
* `yarn install`

## Initial Setup
* ssh to your servers app root directory where you cloned this repo. Mostly (/var/www/html)
* `php artistian micanto:init`
* Edit your .env file for your needs and set the absolute path to your music library. E.g. /var/www/html/music/
* Sync your music with `php artisan micanto:sync` and wait. This can take some time
* Login with your created admin user and listen to your music!

## Changelog
**1.0.0** - Initial Release

