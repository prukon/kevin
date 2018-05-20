<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Каталог | Глейси</title>
<link rel="stylesheet" href="gllacy/setting.css">
<link rel="stylesheet" href="style.css">
<script>
var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

var createCard = function (product) {
    var listItem = makeElement('li', 'good');

    var title = makeElement('h2', 'good__description', product.text);
    listItem.appendChild(title);

    var picture = makeElement('img', 'good__image');
    picture.src = product.imgUrl;
    picture.alt = product.text;
    listItem.appendChild(picture);

    var price = makeElement('p', 'good__price', product.price + "₽/кг");
    listItem.appendChild(price);

    var availabilityClass = 'good--available';
    if (!product.inStock) {
        availabilityClass = 'good--unavailable';
    }
    listItem.classList.add(availabilityClass);

    if (product.isHit) {
        listItem.classList.add('good--hit');
        var specialPrice = makeElement('p', 'good__special-offer', product.specialOffer);
        listItem.appendChild(specialPrice);
    }

    return listItem;
};

var renderCards = function(itemsData) {
    var box = document.querySelector('.goods');
    for(var i = 0; i<itemsData.length; i++) {
        var a = createCard(itemsData[i]);
        box.append(a);
    }
}
renderCards(cardsData);
</script>

    <style>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 580px;
    margin: 20px auto;
    padding: 0;

    list-style: none;
}

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

.good__price {
    position: absolute;
    top: 180px;
    left: 55%;

    width: 270px;
    margin: 0;
    margin-bottom: 20px;

    font-weight: bold;
    font-size: 40px;
    line-height: 40px;
    text-shadow: 0.5px 0.866px 3px rgba(49, 50, 53, 1);

    transform: translateX(-140px);
}

.good__description {
    order: 1;
    max-width: 220px;
    margin: 8px 11px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.4);
}

.good__image {
    padding: 10px;
    background-image: url("gllacy/lollipop.svg");
    background-repeat: no-repeat;
    background-size: 450px;
    background-position: -45px -45px;
}

.good__special-offer {
    position: relative;
    order: 2;

    max-width: 190px;
    margin: 5px 11px;
    padding-left: 5px;

    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    text-align: center;

    color: rgba(255, 239, 213, 1);
    text-shadow: 0.5px 0.866px 3px rgba(49, 50, 53, 0.5);
}

.good__special-offer::before {
    position: absolute;
    content: "*";
    top: 0;
    left: 0;
}

</style>

</head>
<body>
<ul class="goods">

</ul>
<script src="script.js"></script>
</body>
</html>


