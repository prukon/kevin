<?php

include $_SERVER['DOCUMENT_ROOT'] . '/chapter6/includes/magicquotes.inc.php';

if (isset($_GET['addjoke'])) {
    include 'form.html.php';
    exit();
}
if (isset($_POST['joketext'])) {
    include $_SERVER['DOCUMENT_ROOT'] . '/chapter6/includes/db.inc.php';
    try {
        $sql = 'INSERT INTO joke SET
        joketext = :joketext,
        jokedate = CURDATE(),
        authorid = 1';
        $s = $pdo->prepare($sql);
        $s->bindValue(':joketext', $_POST['joketext']);
        $s->execute();
    } catch (PDOException $e) {
        $error = 'Ошибка при добавлении шутки в базу: ' . $e->getMessage();
        include 'error.html.php';
        exit();
    }
    header('Location: /chapter6/jokes/index.php');
    exit();
}

if (isset($_GET['deletejoke'])) {
    include $_SERVER['DOCUMENT_ROOT'] . '/chapter6/includes/db.inc.php';

    try {
        $sql = 'DELETE FROM joke WHERE id = :id';
        $s = $pdo->prepare($sql);
        $s->bindValue(':id', $_POST['id']);
        $s->execute();
    } catch (PDOException $e) {
        $error = 'Ошибка при удалении шутки: ' . $e->getMessage();
        include 'error.html.php';
        exit();
    }

    header('Location: /chapter6/jokes/index.php');
    exit();
}
include $_SERVER['DOCUMENT_ROOT'] . '/chapter6/includes/db.inc.php';
try {
    $sql = 'SELECT joke.id, joketext, name, email
      FROM joke INNER JOIN author
        ON authorid = author.id';
    $result = $pdo->query($sql);
} catch (PDOException $e) {
    $error = 'Ошибка вывода шуток: ' . $e->getMessage();
    include 'error.html.php';
    exit();
}
foreach ($result as $row) {
    $jokes[] = array(
        'id' => $row['id'],
        'text' => $row['joketext'],
        'name' => $row['name'],
        'email' => $row['email']
    );
}
include 'jokes.html.php';
