<?php
if (session_status()==PHP_SESSION_NONE){
    session_start();
    if (!isset($_SESSION['id'])){
        $_SESSION['id']=0;
    }
    if (!isset($_SESSION['vnev'])){
        $_SESSION['vnev']="";
    }
    if (!isset($_SESSION['knev'])){
        $_SESSION['knev']="";
    }
}
    $server="localhost";
    $user="root";
    $password="";
    $adatbazis="fitneszapp";
    $kapcsolat= mysqli_connect($server, $user, $password, $adatbazis);
?>