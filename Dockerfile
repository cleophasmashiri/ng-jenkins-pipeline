FROM node:20.11
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 4200
CMD npm start
