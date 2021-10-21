<?php
include './csatolt.php';

$sqlmondat="select * from felhasznalo where email=\"".$_POST['email']."\" and jelszo=\"".($_POST['pass'])."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 1){
    $rekord= mysqli_fetch_assoc($eredmeny);
    $_SESSION['id']=$rekord['id'];
    $_SESSION['vnev']=$rekord['vnev'];
    $_SESSION['knev']=$rekord['knev'];
    echo $_SESSION['vnev'];
} else {
    echo "Bejelentkezés";
}

?>