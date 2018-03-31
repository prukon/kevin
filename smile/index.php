<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<a id ="main" href="www.google.com">google</a>
<a id ="main" href="www.yandex.ru">yandex</a>

<br>
<script>
    url=document.links.main.href;
    document.write('url-' + url);

    var bal = 'Hello,World';
    document.write( '<br>' + bal);

    urlcount=document.links.length;
    document.write('<br> url-' + urlcount);

</script>
</body>
</html>