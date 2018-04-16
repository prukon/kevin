var person = {
    name: "prukon",
    _age: 20,
    get age(){
        return this._age;
    },
    set age(value){
        this._age = value < 0 ? 0 : value >122 ? 122 : value;
    }
};
person.age = 180;
console.log(person.age);
person.age = -80;
console.log(person.age);
person.age = 34;
console.log(person.age);
console.log("__________________");
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));
Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,    //Отвечает за перезапись атрибута
    enumerable: false,  //отвечает за вывод атрибута
    configurable: false //определние возможности изменения вышеуказанных атрибутов
});
console.log(person.gender);
person.gender = "female"; //writtable false не дает перезаписать значение
console.log(person.gender);
console.log("__________________");
for (property in person){
    console.log(property); //enumerable false не выводит значение
};
console.log("__________________");
console.log(Object.keys((person))); //вывод значений объекта
console.log(person.propertyIsEnumerable("gender"));
console.log("__________________");
//определение объекта с учетом, включения writable
var o = {};
Object.defineProperties(o, {
    x: {
        value: 10,
        writable: false
        },
    y: {
        value: 20,
        writable: false
    },
    r: {
        get: function (){
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
});
o.x = 16;
console.log(o.r);
console.log("__________________");
var obj = {
    a: 10
};

Object.preventExtensions(obj); //блокировка расширяемости объекта
console.log(Object.isExtensible(obj)); //проверка расширяемости
console.log("__________________");
Object.seal(obj); //блокировка расширяемости объекта и установка configurable false
console.log(Object.isSealed(obj)); //проверка включения Object.seal
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
console.log("__________________");
Object.freeze(obj);
console.log(Object.isFrozen(obj)); //провера Frozen
console.log(Object.getOwnPropertyDescriptor(obj, "a")); //блокировка расширяемости объекта и установка configurable false

