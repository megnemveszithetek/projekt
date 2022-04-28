// const bcrypt = require('bcrypt');
// const localStrategy = require('passport-local').Strategy;


// function initialize(passport, client, req, res) {
//     const authenticateUser = async (email, pass, done) => {
//         client.connect(err => {
//             collection = client.db("FitnessApp").collection("Users");
//             email = collection.find({ email: req.body.email }),
//                 (error, user) => {
//                     if (error) {
//                         return done(error);
//                     }
//                     if (user.length == 0) {
//                         return done(null, false, { message: "Nincs ilyen felhasználó!" })
//                     }
//                     user = collection.find({ email: req.body.email })
//                     if (jelszoEllenorzes(pass, user.pass)) {
//                         return done(null, user);
//                     } else {
//                         return done(null, false, { message: "Hibás jelszó!" });
//                     }
//                 }

//         });

//     }
//     passport.use(new localStrategy({ emailField: 'email' }, authenticateUser));
//     passport.serializeUser((user, done) => { done(null, user.id) });
//     passport.deserializeUser((id, done) => {
//         conn.query("select * from users where id=?", [id], (error, rows) => {
//             if (error) {
//                 return done(error);
//             } else {
//                 return done(null, rows[0]);
//             }

//         });
//     });


// }

// async function jelszoEllenorzes(pass, secretPass) {
//     try {
//         if (await bcrypt.compare(pass, secretPass)) {
//             return true;
//         } else {
//             return false;
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = initialize;

const passport = require('passport'),
    Strategy = require('passport-local').Strategy

// Local Strategy
passport.use(new Strategy((email, pass, done) => {
    User.findOne({ email: email }, (err, user) => {

        // If any error
        if (err) { return done(err) }

        // If no user found
        if (!user) {
            return done(null, false, {
                message: 'No user found.'
            })
        }

        // Password not matched
        if (user.pass != pass) {
            return done(null, false, {
                message: 'Password not matched.'
            })
        }

        return done(null, user)
    })
}))

// Session
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        if (err) { return done(err) }
        done(null, user)
    })
})

module.exports = passport