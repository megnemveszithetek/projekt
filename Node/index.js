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
    }
);


app.use(cors());
app.use(express.json({ extended: true }));
app.listen(3000, () => { console.log("Server running") });

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

function checkNotAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}

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
app.post('/register', checkNotAuth, async (req, res) => {
    try {
        //sózás
        //const salt=await bcrypt.genSalt();
        const titkosJelszo = await bcrypt.hash(req.body.pass, 10);

        const newUser = {
            vnev: req.body.vnev,
            knev: req.body.knev,
            email: req.body.email,
            password: titkosJelszo,
            szuldatum: req.body.szuldatum,
            neme: req.body.neme,
            magassag: req.body.magassag
        }
        //szükséges lenne a felhasználói név létezésének
        //ellenőrzése, valamint a jelszó ellenőrzése
        regisztracio(conn, newUser).then(valasz => valasz.json());
        res.redirect('/login');

    } catch (error) {
        console.log(error);
    }

});