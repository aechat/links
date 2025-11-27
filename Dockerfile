FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN corepack enable && \
    echo "nodeLinker: node-modules" > .yarnrc.yml && \
    yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]
