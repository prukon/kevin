<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Joke CMS</title>
  </head>
  <body>
    <h1>Система управления</h1>
    <ul>
      <li><a href="jokes/index.php">Управление шутками</a></li>
      <li><a href="authors/index.php">Управления авторами</a></li>
      <li><a href="categories/index.php">Управление категориями</a></li>
    </ul>
  <?php
  include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';
  ?>
  </body>
</html>