<?php
include $_SERVER['DOCUMENT_ROOT'] . '/oreilly/chapter10/includes/login.php';

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die($conn->connect_error);
?>