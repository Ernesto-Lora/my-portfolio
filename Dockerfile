# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --production

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
