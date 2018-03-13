<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Список всех шуток</title>
</head>
<body>
<p><a href="?addjoke">Добавьте шутку</a></p>

<p>Все шутки в базе:</p>
<?php foreach ($jokes as $joke): ?>
    <form action="?deletejoke" method="post">
        <blockquote>
            <p>
                <?php echo htmlspecialchars($joke['text'], ENT_QUOTES, 'UTF-8'); ?>
                <input type="hidden" name="id" value="<?php echo $joke['id']; ?>">
                <input type="submit" value="Удалить">
                (Автор: <a href="mailto:<?php
                echo htmlspecialchars($joke['email'], ENT_QUOTES,
                    'UTF-8'); ?>"><?php
                    echo htmlspecialchars($joke['name'], ENT_QUOTES,
                        'UTF-8'); ?></a>)
            </p>
        </blockquote>
    </form>
<?php endforeach; ?>
<?php
include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';
?>
</body>
</html>
