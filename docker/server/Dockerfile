FROM node:14.17-alpine

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

COPY package.json ./
COPY package-lock.json ./

RUN npm install


COPY . .

RUN cp .env.example .env

EXPOSE 3000

CMD ["npm", "run", "start"]