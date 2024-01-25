FROM node:20 AS development

#  Navigate to the container working directory
WORKDIR /usr/src/app
#  Copy package.json
COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000

RUN npm run build
