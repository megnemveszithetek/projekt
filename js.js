
function egyeblistaopen(){
  document.getElementById("neme").addEventListener("change", openList,false)
  alert("asdadasf")
}
function openList(){
  if(egyeblista.value=="egyeb"){
    nyit("egyeblista")
  }
  else{
    zar("egyeblista")
  }
}
window.addEventListener("load", egyeblistaopen,false)
function ablakok() {
  kozepre("bejelentablak");
  //kozepre("kijelentablak");
  kozepre("regisztracio");
  //kozepre("jelszocsere");
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

function bejelentkezes() {
  var formData = new FormData();
  formData.append('email', document.getElementById('bejemail').value);
  formData.append('pass', document.getElementById('jelszo').value);
  kuld("./bejelentkezes.php", formData, "kivagyok");
  document.getElementById('fnev').value = "";
  document.getElementById('jelszo').value = "";
  zar('bejelentablak');

}

function regisztracio(){
  if (document.getElementById('pass').value == document.getElementById('pass2').value){
      var formData = new FormData();
      formData.append('vnev', document.getElementById('vnev').value);
      formData.append('knev', document.getElementById('knev').value);
      formData.append('email', document.getElementById('regemail').value);
      formData.append('pass', document.getElementById('pass1').value);
      formData.append('szuldatum', document.getElementById('szuldatum').value);
      kuld("./felhasznalo.php", formData, "kivagyok");
      document.getElementById('vnev').value = "";
      document.getElementById('knev').value = "";
      document.getElementById('email').value = "";
      document.getElementById('pass1').value = "";
      document.getElementById('pass2').value = "";
      zar('regisztracio');
  } else {
      alert("Nem egyezik a két jelszó!");
  }
}