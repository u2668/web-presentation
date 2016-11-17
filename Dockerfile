FROM nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY ./site /usr/share/nginx/html

EXPOSE 80