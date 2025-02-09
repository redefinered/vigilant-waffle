FROM node:22.13.1-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .

RUN apk add --no-cache postgresql-client
CMD ["sh", "-c", "export PGPASSWORD=$DB_PASS && until pg_isready -h cchal-postgresql -U $DB_USER; do sleep 2; done && psql -h cchal-postgresql -U $DB_USER -d $DB_NAME -f db-init.sql && node index.js"]

EXPOSE 3000

