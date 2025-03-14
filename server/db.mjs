import pg from 'pg';  // Import the entire pg module
import 'dotenv/config';  // Import dotenv configuration

const { Pool } = pg;  // Destructure Pool from the pg module

const pool = new Pool({
  user: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: 'todoapp',
});

export default pool;  // ES module export