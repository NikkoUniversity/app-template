FROM node:16

WORKDIR /usr/src/swize-sso-service

COPY package.json ./
COPY yarn.lock ./

COPY . .

RUN yarn install --production=true && yarn add typescript -g

RUN NODE_OPTIONS="--max-old-space-size=2048" yarn build

EXPOSE 3000

CMD ["yarn", "start"]
