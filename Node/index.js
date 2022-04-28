const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const initializePassport = require('./passport-config');
const { MongoClient, ServerApiVersion } = require('mongodb');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: "titok",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view-engine', 'ejs');
app.use(cors());
app.use(express.json({ extended: true }));
app.listen(4000, () => { console.log("A szerver fut") });


function getClient() {
    const uri = "mongodb+srv://asd:asd@fitnessapp.bn3xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
}
const client = getClient();
//initializePassport(passport, client);
const bodyParser = require("body-parser");


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

app.get('/', checkAuth, (req, res) => {
    res.render('index.ejs', { email: req.user.email });
});

app.get('/vedett', checkAuth, (req, res) => {
    res.send("Védett erőforrás");
});

app.get('/register', checkNotAuth, (req, res) => {
    res.render('reg.ejs');
});

app.get('/login', checkNotAuth, (req, res) => {
    res.render('login.ejs');
});

app.use(
    session({
        key: "userId",
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 30
        },
    })
);

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const client = getClient();
    client.connect(function (err, db) {
        if (err) throw err;
        var dbo = db.db("FitnessApp");
        var query = { email: email };
        dbo.collection("Users").find(query).toArray(function (err, result) {
            if (err) throw err;
            if (result == "") {
                res.send("Nincs ilyen felhasználó");
            } else {
                bcrypt.compare(pass, result[0].pass, function (err, isValidPass) {
                    if (isValidPass == true) {
                        res.send("Sikeres bejelentkezes")
                        client.connect(async (err) => {
                            const collection = client.db("FitnessApp").collection("Users");
                            const user = await collection.find({ email: req.body.email }).toArray();
                            req.session.user = result;
                        });
                    } else {
                        res.send("Sikertelen bejelentkezes")
                    }
                })
            }

            db.close();
        });
    });
});

app.post('/register', bodyParser.json(), async (req, res) => {
    try {
        const secretPass = await bcrypt.hash(req.body.pass, 10);
        const newUser = {
            vnev: req.body.vnev,
            knev: req.body.knev,
            email: req.body.email,
            pass: secretPass,
            szuldatum: req.body.szuldatum,
            neme: req.body.neme,
            magassag: '',
            diet: [],
            goal: '',
            permission: "user",
            trainingplan: []
        }

        const client = getClient();
        client.connect(async (err) => {
            const collection = client.db("FitnessApp").collection("Users");
            const result = await collection.insertOne(newUser);
            if (!result.insertedCount) {
                res.send("A regisztráció sikeres");
                return;
            }
            res.send(users);
            client.close();
        });
    } catch (error) {
        console.log(error);
    }
});
