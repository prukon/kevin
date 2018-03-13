<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Шутки</title>
  </head>
  <body>
    <p><a href="?addjoke">Добавьте вашу шутку</a></p>
    <p>Все шутки в базе:</p>
    <?php foreach ($jokes as $joke): ?>
      <blockquote>
        <p><?php echo htmlspecialchars($joke, ENT_QUOTES, 'UTF-8'); ?></p>
      </blockquote>
    <?php endforeach; ?>
  </body>
</html>
