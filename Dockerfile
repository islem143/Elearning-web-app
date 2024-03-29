FROM composer:2.4 as build

COPY ./src/composer.json /app
#COPY ./src /app/
WORKDIR /app
RUN composer update \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --no-dev \
    --prefer-dist

#RUN composer update --prefer-dist --no-dev --optimize-autoloader --no-interaction
COPY ./src /app/
RUN composer dump-autoload --optimize




FROM php:8.2-fpm-alpine as dev


ARG UID
ARG GID

ENV UID=${UID}
ENV GID=${GID}
ARG USERNAME
ENV USERNAME=${USERNAME}

RUN addgroup -g ${GID} --system ${USERNAME}
RUN adduser -G ${USERNAME} --system -D -s /bin/sh -u ${UID} ${USERNAME}


RUN sed -i "s/user = www-data/user = ${USERNAME}/g" /usr/local/etc/php-fpm.d/www.conf
RUN sed -i "s/group = www-data/group = ${USERNAME}/g" /usr/local/etc/php-fpm.d/www.conf


WORKDIR /var/www/html


ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apk update && apk add  zip
RUN docker-php-ext-install pdo pdo_mysql
COPY ./src/php.ini /usr/local/etc/php/conf.d/
COPY ./src /var/www/html/
COPY ./src/.env.dev /var/www/html/.env
COPY --from=build /usr/bin/composer /usr/bin/composer
RUN composer install --prefer-dist --no-interaction
USER ${USERNAME}

FROM php:8.2-fpm-alpine as production

# ARG UID
# ARG GID
# ARG USERNAME
# ENV UID=${UID}
# ENV GID=${GID}
# ENV USERNAME=${USERNAME}


#RUN addgroup -g ${GID} --system ${USERNAME}
#RUN adduser -G ${USERNAME} --system -D -s /bin/sh -u ${UID} ${USERNAME}


#RUN sed -i "s/user = www-data/user = ${USERNAME}/g" /usr/local/etc/php-fpm.d/www.conf
#RUN sed -i "s/group = www-data/group = ${USERNAME}/g" /usr/local/etc/php-fpm.d/www.conf


RUN docker-php-ext-install pdo pdo_mysql
#COPY ./src /var/www/html

COPY .env.prod /var/www/html/.env
COPY ./src/php.ini /usr/local/etc/php/conf.d/
#RUN composer install --prefer-dist --no-dev --optimize-autoloader --no-interaction


RUN apk add --update supervisor
COPY --from=build /app /var/www/html
RUN php artisan config:cache && \
     php artisan route:cache 
COPY ./supervisor/laravel-worker.conf /etc/supervisor/conf.d/
RUN mkdir -p "/etc/supervisor/logs"
RUN chown -R www-data:www-data /var/www/html/storage
RUN chmod -R 755 /var/www/html/storage

#RUN chown ${USERNAME} /etc/supervisor/logs
#RUN chown  ${USERNAME} -R /var/www/html/storage/

#RUN supervisord --configuration /etc/supervisor/conf.d/laravel-worker.conf

#CMD php-fpm && supervisord --configuration /etc/supervisor/conf.d/laravel-worker.conf 












