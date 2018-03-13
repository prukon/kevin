<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=prukon_kevin', 'prukon_kevin', 'M*9*4%{&');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
  $output = 'Ошибка при подключении к БД.';
  include 'output.html.php';
  exit();
}

try
{
  $sql = 'CREATE TABLE joke (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        joketext TEXT,
        jokedate DATE NOT NULL
      ) DEFAULT CHARACTER SET utf8 ENGINE=InnoDB';
  $pdo->exec($sql);
}
catch (PDOException $e)
{
  $output = 'Ошибка при создании таблицы (возможно таблица уже существует): ' . $e->getMessage();
  include 'output.html.php';
  exit();
}

$output = 'Таблица успешно создана.';
include 'output.html.php';
include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';
