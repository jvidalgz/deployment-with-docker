FROM mongo:3

# Asegura que está completamente actualizado
RUN apt-get update -q && \
    apt-get dist-upgrade -y && \
    apt-get clean && \
    apt-get autoclean
