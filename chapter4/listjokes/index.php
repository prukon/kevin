<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=prukon_kevin', 'prukon_kevin', 'M*9*4%{&');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
    $error = 'Ошибка при подключении к БД';
  include 'error.html.php';
  exit();
}

try
{
  $sql = 'SELECT joketext FROM joke';
  $result = $pdo->query($sql);
}
catch (PDOException $e)
{
  $error = 'Error fetching jokes: ' . $e->getMessage();
  include 'error.html.php';
  exit();
}

while ($row = $result->fetch())
{
  $jokes[] = $row['joketext'];
}

include 'jokes.html.php';
