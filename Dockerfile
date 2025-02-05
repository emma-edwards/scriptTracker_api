FROM node:22.13.1

ARG NODE_ENV=development
ARG PORT=443

ENV NODE_ENV $NODE_ENV
ENV PORT $PORT

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY api ./api

WORKDIR /app/api

EXPOSE $PORT

CMD ["node", "api.js"]