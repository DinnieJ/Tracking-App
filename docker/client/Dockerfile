FROM node:14.17-alpine

RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

COPY package.json ./
COPY package-lock.json ./

RUN npm install


COPY . .

RUN cp .env.example .env

EXPOSE 8080

CMD ["npm", "run", "start"]