#base image
FROM node:18-alpine

#echo
RUN echo 'Hello from Backend Dockerfile'

#Owner
MAINTAINER Khalil maatoug

#work dir in container
WORKDIR /app

#copy file to /app
COPY package*.json ./

#install node modules
RUN npm install

#copy all file to /app
COPY . .

#expose port 
EXPOSE 9000

#run application
CMD ["npm","run","dev"]