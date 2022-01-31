const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const app = express();
const { login, register } = require('./dbrepo');

const conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "fitneszapp"

    });


app.use(cors());


app.use(express.json({ extended: true }));

app.listen(3000, () => { console.log("Server running") });


app.get('/login', async (req, res) => {
    login(conn)
        .then(results => res.json(results))
        .catch(err => res.send(err));
});

app.post('/register', async (req, res) => {
    register(conn, req.body)
        .then(results => res.json(results))
        .catch(err => res.send(err));
});