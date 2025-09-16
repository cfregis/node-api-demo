# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app


# Copy package.json and package-lock.json (if present) to the working directory
# COPY package*.json ./

# Install application dependencies
# RUN npm install

# Copy the rest of the application code to the working directory
COPY . .
RUN npm run build

# Expose the port your Node.js application listens on
EXPOSE 8087

# Define the command to run when the container starts
CMD ["node", "/usr/src/app/dist/main.js"]