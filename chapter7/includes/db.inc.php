<?php
try
{
    $pdo = new PDO('mysql:host=localhost;dbname=prukon_kevin', 'prukon_kevin', 'M*9*4%{&');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
  $error = 'Unable to connect to the database server.';
  include 'error.html.php';
  exit();
}
