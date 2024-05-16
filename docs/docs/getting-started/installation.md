---
sidebar_position: 2
---

# Installation

## Quick Start Guide
### Docker
The simplest way is to clone the docker repository of micanto and use docker compose. See <a href="/docs/getting-started/docker">Docker</a> for more information.

### Setup without docker

**Steps**
* Clone this repository to your server `git clone https://github.com/micanto-music/micanto.git`
* `composer install`
* `yarn install`
* `yarn build`

## Initial Setup
* Open your installation in your browser. You will be redirected to the /setup page. Follow the instructions to setup the database, music path and your admin user.
* Sync your music with `php artisan micanto:sync` and wait. This can take some time
* Login with your created admin user and listen to your music!
