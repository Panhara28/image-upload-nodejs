FROM node:12

WORKDIR /app

COPY package.json .

RUN npm install

COPY . ./

ENV PORT 80

EXPOSE $PORT

CMD ["npm", "run", "dev"]