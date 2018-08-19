FROM nginx:latest

# Asegura que imagen esté completamente actualizada
RUN apt-get update -q && \
    apt-get dist-upgrade -y && \
    apt-get install openssl && \
    apt-get clean && \
    apt-get autoclean

# Configura variables
ENV SRV_PATH /srv/www/html

# Define variable para password
ARG PASSWORD=test

# Remueve configuracion default
RUN rm /etc/nginx/conf.d/default.conf

# Cambia propietario de archivos copiados
RUN mkdir -p $SRV_PATH && \
    chown nginx:nginx $SRV_PATH

# Configura archivo de autenticación
RUN printf "user:$(openssl passwd -crypt $PASSWORD)\n" >> $SRV_PATH/.htpasswd

# Agrega configuración propia
COPY nginx_main_site.conf /etc/nginx/conf.d/
