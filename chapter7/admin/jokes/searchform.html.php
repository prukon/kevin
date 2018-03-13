<?php include_once $_SERVER['DOCUMENT_ROOT'] .
    '/chapter7/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Управление шутками</title>
  </head>
  <body>
    <h1>Управление шутками</h1>
    <p><a href="?add">Добавить новую шутку</a></p>
    <form action="" method="get">
      <p>Введите критерии поиска:</p>
      <div>
        <label for="author">Авторы:</label>
        <select name="author" id="author">
          <option value="">Любой автор</option>
          <?php foreach ($authors as $author): ?>
            <option value="<?php htmlout($author['id']); ?>"><?php
                htmlout($author['name']); ?></option>
          <?php endforeach; ?>
        </select>
      </div>
      <div>
        <label for="category">Категория:</label>
        <select name="category" id="category">
          <option value="">Любая категория</option>
          <?php foreach ($categories as $category): ?>
            <option value="<?php htmlout($category['id']); ?>"><?php
                htmlout($category['name']); ?></option>
          <?php endforeach; ?>
        </select>
      </div>
      <div>
        <label for="text">Содержит текст:</label>
        <input type="text" name="text" id="text">
      </div>
      <div>
        <input type="hidden" name="action" value="search">
        <input type="submit" value="Поиск">
      </div>
    </form>
    <p><a href="/chapter7/admin/">Назад</a></p>
  </body>
</html>
