FROM node:20 AS development

#  Navigate to the container working directory
WORKDIR /usr/src/app/src-BE

COPY . .
RUN npm install -g pnpm
RUN npm install -g turbo
RUN pnpm install --filter="@nesting/src-be"
EXPOSE 3000
RUN turbo run build --scope='@nesting/src-be'
