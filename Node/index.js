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
app.listen(3000, () => { console.log("A szerver fut") });


function getClient() {
    const uri = "mongodb+srv://asd:asd@fitnessapp.bn3xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
}
const client = getClient();
initializePassport(passport, client);
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
    res.render('index.ejs', { username: req.user.username });
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


app.get('/users', (req, res) => {
    client.connect(async (err) => {
        const collection = client.db("FitnessApp").collection("Users");
        // perform actions on the collection object
        const users = await collection.find().toArray();
        res.send(users);
        client.close();
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



// app.get('/login', bodyParser.json(), async (req, res) => {
//     const client = getClient();
//     client.connect(async (err) => {
//         const collection = client.db("FitnessApp").collection("Users");
//         const user = await collection.find({ email: req.body.email }).toArray();
//         res.send(user);

//         client.close();
//     });
// });

app.post('/login', checkNotAuth, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));



app.get('/user/:email', (req, res) => {
    client.connect(async (err) => {
        const collection = client.db("FitnessApp").collection("Users");
        // perform actions on the collection object
        const user = await collection.find({ email: req.params.email }).toArray();
        res.send(user.pass);
        
        client.close();
    });
});
