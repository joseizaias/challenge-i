FROM node:16-slim

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD sh -c "npm rebuild esbuild && npm run dev"

