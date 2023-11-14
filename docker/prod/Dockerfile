# Stage 1: Build
FROM node:18-alpine as builder
WORKDIR /server
COPY package*.json ./

# Install dependencies, including TypeScript (tsc) and any other build tools
RUN npm ci

# Copy the rest of the code
COPY . .

# Compile TypeScript into JavaScript
RUN npm run build

# Stage 2: Production environment
FROM node:18-alpine as production

ENV NODE_ENV=production

WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --ignore-scripts
# --omit=dev

# Copy the compiled JavaScript from the previous stage
COPY --from=builder /server/dist ./

# Expose the port the app runs on
EXPOSE 5500

# Command to run the application
CMD ["node", "src/server.js"]
