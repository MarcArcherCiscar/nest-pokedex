# 1. Install dependencies (including dev) with npm
FROM node:20.19.0-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# para entender por qué podría necesitarse libc6-compat.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./

# npm ci instala exactamente lo definido en el lockfile
RUN npm ci

# 2. Build the app
FROM node:20.19.0-alpine AS builder
WORKDIR /app

# Reutilizamos node_modules instalados
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Ejecutamos el build
RUN npm run build

# 3. Runtime image: sólo prod deps + artefactos de build
FROM node:20.19.0-alpine AS runner
# Set working directory
WORKDIR /usr/src/app

# Copiamos de nuevo package*.json para npm ci en prod
COPY package.json package-lock.json ./

# Instalamos sólo dependencias de producción
RUN npm ci --only=production

# Copiamos los ficheros compilados
COPY --from=builder /app/dist ./dist

# # Copiar el directorio y su contenido
# RUN mkdir -p ./pokedex
#
# COPY --from=builder ./app/dist/ ./app
# COPY ./.env ./app/.env
#
# # Dar permiso para ejecutar la aplicación
# RUN adduser --disabled-password pokeuser
# RUN chown -R pokeuser:pokeuser ./pokedex
# USER pokeuser
#
# EXPOSE 3000

# Command por defecto
CMD ["node", "dist/main"]