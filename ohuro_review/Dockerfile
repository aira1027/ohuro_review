FROM node:10.15.3-alpine

#working directory
WORKDIR /usr/src/app

RUN apk update && \
    npm install -g npm @vue/cli

RUN npm install vue bootstrap-vue bootstrap

# COPY ./scripts/docker.start.sh /scripts/start.sh

# RUN chmod +x /scripts/*

# ENTRYPOINT [ "/scripts/start.sh" ]
