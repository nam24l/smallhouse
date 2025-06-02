# Use lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy the rest of the app
COPY . .

# Set environment variable for hot reload
ENV CHOKIDAR_USEPOLLING=true

# Expose Vite's default port
EXPOSE 5173

# Run Vite dev server
CMD ["yarn", "dev"]
