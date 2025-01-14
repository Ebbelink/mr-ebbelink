### STAGE 1: Build ###
FROM node:12 AS build
WORKDIR /app
COPY package.json yarn.lock ./
# RUN npm install
RUN yarn install
COPY . .
# RUN $(npm bin)/ng build --prod
RUN yarn build --prod

RUN ls -la /app

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/frontend /usr/share/nginx/html