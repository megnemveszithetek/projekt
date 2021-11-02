<?php
include './csatolt.php';
$sqlmondat="select * from felhasznalo where email=\"".$_POST['email']."\" and pass=\"".sha1($_POST['pass'])."\"";
$eredmeny = mysqli_query($kapcsolat, $sqlmondat);
if (mysqli_num_rows($eredmeny) == 1){
    $sqlmondat="update felhasznalo set loggedin=true where email=\"".$_POST['email']."\" and pass=\"".sha1($_POST['pass'])."\"";
    $session = mysqli_query($kapcsolat, $sqlmondat);
    $_SESSION['id']=0;
    $_SESSION['vnev']="";
    $_SESSION['knev']="";
    echo "valami nem jó";
} else {
    echo "Bejelentkezés";
}
?>