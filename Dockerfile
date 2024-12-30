# Stage 1: Install dependencies
FROM node:18.18.0 as deps

WORKDIR /app

# Install dependencies only
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2: Build the application
FROM node:18.18.0 as builder

WORKDIR /app

# Copy dependencies from the previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 3: Production image
FROM node:18.18.0 as runner

WORKDIR /app

# Set NODE_ENV to production for performance optimization
ENV NODE_ENV=production

# Copy build output and dependencies
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "start"]
