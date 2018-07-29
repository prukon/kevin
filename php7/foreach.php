<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title></title>
    <style type="text/css">
        .even {
            color: red;
        }

        .odd {
            color: blue;
        }

    </style>
</head>
<body>
<?php

//обычный foreach
$meal = array('breakfest' => 'яишница',
    'lunch' => 'суп',
    'snack' => 'закуски',
    'dinner' => 'салат');
print "<table>\n";
foreach ($meal as $key => $value) {
    print "<tr><td>$key</td><td>$value</td></tr>\n";
}
print "</table>";
print '_____________';
//чередование стилей
$row_styles = array('even', 'odd');
$style_index = 0;
$meal = array('breakfest' => 'яишница',
    'lunch' => 'суп',
    'snack' => 'закуски',
    'dinner' => 'салат');
print "<table>\n";
foreach ($meal as $key => $value) {
//print '<tr class ="' .$row_styles[$style_index] . '">';
    print "<tr class = $row_styles[$style_index] ><td>$key</td><td>$value</td></tr>\n";
    $style_index = 1 - $style_index;
}
print '</table>';
print '_____________';
//изменение элемента массива (Умножение всех значений массива на 2)
$meals = array('Каша' => 1,
    'Суп' => 2.5,
    'Второе' => 3.75,
    'Компот' => 1.2);
foreach ($meals as $key => $value) {
    $meals[$key] = $meals[$key] * 2;
}
print "<table>";
foreach ($meals as $key => $value) {
//        printf("Новые значения", $key,$value);
    print "<tr><td>$key</td><td>$value</td></tr>\n";
}
print '</table>';
print '_____________<br>';
//краткая форма foreach
$meals = array("Ухта", "Санкт-Петербург", "Сочи");
foreach ($meals as $key) {
    echo "Город: " . $key . "<br>";
}
print '_____________<br>';
//Вывод многомерного массива через foreach
$flowers =  array       ('Japanese' => array(  'hot' => 'wassabi',
                                        'salty' => 'soy sause'),
                         'Chines' =>   array(  'hot'=>'mustard',
                                        'pepper-salty'=>'prickly ash'));
foreach ($flowers as $key =>$value){
    foreach ($value as $subkey=> $subvalue) {
        print "A $key $subkey flavor is $subvalue <br>";
    }
}
print '_____________<br>';
//Вывод многомерного массива через for
$special = array(array('Iphone','Imac','Ipod'),
                    array('Samsung','Xiaomi','HTC'));
for ($i = 0, $num_special = count($special);  $i < $num_special; $i++){
    for ($m = 0, $num_sub = count($special[$i]); $m < $num_sub; $m++){
        print "Element [$i][$m] is " . $special[$i][$m] . '<br>';
    }
}

print '_____________<br>';
//Вывод многомерного массива через for
$special = array(array('Iphone','Imac','Ipod'),
    array('Samsung','Xiaomi','HTC'));
for ($i = 0, $num_special = count($special);  $i < $num_special; $i++){
    for ($m = 0, $num_sub = count($special[$i]); $m < $num_sub; $m++){
        print "Element [$i][$m] is {$special[$i][$m]} <br>" ;
    }
}
print '_____________<br>';
$cities = array('Нью-Йорк' => array('locate'=>'','people'=>8175133),
    'Лос-Анджелес' => array('locate'=>'шт. Калифорния','people'=>3792621),
    'Чикаго' => array('locate'=>'шт. Иллинойс','people'=>26955598),
    'Хьюстон' => array('locate'=>'шт. Техас','people'=>2100263),
    'Филадельфия' => array('locate'=>'шт. Пансильвания','people'=>1526006),
    'Феникс' => array('locate'=>'шт. Аризона','people'=>1445632),
    'Сан-Антонио' => array('locate'=>'шт. Техас','people'=>1327407),
    'Сан-Диего' => array('locate'=>'шт. Колифорния','people'=>1307402),
    'Даллас' => array('locate'=>'шт. Техас','people'=>1197816),
    'Сан-Хосе' => array('locate'=>'шт. Калифорния','people'=>945942));
echo '<table>';
echo"<tr><td>Город</td><td>Локация</td><td>Население</td></tr>";
foreach ($cities as $key=>$value) {

    for ($i = 0; $i<count($key); $i++) {

        asort($value[people]);
        echo"<tr><td>$key</td><td>$value[locate]</td><td>$value[people]</td></tr>";
    $population = $population +  $value[people];
}
}
echo"<tr><td></td><td>Общее население</td><td>$population</td></tr>";

echo '</table>';






?>
</body>
</html>



