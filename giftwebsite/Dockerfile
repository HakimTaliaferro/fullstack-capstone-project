# Use Node.js LTS version
FROM node:18-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install server dependencies (for Express)
COPY package*.json ./
RUN npm install --production

# Copy everything (including build/ directory)
COPY . .

# Expose the app port
EXPOSE 9000

# Start the Express server
CMD ["node", "index.js"]
