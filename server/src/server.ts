//import * as express from "express";
import express from "express";
import cors from "cors";
import pool from '../db.mjs';  // Import the ES module version of db


const PORT = process.env.PORT ?? 8000;

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/todos/:userEmail", async (req, res) => {
    const { userEmail } = req.params

    try {
        const todos = await pool.query("SELECT * FROM todos WHERE user_email = $1", [userEmail])
        res.json(todos.rows)
    } catch (err) {
        console.error(err)
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});