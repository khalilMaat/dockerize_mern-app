#base image
FROM node:18-alpine

#echo
RUN echo 'Hello from Frontend Dockerfile'

#working directory
WORKDIR /app

#Owner
MAINTAINER khalil maatoug

COPY package*.json ./

RUN npm install

COPY . .

#ports your application is listening on
EXPOSE 3000

CMD ["npm","start"]