<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title></title>
</head>
<body>
<?php
$prefix = "/images/";
function images($url, $alt = "", $height = "", $width = "")
{
   $pref =  $GLOBALS['prefix'];
    $img = "<img href= $pref$url  alt='$alt' height='$height',  width='$width'  />";
    echo $img;
}
images('ava.jpg', 1, 2, 3);
?>
</body>
</html>