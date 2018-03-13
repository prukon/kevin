<?php
if (get_magic_quotes_gpc()) {
    $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
    while (list($key, $val) = each($process)) {
        foreach ($val as $k => $v) {
            unset($process[$key][$k]);
            if (is_array($v)) {
                $process[$key][stripslashes($k)] = $v;
                $process[] = &$process[$key][stripslashes($k)];
            } else {
                $process[$key][stripslashes($k)] = stripslashes($v);
            }
        }
    }
    unset($process);
}

if (isset($_GET['addjoke'])) {
    include 'form.html.php';
    exit();
}

try {
    $pdo = new PDO('mysql:host=localhost;dbname=prukon_kevin', 'prukon_kevin', 'M*9*4%{&');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec('SET NAMES "utf8"');
} catch (PDOException $e) {
    $error = 'Ошибка при подключении к БД';
    include 'error.html.php';
    exit();
}

if (isset($_POST['joketext'])) {
    try {
        $sql = 'INSERT INTO joke SET
        joketext = :joketext,
        jokedate = CURDATE()';
        $s = $pdo->prepare($sql);
        $s->bindValue(':joketext', $_POST['joketext']);
        $s->execute();
    } catch (PDOException $e) {
        $error = 'Ошибка при добавлении шутки: ' . $e->getMessage();
        include 'error.html.php';
        exit();
    }

    header('Location: /chapter4/deletejoke/index.php');
    exit();
}

if (isset($_GET['deletejoke'])) {
    try {
        $sql = 'DELETE FROM joke WHERE id = :id';
        $s = $pdo->prepare($sql);
        $s->bindValue(':id', $_POST['id']);
        $s->execute();
    } catch (PDOException $e) {
        $error = 'Ошибка удаления шутки: ' . $e->getMessage();
        include 'error.html.php';
        exit();
    }

    header('Location: /chapter4/deletejoke/index.php');
    exit();
}

try {
    $sql = 'SELECT id, joketext FROM joke';
    $result = $pdo->query($sql);
} catch (PDOException $e) {
    $error = 'Ошибка вывода шуток: ' . $e->getMessage();
    include 'error.html.php';
    exit();
}

while ($row = $result->fetch()) {
    $jokes[] = array('id' => $row['id'], 'text' => $row['joketext']);
}

include 'jokes.html.php';
include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';

