# base image
FROM node:13.6.0-alpine3.11

#also say
WORKDIR /app/
#copy the react app to the container
COPY . /app/

# #prepare the contiainer for building react
RUN npm install --silent
