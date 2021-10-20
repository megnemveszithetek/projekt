<?php
include './csatolt.php';
$vnev=$_POST['vnev'];
$knev=$_POST['knev'];
$email=$_POST['email'];
$jelszo=$_POST['pass'];
$jog=0;
$sqlmondat="select * from felhasznalo where email=\"".$email."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 0){
    $sqlmondat="insert into felhasznalo values(0,\"".$vnev."\",\"".$knev."\",\"".$email."\",\"". sha1($jelszo)."\")";
    mysqli_query($kapcsolat, $sqlmondat);
    $sqlmondat="select * from felhasznalo where fnev=\"".$_POST['fnev']."\"";
    $eredmeny = mysqli_query($kapcsolat, $sqlmondat);
    $rekord= mysqli_fetch_assoc($eredmeny);
    $_SESSION['id']=$rekord['id'];
    $_SESSION['vnev']=$vnev;
    $_SESSION['knev']=$knev;
    echo $vnev+$knev;
} else {
    echo "Bejelentkezés";
}
?>