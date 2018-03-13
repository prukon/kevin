<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Шутки в БД</title>
  </head>
  <body>
    <p><a href="?addjoke">Добавить новую шутку</a></p>
    <p>Все шутки в базе:</p>
    <?php foreach ($jokes as $joke): ?>
      <form action="?deletejoke" method="post">
          <p>
            <?php echo htmlspecialchars($joke['text'], ENT_QUOTES, 'UTF-8'); ?>
            <input type="hidden" name="id" value="<?php echo $joke['id']; ?>">
            <input type="submit" value="Удалить">
          </p>
      </form>
    <?php endforeach; ?>
  </body>
</html>
