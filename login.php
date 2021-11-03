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
    echo "<ul id='menu' class='jobbra'><li onclick=\"nyit('kijelentablak')\">".$_SESSION['vnev'].' '.$_SESSION['knev']."</li></ul>";
} else {
    echo "Hibás bejelntkezés";
}

?>