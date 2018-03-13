<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title></title>
</head>
<body>
<?php
class Shop
{
    private $name;
    public function naming()
    {
        $this->name = "adidas";
        echo $this->name;
    }
}
$product = new Shop;
//$product->naming();
//$product->name = "nike";
class Users
{
    public $name        =    "Имя";
    public $password    =    "Пароль";
    public $email       =    "Емаил";
    private $city        =    "Город";
}

$admin = new Users();
//echo $admin->name ;
$user1 = new Users();

$admin -> name   =    "Alexey";
$user1 -> name   =    "Andrey";

echo $admin->name;
echo "<br>";
echo $user1->name;
echo $user1->sername  =     " Ivanov";
echo "<br>";
print_r($user1);
echo "<br>";
print_r($admin);




?>
</body>
</html>