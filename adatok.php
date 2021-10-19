<?php
include './csatolt.php';
$vnev=$_POST['vnev'];
$knev=$_POST['knev'];
$jelszo=$_POST['jelszo'];
$jog=0;
$sqlmondat="select * from felhasznalo where fnev=\"".$fnev."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 0){
    $sqlmondat="insert into felhasznalo values(0,\"".$nev."\",\"".$fnev."\",\"". sha1($jelszo)."\",".$jog.")";
    mysqli_query($kapcsolat, $sqlmondat);
    $sqlmondat="select * from felhasznalo where fnev=\"".$_POST['fnev']."\"";
    $eredmeny = mysqli_query($kapcsolat, $sqlmondat);
    $rekord= mysqli_fetch_assoc($eredmeny);
    $_SESSION['userid']=$rekord['userid'];
    $_SESSION['userid']=$rekord['userid'];
    $_SESSION['nev']=$nev;
    $_SESSION['jog']=$jog;
    echo $nev;
} else {
    echo "Bejelentkezés";
}
?>