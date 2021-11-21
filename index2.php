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
    <!--           Adminpanel felhasználók   -->
            <div id="users">
                <table>
                    <tr><th>ID</th><th>Vezeték Név</th><th>Kereszt név</th><th>Email cím</th><th>Születési dátum</th><th>Neme</th><th>Magasság</th><th>jog</th></tr>
                    <?php
                        $sqlmondat="SELECT * FROM felhasznalo";
                        $eredmeny=mysqli_query($kapcsolat, $sqlmondat);
                        while($adatsor=mysqli_fetch_array($eredmeny)){
                            echo "<tr><td>".$adatsor['id']."</td><td>".$adatsor['vnev']."</td><td>".$adatsor['knev']."</td><td>".$adatsor['email']."</td><td>".$adatsor['szuldatum']."</td><td>".$adatsor['neme']."</td><td>".$adatsor['magassag']."</td><td>".$adatsor['jog']."</td></tr>";
                        }
                    ?>
                </table>
            </div>
    <script src="./js.js" type="text/javascript"></script>
  </body>
</html>
