<?php include_once $_SERVER['DOCUMENT_ROOT'] .
    '/chapter7/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Управление авторами</title>
  </head>
  <body>
    <h1>Управление авторами</h1>
    <p><a href="?add">Добавить нового автора</a></p>
    <ul>
      <?php foreach ($authors as $author): ?>
        <li>
          <form action="" method="post">
            <div>
              <?php htmlout($author['name']); ?>
              <input type="hidden" name="id" value="<?php
                  echo $author['id']; ?>">
              <input type="submit" name="action" value="Редактировать">
              <input type="submit" name="action" value="Удалить">
            </div>
          </form>         
        </li> 
      <?php endforeach; ?>
    </ul>
    <p><a href="/chapter7/admin/index.html">Вернуться в систему управления</a></p>
  </body>
</html>
