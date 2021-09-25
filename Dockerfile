FROM node:16.8

WORKDIR /app
COPY . .

ADD node_svelte.config.js svelte.config.js

RUN apt-get update
RUN apt-get install npm -y
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm build

WORKDIR /app/build

CMD [ "node", "./index.js" ]