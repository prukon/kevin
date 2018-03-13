<?php
include $_SERVER['DOCUMENT_ROOT'] . '/oreilly/chapter11/includes/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die($conn->connect_error);
$f = $c = '';
if (isset($_POST['far'])) $f = sanitizeString($_POST['far']);
if (isset($_POST['cel'])) $f = sanitizeString($_POST['cel']);

if ($f != '')
{
    $c = intval((5 / 9) * ($f - 32));
    $out = "$f f равно $c c";
}
elseif($c != '')
{
    $f = intval((9 / 5) * $c + 32);
    $out = "$c c равно $f f";
}
else $out = "";
echo $f;
echo $c;


?>




<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body>
  <pre>
  Введите температуру по Фарингейту или по Цельсию и нажмите "перевести".
  <b>
      <?php echo $out ?>
      <b>
          <form method="post" action="convert.php">
              По Фарингейту <input type="text" name="far" size="7"><br/>
              По Цельсию    <input type="text" name="cel" size="7"><br/>
              <input type="submit" value="Перевести">
          </form>
          </pre>
</body>
</html>
<?php
function sanitizeString($var)
{
$var = stripslashes($var);
    $var = strip_tags($var);
    $var = htmlentities($var);
    return $var;
}
?>