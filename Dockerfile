# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle the app source inside the Docker image
COPY . .

# Expose port 8080 to have it mapped by Docker daemon
EXPOSE 8080

# Define the command to run the application
CMD [ "npm", "start" ]
