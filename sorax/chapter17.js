//Пример 1 создания объекта
var person = {
    name: "prukon",
    age: 28,
    gender: "male",
    seiHi: function hello(name){
        a = "Hello " + name;
        return a;
    }                    //если свойство является функцией - это ее называют методом
}
person.age = 30;
person.userID = 100;
//выражение.идентификатор
console.log(person.name);
//выражение[выражение];
console.log(person['age']);

console.log(person.seiHi("Петя"));
console.log("______________");
//Пример 2 создания объекта
var object  = new Object ();
object.property = "value";
//Пример 3 создания объекта
var object = Object.create(null);
console.log(object);

var object = Object.create({x: 10, y: 20});

object.x = 30;
console.log(object.hasOwnProperty("x"));

console.log(object);
console.log("______________");
//удаление свойства объекта
delete object.x;
console.log(object);
console.log("______________");
console.log("x" in object); //Проверка наличие свойстава объекта
console.log(object.hasOwnProperty("x")); //Проверка наличие свойстава объекта с учетом прототипов
console.log("______________");
console.log(object.z);
console.log("z" in object);
object.z = undefined;
console.log(object.z);
console.log("z" in object); //видит объявление undefined