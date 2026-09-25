FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the root package.json
COPY package.json ./

# Copy the frontend and backend package.json files
COPY frontend/package*.json frontend/
COPY backend/package*.json backend/

# Install dependencies for both frontend and backend
# We use the root script or run npm install in both directories
RUN npm install --prefix backend && npm install --prefix frontend

# Copy the rest of the application code
COPY . .

# Declare build arguments provided by Render
ARG VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY

ARG VITE_STREAM_API_KEY
ENV VITE_STREAM_API_KEY=$VITE_STREAM_API_KEY

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Build the frontend using the root build script (or just prefix)
RUN npm run build --prefix frontend

# Set environment variable to serve statically in production
ENV NODE_ENV=production

# Expose the backend port
EXPOSE 3000

# Start the server using the root package.json start script
CMD ["npm", "start"]
