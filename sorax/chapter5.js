/**
 * Created by prukon on 04.04.18.
 */
console.log(5);             //десятичное
console.log(0xfffcc);       //шестнадцатиричное
console.log(0xbbbccc);      //шестнадцатиричное
console.log(0345);          //восмеричное
console.log(01239);         //десятичное

console.log("");
console.log(12.25);
console.log(.25);
console.log(1.35e5);        //экспонентный
console.log(10E-3);

console.log("");
var N = new Number(4000);   //создаем конструктор
console.log(typeof N);
var n = 3000;
console.log(typeof n);

console.log((N.toFixed(2)));    //вызываем метод у объекта
console.log((n.toFixed(2)));    //вызываем метод у числа
console.log((2 .toFixed(2)));   //вызываем метод у литерала

console.log("");
var n = 12.69;
console.log(n.toFixed(1));      //количество знаков после запятой
console.log(n.toExponential(1));//перевод в экспонентный вид
console.log(n.toPrecision(2));  //определние точности округления

console.log("");
console.log(-5/0);
console.log(0/0);
console.log(Infinity/Infinity);
console.log(Math.sqrt(-10));
console.log(NaN === NaN);

console.log("");
console.log(0.2+0.1); //бага
console.log(10000000000000008 + 10000000000000009); //бага