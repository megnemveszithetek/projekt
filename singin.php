<?php
include './csatolt.php';

$vnev=$_POST['vnev'];
$knev=$_POST['knev'];
$email=$_POST['email'];
$jelszo=$_POST['pass'];
$szuldatum=$_POST['szuldatum'];
$neme=$_POST['neme'];
$magas=$_POST['magas'];
$sqlmondat="select * from felhasznalo where email=\"".$email."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 0){
    $sqlmondat="insert into felhasznalo values(0,\"".$vnev."\",\"".$knev."\",\"".$email."\",\"".sha1($jelszo)."\",\"".$szuldatum."\",\"".$neme."\",\"".$magas."\",\"".false."\")";
    mysqli_query($kapcsolat, $sqlmondat);

    //$sqlmondat="select * from felhasznalo where email=\"".$_POST['email']."\"";
    //$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
    //$rekord= mysqli_fetch_assoc($eredmeny);
    //$_SESSION['id']=$rekord['id'];
    //$_SESSION['vnev']=$vnev;
    //$_SESSION['knev']=$knev;
} else {
    echo "Bejelentkezés";
}

?>