<?php
   //Starting the session
   session_start();   
   $stat = session_status();
   $msg = "Current Session Status: ";
   $msg .= $stat;
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
  <?php  echo ( $msg ); ?>
    <script src="./js.js" type="text/javascript"></script>
  </body>
</html>
