# Stage 1: Build Angular application
FROM node:latest as builder

RUN mkdir -p /app
WORKDIR /app



# Copy the built Angular app from the previous stage to the Apache server directory
COPY . .

RUN npm install
RUN npm install sweetalert2
RUN npm run build --prod

CMD ["npm","start"]