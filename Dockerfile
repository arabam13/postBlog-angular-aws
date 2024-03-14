FROM node:alpine3.18 as build

# Declare built-in environment variables
ARG API_URL

# Set default values for environment variables
ENV API_URL=$API_URL

# Build App
WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
RUN npm install -g @angular/cli
RUN pnpm install
COPY . .
RUN ng build --prod

# Serve with Nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/dist/client/browser .
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]