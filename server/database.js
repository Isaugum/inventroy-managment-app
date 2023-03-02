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
    );`);

    

    database.query(`
    CREATE TABLE IF NOT EXISTS "suppliers" (
        "company_id" SERIAL,
        "company_name" VARCHAR(255) NOT NULL,
        PRIMARY KEY ("company_id")
    );`);

    

    database.query(`
    CREATE TABLE IF NOT EXISTS "items" (
        "item_id" SERIAL,
        "supplier_id" INTEGER NOT NULL REFERENCES suppliers(company_id) ON DELETE CASCADE,
        "item_name" VARCHAR(255) NOT NULL,
        PRIMARY KEY ("item_id")
    );`);

    

    database.query(`
    CREATE TABLE IF NOT EXISTS "received_items" (
        "item_id" SERIAL,
        "receive_id" INTEGER,
        "supplier_id" INTEGER NOT NULL REFERENCES suppliers(company_id) ON DELETE CASCADE,
        "item_name" VARCHAR(255) NOT NULL,
        "quantity" NUMERIC(5,2) NOT NULL,
        "units" VARCHAR(10) NOT NULL,
        "date" VARCHAR(20) NOT NULL,
        PRIMARY KEY ("item_id")
    );`);

    

    database.query(`
    CREATE TABLE IF NOT EXISTS "write_off" (
        "item_id" SERIAL,
        "writeoff_id" INTEGER,
        "supplier_id" INTEGER NOT NULL REFERENCES suppliers(company_id) ON DELETE CASCADE,
        "item_name" VARCHAR(255) NOT NULL,
        "quantity" NUMERIC(5,2) NOT NULL,
        "units" VARCHAR(10) NOT NULL,
        "date" VARCHAR(20) NOT NULL,
        PRIMARY KEY ("item_id")
    );`);

    database.query(`
    CREATE TABLE IF NOT EXISTS "messages" (
        "message_id" SERIAL,
        "post_id" INTEGER,
        "post_title" VARCHAR(50),
        "post_content" TEXT,
        "date" VARCHAR(20) NOT NULL,
        PRIMARY KEY ("message_id")
    );`)
}

module.exports = { initDatabase, database };