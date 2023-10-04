FROM node:latest

COPY . /home/app

# COPY index.js /home/app/index.js
# COPY package.json /home/app/package.json

WORKDIR /home/app

RUN npm install

EXPOSE 9000 

CMD ["node", "index"]