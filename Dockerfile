# syntax=docker/dockerfile:1

FROM node:22-alpine AS frontend-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM frontend-deps AS frontend-build
COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src
RUN npm run build

FROM node:22-alpine AS backend-deps
WORKDIR /app/backend
ENV NODE_ENV=production
COPY backend/package*.json ./
RUN npm ci --omit=dev

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5000

COPY --from=backend-deps --chown=node:node /app/backend/node_modules ./backend/node_modules
COPY --chown=node:node backend ./backend
COPY --from=frontend-build --chown=node:node /app/dist ./dist

USER node
EXPOSE 5000
CMD ["npm", "start", "--prefix", "backend"]
