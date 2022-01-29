<?php 
    include './csatolt.php';
    $sqlmondat="select * from felhasznalo where id='".$_SESSION['id']."' and pass='".sha1($_POST['oldpass'])."'";
    $eredmeny= mysqli_query($kapcsolat, $sqlmondat);
    if (mysqli_num_rows($eredmeny) == 1) {
        $sqlmondat="update felhasznalo set pass='".sha1($_POST['pass'])."' where id='".$_SESSION['id']."'";
        if (($valasz=mysqli_query($kapcsolat, $sqlmondat)) == true){
            echo "A jelszó cseréje sikerült...";
        } else {
            echo "A jelszó cseréje nem sikerült...";
        }
    } else {
        echo "A régi jelszó hibás...";
    }
?>