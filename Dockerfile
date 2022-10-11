FROM node:12.13.1 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm i vue-simple-alert
RUN npm run serve

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
 COPY nginx.conf /etc/nginx/nginx.conf 
