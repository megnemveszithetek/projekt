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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>Majd kitaláljuk</title>
  </head>
  <body onload="ablakok()" onresize="ablakok()">

  <table id="table-to-refresh"></table>

  <button class="refresher">Refresh table</button>
  <script type="text/javascript">
$(document).ready(function () {
$(document).on('click', '.refresher', function () {
$.ajax({
url: 'profil.php',
method: "GET",
dataType: 'json',
success: function(response) {
   $('#table-to-refresh').html(response);
}
});
});
});
</script>
  </body>
</html>
