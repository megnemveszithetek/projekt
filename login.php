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
    // echo "<!DOCTYPE html>
    // <html>
    //   <head>
    //     <style>
    //       ul {
    //         display: inline;
    //         margin: 0;
    //         padding: 0;
    //       }
    //       ul li {
    //         display: inline-block;
    //         cursor: pointer;
    //       }
    //       ul li:hover ul {
    //         display: block;
    //       }
    //       ul li ul {
    //         position: absolute;
    //         width: 200px;
    //         display: none;
    //       }
    //       ul li ul li {
    //         display: block;
    //         cursor: pointer;
    //       }
    //     </style>
    //   </head>
    //   <body>
    //     <div>
    //       <ul>
    //         <li>
    //           <a>Felhasználó</a>
    //           <ul>
    //             <li>Link 1</li>
    //             <li>Link 2</li>
    //             <li>Link 3</li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </body>
    // </html>
    // ";
} else {
    echo "Hibás bejelntkezés";
}

?>