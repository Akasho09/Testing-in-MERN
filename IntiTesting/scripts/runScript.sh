#!/bin/bash
set -e

# Start Postgres with Docker
docker compose up -d

echo "🟡 - Waiting for database to be ready..."
./scripts/wait-for-it.sh localhost:5432 -- echo "✅ Database is ready!"

# Run Prisma migrations
npx prisma migrate dev --name init

# Run tests
npm run test 

# Shut down containers
docker compose down 