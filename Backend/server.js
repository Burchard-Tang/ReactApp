const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'studygambling'
})

app.get('/', (re, res)=> {
    return res.json("ho");
})

app.post('/users', (req, res) => {
    const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
    db.query(sql, [req.body.name, req.body.password], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length > 0) return res.json("Real User");
        return res.status(401).json("Invalid credentials");
    });
});

app.put('/create', (req, res) => {
    const sql = 'INSERT INTO users (id, name, password, points) VALUES (0, ?, ?, 0)';
    db.query(sql, [req.body.name, req.body.password], (err, result) => {
        if (err) return res.json("welp");
        return res.json("added");
    })
});

app.listen(8081, () => {
    console.log("listening");
});