<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Список шуток</title>
  </head>
  <body>
    <h1>Все шутки в базе:</h1>
    <?php foreach ($jokes as $joke): ?>
      <blockquote>
        <p>
          <?php echo htmlspecialchars($joke, ENT_QUOTES, 'UTF-8'); ?>
        </p>
      </blockquote>
    <?php endforeach; ?>
    <?php
    include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';
    ?>
  </body>
</html>
