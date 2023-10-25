# SCRIPTS
npm run dev

# Docker container
docker-compose up -d postgres
docker-compose ps
docker-compose down
docker-compose exec postgres bash

# Postgres
psql -h localhost -d my_tasks -U fran
\d+
\q
exit

# Pgadmin
docker ps
docker inspect id
