<!DOCTYPE html>
<?php
include './csatolt.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="cs.css" rel="stylesheet" type="text/css"/>
    <title>Document</title>
</head>
<body onload="ablakok()" onresize="ablakok()">
    <nav>
        <ul id="menu" class="jobbra">               
            <li id="regisztral"  onclick="reg()">Regisztráció</li>
            <li id="kivagyok"  onclick="bej()">Bejelentkezés</li>
        </ul>
    </nav>
        <div id="bejelentablak">
            <table>
                <tr>
                    <td>E-mail cím:</td>
                    <td><input type="text" id="email" onkeyup="ellenoriz()"></td>
                </tr>
                <tr>
                    <td>Jelszó:</td>
                    <td><input type="password" id="jelszo" onkeyup="ellenoriz()"></td>
                </tr>
                <tr>
                    <td><input type="button" id="bejelgomb" onclick="bejelentkezes()" value="Bejelentkezés" disabled></td>
                    <td><input type="button" value="Mégse" onclick="zar('bejelentablak')"></td>
                </tr>
            </table>
        </div>
        <div id="regisztracio">
            <table>
                <tr>
                    <td>Vezeték név:</td>
                    <td><input type="text" id="vnev"></td>
                </tr>
                <tr>
                    <td>Kerszt név:</td>
                    <td><input type="text" id="knev"></td>
                </tr>
                <tr>
                    <td>E-mail cím:</td>
                    <td><input type="text" id="email"></td>
                </tr>
                <tr>
                    <td>Jelszó</td>
                    <td><input type="password" id="pass"></td>
                </tr>
                <tr>
                    <td>Jelszó újra</td>
                    <td><input type="password" id="pass2"></td>
                </tr>
                <tr>
                    <td>Születési dátum:</td>
                    <td><input type="date" id="szuldatum"></td>
                </tr>
                <tr>
                    <td><input type="button" id="regisztral" onclick="regisztracio()" value="Regisztráció"></td>
                    <td><input type="button" value="Mégse" onclick="zar('regisztracio')"></td>
                </tr>
            </table>
        </div>
    <script src="./js.js" type="text/javascript"></script>
</body>
</html>