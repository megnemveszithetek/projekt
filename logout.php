<?php
include './csatolt.php';
$sqlmondat="select * from felhasznalo where ID=\"".$_SESSION['id']."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 1){
    $sqlmondat="update felhasznalo set loggedin=false where id=\"".$_SESSION['id']."\"";
    $session = mysqli_query($kapcsolat, $sqlmondat);
    $_SESSION['id']=0;
    $_SESSION['vnev']="";
    $_SESSION['knev']="";
    echo "valami nem jó";
} else {
    echo "Bejelentkezés";
}
?>