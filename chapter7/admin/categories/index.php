<?php
include_once $_SERVER['DOCUMENT_ROOT'] .
    '/chapter7/includes/magicquotes.inc.php';

if (isset($_GET['add']))
{
  $pageTitle = 'Новая категория';
  $action = 'addform';
  $name = '';
  $id = '';
  $button = 'Добавить категорию';

  include 'form.html.php';
  exit();
}

if (isset($_GET['addform']))
{
  include $_SERVER['DOCUMENT_ROOT'] . '/chapter7/includes/db.inc.php';

  try
  {
    $sql = 'INSERT INTO category SET
        name = :name';
    $s = $pdo->prepare($sql);
    $s->bindValue(':name', $_POST['name']);
    $s->execute();
  }
  catch (PDOException $e)
  {
    $error = 'Error adding submitted category.';
    include 'error.html.php';
    exit();
  }

  header('Location: .');
  exit();
}

if (isset($_POST['action']) and $_POST['action'] == 'Редактировать')
{
  include $_SERVER['DOCUMENT_ROOT'] . '/chapter7/includes/db.inc.php';

  try
  {
    $sql = 'SELECT id, name FROM category WHERE id = :id';
    $s = $pdo->prepare($sql);
    $s->bindValue(':id', $_POST['id']);
    $s->execute();
  }
  catch (PDOException $e)
  {
    $error = 'Error fetching category details.';
    include 'error.html.php';
    exit();
  }

  $row = $s->fetch();

  $pageTitle = 'Редактировать категорию';
  $action = 'editform';
  $name = $row['name'];
  $id = $row['id'];
  $button = 'Обновить категорию';

  include 'form.html.php';
  exit();
}

if (isset($_GET['editform']))
{
  include $_SERVER['DOCUMENT_ROOT'] . '/chapter7/includes/db.inc.php';

  try
  {
    $sql = 'UPDATE category SET
        name = :name
        WHERE id = :id';
    $s = $pdo->prepare($sql);
    $s->bindValue(':id', $_POST['id']);
    $s->bindValue(':name', $_POST['name']);
    $s->execute();
  }
  catch (PDOException $e)
  {
    $error = 'Error updating submitted category.';
    include 'error.html.php';
    exit();
  }

  header('Location: .');
  exit();
}

if (isset($_POST['action']) and $_POST['action'] == 'Удалить')
{
  include $_SERVER['DOCUMENT_ROOT'] . '/chapter7/includes/db.inc.php';

  // Delete joke associations with this category
  try
  {
    $sql = 'DELETE FROM jokecategory WHERE categoryid = :id';
    $s = $pdo->prepare($sql);
    $s->bindValue(':id', $_POST['id']);
    $s->execute();
  }
  catch (PDOException $e)
  {
    $error = 'Error removing jokes from category.';
    include 'error.html.php';
    exit();
  }

  // Delete the category
  try
  {
    $sql = 'DELETE FROM category WHERE id = :id';
    $s = $pdo->prepare($sql);
    $s->bindValue(':id', $_POST['id']);
    $s->execute();
  }
  catch (PDOException $e)
  {
    $error = 'Error deleting category.';
    include 'error.html.php';
    exit();
  }

  header('Location: .');
  exit();
}

// Display category list
include $_SERVER['DOCUMENT_ROOT'] . '/chapter7/includes/db.inc.php';

try
{
  $result = $pdo->query('SELECT id, name FROM category');
}
catch (PDOException $e)
{
  $error = 'Error fetching categories from database!';
  include 'error.html.php';
  exit();
}

foreach ($result as $row)
{
  $categories[] = array('id' => $row['id'], 'name' => $row['name']);
}

include 'categories.html.php';
