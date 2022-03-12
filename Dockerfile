FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src ./

EXPOSE 2100

CMD [ "npm", "run", "dev" ]
