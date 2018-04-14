//  function выражение(аргументы){
//  инструкции
//  return выражение
//  }

//инструкция объявления функции
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Вася"));
console.log("__________________1");
//выражение объединения функций
var greet = function (name) {
    console.log(arguments.length);
    return "Hello " + name;
};

console.log(greet("Вася", 28, "М", 167));
console.log("__________________2");

var func  = function(callback) {
    var name = "prukon";
    callback(name);
};
//использование функции в качестве аргумента другой к другой фукции
func(function(n){
   console.log("Hello " + n);
});
console.log("__________________3");
var     func = function(){
    return function(){
console.log("hi");
    }
};
func()();
console.log("__________________4");

//анонимная самовызывающаяся функция
var greeting  = (function(name){
    return "Hello " + name
}("prukon")); //передача значения аргументы после инструкций фунции
console.log(greeting);