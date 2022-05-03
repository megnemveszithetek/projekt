const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const initializePassport = require('./passport-config');
const { MongoClient, ServerApiVersion } = require('mongodb');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const request = require('request');
const cookieParser = require("cookie-parser");
const NodeCache = require('node-cache');
app.use(cookieParser());
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

const oneDay = 1000 * 60 * 60 * 24;
app.use(
    session({
        key: "userId",
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: oneDay
        }
    })
);
const myCache = new NodeCache({ stdTTL: 3600 });



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
                            console.log(req.body.email);
                            const email = req.body.email;
                            myCache.mset({ email });
                            console.log(myCache);
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

app.get('/admin', (req, res) => {
    if (req.session) {
        console.log(req.session);
    } else {
        console.log("nincs kuki")
    }

});

app.post('/register', async (req, res) => {
    try {
        const secretPass = await bcrypt.hash(req.body.pass, 10);
        const newUser = {
            vnev: req.body.vnev,
            knev: req.body.knev,
            email: req.body.email,
            pass: secretPass,
            szuldatum: req.body.szuldate,
            neme: req.body.neme,
            height: '',
            weight: [],
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

app.get('/bmi', checkNotAuth, (req, res) => {
    console.log(req.session);
    res.send(req.session);
    res.render('bmi.ejs');
});

app.post('/bmi', async (req, res) => {
    // const client = getClient();
    // client.connect(async (err) => {
    //     const collection = client.db("FitnessApp").collection("Users");
    //     const user = await collection.Find(req.session);
    //     const age = Date.now() - user.szuldatum;
    //     console.log(age)
    // });
    console.log(req.session);
    res.send(req.session.user.szuldatum);
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bmi',
        qs: { age: req.body.age, weight: req.body.weight, height: req.body.height },
        headers: {
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            'X-RapidAPI-Key': '4f7ec25b8dmsh664fdddf3cc4417p163fb0jsn3c165733c8fa',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
        console.log(body);
    });
});

app.get('/calorie', checkNotAuth, (req, res) => {
    res.render('calorie.ejs');
});


app.post('/calorie', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        qs: { query: req.body.etel },
        headers: {
            'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
            'X-RapidAPI-Key': '6642b87dd1mshab0be50d3032e18p104816jsn9d41651da248',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
});
app.get('/recipe', checkNotAuth, (req, res) => {
    res.render('recipe.ejs');
});


app.post('/recipe', async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://edamam-recipe-search.p.rapidapi.com/search',
        qs: { q: req.body.recipe },
        headers: {
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
            'X-RapidAPI-Key': '6642b87dd1mshab0be50d3032e18p104816jsn9d41651da248',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
});

app.get('/Body-Fat-Percentage', checkNotAuth, (req, res) => {
    res.render('Body-Fat-Percentage.ejs');
});


app.post('/Body-Fat-Percentage', async (req, res) => {
    console.log(
        req.body.age,
        req.body.gender,
        req.body.weight,
        req.body.height,
        req.body.neck,
        req.body.waist,
        req.body.hip
    )
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
        qs: {
            age: req.body.age,
            gender: req.body.gender,
            weight: req.body.weight,
            height: req.body.height,
            neck: req.body.neck,
            waist: req.body.waist,
            hip: req.body.hip
        },
        headers: {
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com',
            'X-RapidAPI-Key': '4f7ec25b8dmsh664fdddf3cc4417p163fb0jsn3c165733c8fa',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
        console.log(body);
    });
});