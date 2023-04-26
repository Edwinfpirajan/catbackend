FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
RUN npm run build
COPY . .
EXPOSE $PORT
CMD ["npm", "start"]