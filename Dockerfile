# Stage 1: Build Frontend Assets
FROM node:20-alpine AS frontend
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Application
FROM dunglas/frankenphp:php8.4

# Install system dependencies and PHP extensions
# Add specific extensions required by your project here
RUN install-php-extensions \
    pdo_mysql \
    gd \
    intl \
    zip \
    opcache \
    bcmath \
    pcntl \
    redis \
    exif

# Set working directory
WORKDIR /app

# Set the document root to the public directory
ENV SERVER_ROOT=/app/public

# Copy application code
COPY . .

# Copy built frontend assets from the frontend stage
COPY --from=frontend /app/public/build /app/public/build

# Install Composer dependencies
ENV COMPOSER_ALLOW_SUPERUSER=1
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Set permissions
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache

# Production configuration
ENV APP_ENV=production
ENV APP_DEBUG=false

# Default command provided by the base image starts the server
