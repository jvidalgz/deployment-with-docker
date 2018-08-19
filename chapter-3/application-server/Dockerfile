FROM node:8

# Asegura que está actualizado
RUN apt-get update -q && \
apt-get dist-upgrade -y && \
apt-get clean && \
apt-get autoclean

# puerto de contenedor a exponer
EXPOSE 8000

# Configura variables
ENV SRV_PATH /usr/local/share/word_test

# Crea directorio
RUN mkdir -p $SRV_PATH && \
chown node:node $SRV_PATH

WORKDIR $SRV_PATH

USER node

COPY . $SRV_PATH

RUN npm install

CMD ["npm", "start"]
