FROM node:9-alpine
WORKDIR /apps
ADD dist /apps/dist
ADD server /apps/server
ADD package.json /apps
RUN yarn install

ENV LISTENING_PORT 80

CMD ["node", "server"]
