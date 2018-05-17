var assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];

var updateCards = function(products) {
    var elements = document.querySelectorAll('.good');
    for (var i= 0;i < elements.length ;i++){
        // console.log(elements[i]);
        product = products[i];
        element = elements[i];

        var availabilityClass = 'good--available'
        if (!product.inStock) {
            availabilityClass = 'good--unavailable';
        }
        element.classList.add(availabilityClass);

        if (product.isHit) {
            element.classList.add('good--hit');
        }
    }
}
updateCards(assortmentData);

/*

 Мяу! На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

 Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

 - inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
 - isHit. Если значение true — мороженое самое популярное среди покупателей.

 Каждому состоянию товара соответствует специальный класс:

 Товар в наличии — good--available.
 Недоступный товар — good--unavailable.
 Хит продаж — good--hit.

 Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

 */


.good {
    position: relative;

    display: flex;
    width: 220px;
    flex-direction: column;
    align-items: center;
    min-width: 267px;
    margin-bottom: 35px;
    padding: 15px 10px;

    color: #ffffff;
}

.good--available::before,
.good--unavailable::before {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;

    display: inline-block;
    padding: 5px 8px;

    font-weight: bold;
    font-size: 16px;
    vertical-align: top;
    text-align: center;
    color: #ffffff;

    background-image: linear-gradient(#e74a35 0%, #f26843 100%);
    border: none;
    border-radius: 5px;
}

.good--hit {
    width: 100%;
    order: -1;

    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

.good--hit::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;

    width: 61px;
    height: 61px;
    margin: auto;

    background-image: url("gllacy/hit.svg");
    background-repeat: no-repeat;
}

.good--unavailable {
    filter: grayscale(1) opacity(0.8);
}

.good--unavailable::before {
    content: "Нет в наличии";
}

.good--available::before {
    content: "В наличии";
}

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Каталог | Глейси</title>
<link rel="stylesheet" href="gllacy/setting.css">
<link rel="stylesheet" href="style.css">
</head>
<body>
<ul class="goods">
<li class="good">
<h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
<img src="gllacy/choco.jpg" width="220" height="220" alt="Сливочно-кофейное с кусочками шоколада">
<p class="good__price">110₽/кг</p>
</li>

<li class="good">
<h2 class="good__description">Сливочно-лимонное с карамельной присыпкой</h2>
<img src="gllacy/lemon.jpg" width="220" height="220" alt="Сливочно-лимонное с карамельной присыпкой">
<p class="good__price">220₽/кг</p>
</li>

<li class="good">
<h2 class="good__description">Сливочное с брусничным
джемом</h2>
<img src="gllacy/cowberry.jpg" width="220" height="220" alt="Сливочное с брусничным джемом">
<p class="good__price">310₽/кг</p>
</li>

<li class="good">
<h2 class="good__description">Сливочное с кусочками печенья</h2>
<img src="gllacy/cookie.jpg" width="220" height="220" alt="Сливочное с кусочками
печенья">
<p class="good__price">400₽/кг</p>
</li>

<li class="good">
<h2 class="good__description">Сливочное крем-брюле</h2>
<img src="gllacy/creme-brulee.jpg" width="220" height="220" alt="Сливочное крем-брюле">
<p class="good__price">500₽/кг</p>
</li>
</ul>
<script src="script.js"></script>
</body>
</html>
