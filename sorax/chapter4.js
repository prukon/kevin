/**
 * Created by prukon on 03.04.18.
 */
console.log("hello,World")
//Простые типы
var myNumber = 123,
    myString = "Привет",
    myBool = true,
    myNull = null,
    myUndef = undefined;

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull); //бага js. Неверный тип
console.log(typeof myUndef);
console.log("");

//Объектные типы
var myObj = {name:"prukon"},
    myArray = [1,2,3],
    myRegexp = /w+/g,
    myFunc = function(){};

console.log(typeof myObj);
console.log(typeof myArray);
console.log(typeof myRegexp);
console.log(typeof myFunc);

//изменение объекта
console.log("");
console.log(myObj);
myObj.name = "Nastya";
console.log(myObj);

//изменение массива
console.log("");
console.log(myArray);
myArray[1] = "100";
console.log(myArray);

