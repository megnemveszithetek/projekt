function ablakok() {
  kozepre("bejelentablak");
  kozepre("jelszocsere");
  kozepre("regisztracio");
  kozepre("kijelentablak");
  kozepre("profil");
}

function kozepre(mit) {
  var x = window.innerWidth;
  var y = window.innerHeight;
  document.getElementById(mit).style.left =
    (x - document.getElementById(mit).offsetWidth) / 2 + "px";
  document.getElementById(mit).style.top =
    (y - document.getElementById(mit).offsetHeight) / 2 + "px";
}

function nyit(mit) {
  document.getElementById(mit).style.visibility = "visible";
}

function zar(mit) {
  document.getElementById(mit).style.visibility = "hidden";
}
function reg() {
  zar("bejelentablak");
  nyit("regisztracio");
}
function bej() {
  zar("regisztracio");
  nyit("bejelentablak");
}

function megse() {
  zar("regisztracio");
  zar("bejelentablak");
  zar("hibasbej");
}
function profil() {
  nyit("profil");
  zar("kijelentablak");
  zar("jelszocsere");
}
function jelszocsere() {
  nyit("jelszocsere");
  zar("kijelentablak");
  zar("profil");
}
function kijelentablak() {
  nyit("kijelentablak");
  zar("profil");
  zar("jelszocsere");
}

function ellenoriz() {
  if (
    document.getElementById("bejemail").value != "" &&
    document.getElementById("jelszo").value != ""
  ) {
    document.getElementById("bejelgomb").disabled = false;
  } else {
    document.getElementById("bejelgomb").disabled = true;
  }
}
function ellenorzes(mit, mivel, gomb) {
  if (
    document.getElementById(mit).value != "" &&
    document.getElementById("pass1").value != ""
  ) {
    document.getElementById(gomb).disabled = false;
  } else {
    document.getElementById(gomb).disabled = true;
  }
}

function changepassword() {
  var formData = new FormData();
  formData.append("oldpass", document.getElementById("oldpass").value);
  formData.append("pass", document.getElementById("pass1").value);
  kuld("./changepass.php", formData, "uzenet");
  document.getElementById("oldpass").value = "";
  document.getElementById("pass1").value = "";
  document.getElementById("pass2").value = "";
  document.getElementById("ujjelszo").disabled = true;
  zar("jelszocsere");
}
function bejelentkezes() {
  var formData = new FormData();
  formData.append("email", document.getElementById("bejemail").value);
  formData.append("pass", document.getElementById("jelszo").value);
  kuld("./login.php", formData, "bejreg");
  document.getElementById("bejemail").value = "";
  document.getElementById("jelszo").value = "";
  zar("bejelentablak");
  zar("hibasbej");
}
function kijelentkezes() {
  var httprequest = new XMLHttpRequest();
  httprequest.open("POST", "./logout.php", true);
  httprequest.onreadystatechange = function () {
    if (httprequest.readyState == 4 && httprequest.status == 200) {
      document.getElementById("bejreg").innerHTML =
        "<ul id='menu' class='jobbra'><li id='regisztral'  onclick='reg()'>Regisztráció</li><li id='kivagyok'  onclick='bej()'>Bejelentkezés</li></ul>";
    }
    zar("kijelentablak");
  };
  httprequest.send();
}
function kuld(cim, mit, hova) {
  var httprequest = new XMLHttpRequest();
  httprequest.open("POST", cim, true);
  httprequest.onreadystatechange = function () {
    if (httprequest.readyState == 4 && httprequest.status == 200) {
      document.getElementById(hova).innerHTML = httprequest.responseText;
    }
  };
  httprequest.send(mit);
}

function regisztracio() {
  if (
    document.getElementById("pass").value ==
    document.getElementById("pass2").value
  ) {
    var formData = new FormData();
    formData.append("vnev", document.getElementById("vnev").value);
    formData.append("knev", document.getElementById("knev").value);
    formData.append("email", document.getElementById("regemail").value);
    formData.append("pass", document.getElementById("pass").value);
    formData.append("szuldatum", document.getElementById("szuldatum").value);
    formData.append("neme", document.getElementById("neme").value);
    formData.append("magas", document.getElementById("magas").value);
    kuld("./singin.php", formData, "regisztral");
    document.getElementById("vnev").value = "";
    document.getElementById("knev").value = "";
    document.getElementById("regemail").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("pass2").value = "";
    document.getElementById("szuldatum").value = "";
    document.getElementById("neme").value = "";
    document.getElementById("magas").value = "";
    zar("regisztracio");
  } else {
    alert("Nem egyezik a két jelszó!");
  }
}
