FROM node:8

# Asegura que está completamente actualizado
RUN apt-get update -q && \
    apt-get dist-upgrade -y && \
    apt-get clean && \
    apt-get autoclean

# Expone puerto
EXPOSE 8000

ENV SRV_PATH  /usr/local/share/queue_handler

# Crea directorio
RUN mkdir -p $SRV_PATH && \
    chown node:node $SRV_PATH

WORKDIR $SRV_PATH

USER node

COPY . $SRV_PATH

RUN npm install

CMD ["npm", "start"]
