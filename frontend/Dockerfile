# Use an official Node.js runtime as the base image
FROM node:21-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Debug step to check if package.json is copied correctly
RUN ls -la /app

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# # Install Python and pip
# RUN apk add --no-cache python3 py3-pip

# # Create a virtual environment and activate it
# RUN python3 -m venv /venv
# ENV PATH="/venv/bin:$PATH"

# # Install the AWS CLI within the virtual environment
# RUN pip install awscli

# Build the React application
RUN npm run build

# Add your AWS credentials (note: environment variables should be managed securely)
ENV AWS_ACCESS_KEY_ID=AKIAVRUVQRBVKN6SQ6VM
ENV AWS_SECRET_ACCESS_KEY=PVflvTmoovd6GHpEY2zfVrr8Qt0SCV3vGTOHHT5H
ENV AWS_DEFAULT_REGION=us-east-1

# Sync build directory to S3 (as an example, not recommended for production)
RUN aws s3 sync build/ s3://adg429.com --delete

# Install a lightweight HTTP server to serve the React app
RUN npm install -g serve

# Expose the application port (Nginx will handle this in production)
# EXPOSE 3000

# Start the application (commented out since Nginx will serve the app)
# CMD ["serve", "-s", "build", "-l", "3000"]
