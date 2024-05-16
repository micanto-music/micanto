# Update

## Docker
The update of micanto with micanto is pretty much a no brainer. Just shutdown docker with
`docker-compose down` and start it again with `docker-compose up -d`. The `docker-compose.yaml` says micanto:latest as package.
So it will update always to the latest micanto version on restart.

## Non-Docker
If you cloned it via git you can just update via git and let the migrations and update run.
1. `git pull origin main`
2. `composer update`
3. `yarn build`
4. `php artisan migrate`

