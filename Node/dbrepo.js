module.exports.login = function (conn) {
    return new Promise((reject, resolve) => {
        conn.query("select * from felhasznalo", (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }

        });
    });
}

module.exports.register = function (conn, felhasznalo) {
    return new Promise((reject, resolve) => {
        conn.query("INSERT INTO felhasznalo(id, vnev, knev, email, pass, szuldatum, neme, magassag, loggedin) VALUES (0,?,?,?,?,?,?,?,false)", [felhasznalo.vnev, felhasznalo.knev, felhasznalo.email, felhasznalo.pass, felhasznalo.szuldatum, felhasznalo.neme, felhasznalo.magassag], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: "Adat módosítva", status: "201" });
            }

        });
    });
}