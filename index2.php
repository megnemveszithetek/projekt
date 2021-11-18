<?php
  include "./csatolt.php"
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="cs.css" rel="stylesheet" type="text/css" />
    <title>Majd kitaláljuk</title>
  </head>
  <body onload="ablakok()" onresize="ablakok()">
    <div id="profil">
      <table id="adatok">
          <tr><th>Vezeték Név</th><th>Kereszt név</th><th>Email cím</th><th>Születési dátum</th><th>Neme</th><th>Magasság</th></tr>
          <?php
              $sqlmondat="SELECT vnev, knev, email, szuldatum, neme, magassag
              FROM felhasznalo
              WHERE id=\"".$_SESSION['id']."\"";
              $eredmeny=mysqli_query($kapcsolat, $sqlmondat);
              while($adatsor=mysqli_fetch_array($eredmeny)){
                  echo "<tr><td>".$adatsor['vnev']."</td><td>".$adatsor['knev']."</td><td>".$adatsor['email']."</td><td>".$adatsor['szuldatum']."</td><td>".$adatsor['neme']."</td><td>".$adatsor['magassag']."</td></tr>";
              }
          ?>
      </table>
    </div>
    <script src="./js.js" type="text/javascript"></script>
  </body>
</html>
