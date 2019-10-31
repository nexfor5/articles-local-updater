FROM node:latest
RUN npm install @angular/cli@8.3.15 -g --silent

WORKDIR /usr/project
COPY server /usr/project/server
COPY client /usr/project/client

WORKDIR /usr/project/server
RUN npm install --silent && mkdir dist && npx tsc

WORKDIR /usr/project/client
RUN npm install --silent && ng build --prod

WORKDIR /usr/project/server
EXPOSE 3000
CMD ["node", "./dist/server.js"]