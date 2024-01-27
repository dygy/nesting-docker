FROM node:20 AS development

#  Navigate to the container working directory
WORKDIR /usr/src/app/src-FE
COPY . .
#  Copy package.json
COPY package*.json ./
RUN npm install -g pnpm
RUN npm install -g turbo
RUN cd apps/src-FE
RUN pnpm --filter @nesting/src-fe install

EXPOSE 8080

RUN cd apps/src-FE
RUN turbo run build --scope='@nesting/src-fe'
