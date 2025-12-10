FROM node:22-slim

WORKDIR /app

COPY package.json ./

RUN corepack enable && \
    echo "nodeLinker: node-modules" > .yarnrc.yml

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]
