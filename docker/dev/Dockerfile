# Use the official Node.js image as our base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of our app's source code into the container
COPY . .

EXPOSE 5501

CMD ["npm", "run", "dev"]