const { Client } = require("pg");
const dotenv = require("dotenv").config();

const database = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

const initDatabase = () => {
    database.connect();
    console.log("Database connected!");

    database.query(`
    CREATE TABLE IF NOT EXISTS "users" (
        "user_id" SERIAL,
        "username" VARCHAR(255) NOT NULL,
        "password" VARCHAR(255) NOT NULL,
        PRIMARY KEY ("user_id")
    );`)

    database.query(`
    CREATE TABLE IF NOT EXISTS "suppliers" (
        "company_id" SERIAL,
        "company_name" VARCHAR(255) NOT NULL,
        PRIMARY KEY ("company_id")
    );`)

    database.query(`
    CREATE TABLE IF NOT EXISTS "items" (
        "item_id" SERIAL,
        "supplier_id" INTEGER NOT NULL REFERENCES suppliers(company_id),
        "item_name" VARCHAR(255) NOT NULL,
        PRIMARY KEY ("item_id")
    );`)
}

module.exports = { initDatabase, database };