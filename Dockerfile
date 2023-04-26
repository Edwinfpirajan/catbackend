FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
RUN npm run build
COPY . .
EXPOSE 8080
CMD ["npm", "start"]