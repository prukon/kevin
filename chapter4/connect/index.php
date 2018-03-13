<?php
try
{
  $pdo = new PDO('mysql:host=localhost;dbname=prukon_kevin', 'prukon_kevin', 'M*9*4%{&');

  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
  $output = 'Подключение не удалось.' .
  $e->getMessage();
  include 'output.html.php';
  exit();
}
$output = 'Подключение прошло успешно.';
 include 'output.html.php';
include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';


