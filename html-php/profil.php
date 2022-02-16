<?php
include './csatolt.php';
$kimenet ="<table><tr><th>Vezeték Név</th><th>Kereszt név</th><th>Email cím</th><th>Születési dátum</th><th>Neme</th><th>Magasság</th></tr>";
$user="SELECT vnev, knev, email, szuldatum, neme, magassag FROM felhasznalo WHERE id=".$_SESSION['id'];
$eredmeny1=mysqli_query($kapcsolat, $user);
while($adatsor1=mysqli_fetch_array($eredmeny1)){
    $kimenet = $kimenet."<tr><td>".$adatsor1['vnev']."</td><td>".$adatsor1['knev']."</td><td>".$adatsor1['email']."</td><td>".$adatsor1['szuldatum']."</td><td>".$adatsor1['neme']."</td><td>".$adatsor1['magassag']."</td></tr>";
}
$kimenet = $kimenet."</table>";
echo ($kimenet);
?> 