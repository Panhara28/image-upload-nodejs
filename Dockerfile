FROM node:12

WORKDIR /app

COPY package.json .

COPY . ./

ENV PORT 3000

EXPOSE $PORT

CMD ["node", "index.js"]