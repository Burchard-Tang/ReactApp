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
})

const dbSql = 'CREATE DATABASE IF NOT EXISTS studygambling'; 
const dbName = 'studygambling';

db.query(dbSql, (err)=>{
    if (err) {
    console.log('error in creating database', err);
    return;
    }

    console.log('created database');

    db.changeUser({database: dbName}, (err) => {
        if (err){
            console.log('didnt change')
            return;
        }

        const tableSql = 'CREATE TABLE IF NOT EXISTS users (id INT(50) NOT NULL AUTO_INCREMENT , name VARCHAR(50) NOT NULL , password VARCHAR(50) NOT NULL , points INT(50) NOT NULL , PRIMARY KEY (id)) ENGINE = InnoDB';

        db.query(tableSql, (err) => {
            if (err){
                console.log('table wrongs')
            return;
            }
            console.log('table right')
        })
    })
  })

app.get('/', (req, res)=> {
    console.log("hi");
    return res.json("this is the server");
});

app.post('/verifyuser', (req, res) => {
    console.log("verifyinguser");

    const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
    db.query(sql, [req.body.name, req.body.password], (err, rows) => {
        if (err) {return res.status(500).json({ success: false, message: "Internal server error" })};
        if (rows.length > 0) {return res.json ({success:true, user:rows[0]})};
        return res.status(401).json({ success: false, message: "Invalid Credentials" })
    });
});

app.put('/create', (req, res) => {
    const sql = 'INSERT INTO users (name, password, points) VALUES (?, ?, 0)';
    db.query(sql, [req.body.name, req.body.password], (err) => {
        if (err) return res.json("welp");
        return res.json("added");
    });
});

app.delete('/deleteuser', (req, res) => {
    
})

app.listen(8081, () => {
    console.log("listening");
});