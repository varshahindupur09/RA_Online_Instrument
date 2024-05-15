# Use an official Node.js runtime as the base image
FROM node:21-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a lightweight HTTP server to serve the React app
RUN npm install -g serve

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]