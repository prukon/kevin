console.log(Boolean(5));

//Все это передает false
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

console.log("____________________");

var s = " "
if (s) {
    console.log("Hello,World");
}
console.log("");

var s = ""
if (s) {
    console.log("Hello,World");
}

console.log("____________________");

console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(true || true);
console.log(true);
console.log(!true);


console.log("____________________");
var isTrue = true;
a=0;
isTrue && (a = 5);                      //Присвоение происходит только при условии истины в левом операнде
console.log(a);

console.log("____________________");
var isTrue = false;
a=0;
isTrue && (a = 5);
console.log(a);

console.log("____________________");
var someString = "Некоторый текст";
var newString  = someString || "Значение по умолчанию"; //при истине а левом операнде выводим сразу же его без проверки второго
console.log(newString);

console.log("____________________");
var someString = "";
var newString  = someString || "Значение по умолчанию"; //при НЕистине а левом операнде выводим правый операнд
console.log(newString);