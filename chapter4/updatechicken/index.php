<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=prukon_kevin', 'prukon_kevin', 'M*9*4%{&');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('SET NAMES "utf8"');
} catch (PDOException $e) {
    $error = 'Ошибка при подключении к БД';
    include 'output.html.php';
    exit();
}

try {
    $sql = 'UPDATE joke SET jokedate="2012-05-01"
      WHERE joketext LIKE "%перешел%"';
    $affectedRows = $pdo->exec($sql);
} catch (PDOException $e) {
    $output = 'Ошибка при обновлении: ' . $e->getMessage();
    include 'output.html.php';
    exit();
}

$output = "Обновлено шуток: $affectedRows";
include 'output.html.php';
