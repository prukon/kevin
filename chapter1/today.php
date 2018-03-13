<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Вывод даты</title>
</head>
<body>
<p>Сегодня (серверная дата)
    <?php
    echo date('l, F jS Y.');
    ?>
</p>
<?php
include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';
?>
</body>
</html>
