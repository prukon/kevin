//Область видимости функций
var i = 5;
function newfunc (){
    var  i =10;
    console.log(i);
    function insidefunc (){
        var i = 15;
        console.log(i);
    }
    insidefunc();
}
newfunc();
console.log("_____________________");

var func = function (){
    console.log(n);
    var n = 15;
}
func();

//Вот это:
console.log(m);
var m = 10;
//Тоже самое что вот это:
var m;
console.log(m);
m = 10;