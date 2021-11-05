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
</head>
<body onload="ablakok()" onresize="ablakok()">
    <div id="container">
    <nav id="bejreg">
        <ul id="menu" class="jobbra">               
            <li id="regisztral"  onclick="reg()">Regisztráció</li>
            <li id="kivagyok"  onclick="bej()">Bejelentkezés</li>
        </ul>
    </nav>
    <div id="felhasznalo"></div>
    <!--           Bejelentkezés            -->
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
    <!--           Regisztráció            -->
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
        <div id="kijelentablak">
             Biztosan ki akar jelentkezni?<br>
             <input type="button" onclick="kijelentkezes()" value="Kilépés">
             <input type="button" value="Mégse" onclick="zar('kijelentablak')">
        </div>
    <script src="./js.js" type="text/javascript">
</script>
    <div id="container">
</body>
</html>