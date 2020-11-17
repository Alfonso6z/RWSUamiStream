FROM node:14

WORKDIR /app/node-uami

COPY . .

RUN npm install -g typescript
RUN npm install
RUN npm run build

CMD ["npm","start"]