const {Pool} = require('pg');

//note: all following variables should be taken from the environament
//but are hardwired replace 
module.exports = new Pool({
    host: process.env.DATABASE_HOST, // or wherever the db is hosted
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT),

   // connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
});