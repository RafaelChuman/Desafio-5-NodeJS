FROM node
ENV NODE_ENV=production
WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3333
RUN chown -R node /usr/src
USER node
CMD ["npm", "run", "dev"]
