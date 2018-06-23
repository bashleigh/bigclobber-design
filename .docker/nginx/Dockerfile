FROM nginx:latest

COPY hosts/default.conf /etc/nginx/sites-available/default

COPY config/nginx.conf /etc/nginx/nginx.conf

RUN mkdir /etc/nginx/sites-enabled

RUN ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/

RUN chmod a+w /var/log/nginx/*.log

RUN chmod a+w /var

RUN rm -f /var/log/nginx/*