FROM node:20 AS development

#  Navigate to the container working directory
WORKDIR /usr/src/app/src-BE
COPY . .
#  Copy package.json
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

EXPOSE 3000

RUN cd apps/src-BE
RUN npm run build
