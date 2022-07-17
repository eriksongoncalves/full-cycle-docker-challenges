FROM node:16-alpine as build

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .
COPY src ./src

RUN npm install --production


FROM node:16-alpine

WORKDIR /usr/app

COPY --from=build /usr/app .

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
	&& tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
	&& rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

CMD ["npm", "start"];
