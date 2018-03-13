<?php include_once $_SERVER['DOCUMENT_ROOT'] .
    '/chapter9/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Product Catalog</title>
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
<p>Товаров в корзине: <?php
    echo count($_SESSION['cart']); ?></p>

<p><a href="?cart">Перейти в корзину</a></p>
<table border="1">
    <thead>
    <tr>
        <th>Название товара</th>
        <th>Цена</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($items as $item): ?>
        <tr>
            <td><?php htmlout($item['desc']); ?></td>
            <td>
                $<?php echo number_format($item['price'], 2); ?>
            </td>
            <td>
                <form action="" method="post">
                    <div>
                        <input type="hidden" name="id" value="<?php
                        htmlout($item['id']); ?>">
                        <input type="submit" name="action" value="Добавить в корзину">
                    </div>
                </form>
            </td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
<?php
include $_SERVER['DOCUMENT_ROOT'] . '/includes/main.php';
?>
</body>
</html>