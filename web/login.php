<?php
include './csatolt.php';

$sqlmondat="select * from felhasznalo where email=\"".$_POST['email']."\" and pass=\"".sha1($_POST['pass'])."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 1){
    $sqlmondat="update felhasznalo set loggedin=true where email=\"".$_POST['email']."\" and pass=\"".sha1($_POST['pass'])."\"";
    $session = mysqli_query($kapcsolat, $sqlmondat);
    $rekord= mysqli_fetch_assoc($eredmeny);
    $_SESSION['id']=$rekord['id'];
    $_SESSION['vnev']=$rekord['vnev'];
    $_SESSION['knev']=$rekord['knev'];
    $_SESSION['jog']=$rekord['jog'];
    if($_SESSION['jog'] == 0){
    echo "<ul id='menu2' class='jobbra'>
    <li>
      <a>".$_SESSION['vnev'].' '.$_SESSION['knev']."</a>
      <ul>
        <li onclick=\"profil()\">Profil</li>
        <li onclick=\"jelszocsere()\">Jelszó váltóztatás</li>
        <li>Sötét mód</li>
        <li onclick=\"kijelentablak()\">Kijelentkezés</li>
      </ul>
    </li></ul>";
    } else{
      echo "<ul id='menu2' class='jobbra'>
      <li>
        <a>".$_SESSION['vnev'].' '.$_SESSION['knev']."</a>
        <ul>
          <li onclick=\"profil()\">Profil</li>
          <li onclick=\"jelszocsere()\">Jelszó váltóztatás</li>
          <li onclick=\"users()\">Felhasználók</li>
          <li>Sötét mód</li>
          <li onclick=\"kijelentablak()\">Kijelentkezés</li>
        </ul>
      </li></ul>";
    }
} else {
    echo "Hibás bejelntkezés";
}

?>