# How to Run the Project (Mac Only)

## Setup .env

```
PORT=3000

DB_USER=cchal_user
DB_HOST=localhost
DB_NAME=cchal_db
DB_PASS=cchalpassword
DB_PORT=5432
```

## Initialize DB

Assuming Postgres is setup

`psql -U cchal_user -d cchal_db -f db-init.sql`