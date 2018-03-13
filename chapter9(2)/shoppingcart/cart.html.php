<?php include_once $_SERVER['DOCUMENT_ROOT'] .
    '/chapter9(2)/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Корзина</title>
    <style>
        table {
            border-collapse: collapse;
        }

        td, th {
            border: 1px solid black;
        }
    </style>
</head>
<body>
<h1>Корзина</h1>
<?php if (count($cart) > 0): ?>
    <table>
        <thead>
        <tr>
            <th>Название</th>
            <th>Цена</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
            <td><b>Итого:</td>
            <td>$<?php echo number_format($total, 2); ?></td>
        </tr>
        </tfoot>
        <tbody>
        <?php foreach ($cart as $item): ?>
            <tr>
                <td><?php htmlout($item['desc']); ?></td>
                <td>
                    $<?php echo number_format($item['price'], 2); ?>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
<?php else: ?>
    <p>Ваша корзина пуста</p>
<?php endif; ?>
<form action="?" method="post">
    <p>
        <a href="?">Продолжить покупки</a> или
        <input type="submit" name="action" value="Очистить корзину">
    </p>
</form>
<a href="index.php">Назад</a>
</body>
</html>
