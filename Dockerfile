
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV VITE_TMDB_URL=$VITE_TMDB_URL \
    VITE_TMDB_KEY=$VITE_TMDB_KEY

CMD ["npm", "run", "dev"]