<?php include_once $_SERVER['DOCUMENT_ROOT'] . '/chapter7/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php htmlout($pageTitle); ?></title>
    <style type="text/css">
    textarea {
      display: block;
      width: 100%;
    }
    </style>
  </head>
  <body>
    <h1><?php htmlout($pageTitle); ?></h1>
    <form action="?<?php htmlout($action); ?>" method="post">
      <div>
        <label for="text">Текст шутки:</label>
        <textarea id="text" name="text" rows="3" cols="40"><?php
            htmlout($text); ?></textarea>
      </div>
      <div>
        <label for="author">Автор:</label>
        <select name="author" id="author">
          <option value="">Выбор</option>
          
          <?php foreach ($authors as $author): ?>
            <option value="<?php htmlout($author['id']); ?>"<?php
                if ($author['id'] == $authorid)
                {
                  echo ' selected';
                }
                ?>><?php htmlout($author['name']); ?></option>
          <?php endforeach; ?>
        </select>
      </div>
      <fieldset>
        <legend>Категории:</legend>
        <?php foreach ($categories as $category): ?>
          <div>
	          <label for="category<?php htmlout($category['id']);
              ?>">
              <input type="checkbox" name="categories[]"
              id="category<?php htmlout($category['id']); ?>"
              value="<?php htmlout($category['id']); ?>"<?php
              if ($category['selected'])
              {
                echo ' checked';
              }
              ?>><?php htmlout($category['name']); ?></label></div>
        <?php endforeach; ?>
      </fieldset>
      <div>
        <input type="hidden" name="id" value="<?php
            htmlout($id); ?>">
        <input type="submit" value="<?php htmlout($button); ?>">
      </div>
    </form>
   <br>
    <a href="index.php">Назад</a>
  </body>
</html>
