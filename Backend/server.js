const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'studygambling'
})

app.get('/', (re, res)=> {
    return res.json("lol fucker");
})

app.get('/users', (req,res) =>{
    const sql = "SELECT * FROM users"
    db.query(sql, (err, data)=> {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8008, ()=>{
    console.log("listening");
})