FROM node:20 AS development

#  Navigate to the container working directory
WORKDIR /usr/src/app/src-BE
COPY . .
#  Copy package.json
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

EXPOSE 8080

RUN cd apps/src-FE
RUN npm run build
