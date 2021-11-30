<!DOCTYPE html>
<?php
include './csatolt.php';
?>
<html lang="hun">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="cs.css" rel="stylesheet" type="text/css"/>
    <title>Majd kitaláljuk</title>
    <script src="./js.js" type="text/javascript">
</script>
</head>
<body onload="ablakok()" onresize="ablakok()">
    <nav id="bejreg">
        <ul id="menu" class="jobbra">               
            <li id="regisztral"  onclick="reg()">Regisztráció</li>
            <li id="kivagyok"  onclick="bej()">Bejelentkezés</li>
        </ul>
    </nav>
    <div id="felhasznalo"></div>
    <!--           Bejelentkezés             -->
    <div id="bejelentablak">
        <table>
            <tr>
                <td colspan="2" id="hibasbej"> Hibás email vagy jelszó</td>
            </tr>
            <tr>
                <td>E-mail cím:</td>
                <td><input type="text" id="bejemail" onkeyup="ellenoriz()"></td>
            </tr>
            <tr>
                <td>Jelszó:</td>
                <td><input type="password" id="jelszo" onkeyup="ellenoriz()"></td>
            </tr>
            <tr>
                <td><input type="button" id="bejelgomb" onclick="bejelentkezes()" value="Bejelentkezés" disabled></td>
                <td><input type="button" value="Mégse" onclick="megse()"></td>
            </tr>
        </table>
    </div>
<!--           Regisztráció              -->
    <div id="regisztracio">
        <table>
            <tr>
                <td>Vezeték név:</td>
                <td><input type="text" id="vnev"></td>
            </tr>
            <tr>
                <td>Kereszt név:</td>
                <td><input type="text" id="knev"></td>
            </tr>
            <tr>
                <td>E-mail cím:</td>
                <td><input type="text" id="regemail"></td>
            </tr>
            <tr>
                <td>Jelszó: </td>
                <td><input type="password" id="pass"></td>
            </tr>
            <tr>
                <td>Jelszó újra:</td>
                <td><input type="password" id="pass2"></td>
            </tr>
            <tr>
                <td>Születési dátum:</td>
                <td><input type="date" id="szuldatum"></td>
            </tr>
            <tr>
                <td>Neme: </td>
                <td><select id="neme">
                    <option value="0" selected>Nő</option>
                    <option value="1">Férfi</option>
                </select></td>
            </tr>
            <tr>
                <td>Magasság: </td>
                <td><input type="number" id="magas"></td>
            </tr>
            <tr>
                <td><input type="button" id="regisztralas" onclick="regisztracio()" value="Regisztráció"></td>
                <td><input type="button" value="Mégse" onclick="megse()"></td>
            </tr>
        </table>
    </div>
<!--           Kijelentkezés             -->
    <div id="kijelentablak">
            Biztosan ki akar jelentkezni?<br>
            <input type="button" onclick="kijelentkezes()" value="Kilépés">
            <input type="button" value="Mégse" onclick="zar('kijelentablak')">
    </div>
<!--           Jelszó csere              -->
        <div id="jelszocsere">
            <table>
                <tr>
                    <td>Régi jelszó:</td>
                    <td><input type="password" id="oldpass"></td>
                </tr>
                <tr>
                    <td>Új jelszó:</td>
                    <td><input type="password" id="pass1"></td>
                </tr>
                <tr>
                    <td>Új jelszó mégegyszer:</td>
                    <td><input type="password" id="pass2" onchange="ellenorzes('pass1', 'pass2', 'ujjelszo')"></td>
                </tr>
                <tr>
                    <td>
                        <input type="button" onclick="changepassword()" id="ujjelszo" value="Cserél" disabled>
                    </td>
                    <td>
                        <input type="button" value="Mégse" onclick="zar('jelszocsere')">
                    </td>
                </tr>
            </table>
        </div>
        <div id="uzenet"></div>
<!--           Profil                    -->
        <div id="profil">
            <table>
                <tr><th>Vezeték Név</th><th>Kereszt név</th><th>Email cím</th><th>Születési dátum</th><th>Neme</th><th>Magasság</th></tr>
                <?php
                    $user="SELECT vnev, knev, email, szuldatum, neme, magassag FROM felhasznalo WHERE id=".$_SESSION['id'];
                    $eredmeny1=mysqli_query($kapcsolat, $user);
                    while($adatsor1=mysqli_fetch_array($eredmeny1)){
                        echo "<tr><td>".$adatsor1['vnev']."</td><td>".$adatsor1['knev']."</td><td>".$adatsor1['email']."</td><td>".$adatsor1['szuldatum']."</td><td>".$adatsor1['neme']."</td><td>".$adatsor1['magassag']."</td></tr>";
                    }
                ?>
            </table>
        </div>
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
</body>
</html>