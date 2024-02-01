FROM node:20 AS development

#  Navigate to the container working directory
WORKDIR /usr/src/app/src-FE

COPY . .
RUN npm install -g pnpm
RUN npm install -g turbo
RUN pnpm install --filter="@nesting/src-fe"
EXPOSE 8080
RUN turbo run build --scope='@nesting/src-fe'
