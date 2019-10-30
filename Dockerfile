FROM node:latest
RUN npm install @angular/cli@latest -g --silent

WORKDIR /usr/src/app
COPY ./server/* /usr/src/app/server/
COPY ./client/* /usr/src/app/client/

WORKDIR /usr/src/app/client
RUN npm install --silent
RUN ls /usr/src/app/client/src
RUN ng build

WORKDIR /usr/src/app/server
RUN npm install --silent
RUN npx tsc
EXPOSE 3000
CMD ["node", "./dist/server.js"]