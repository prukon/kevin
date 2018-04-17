var a = 10, b = 20;
a = b;
b = 15;
console.log(a); //a не изменилось
console.log("____________________________");
var a ={x:10};
var b ={x:20};
a = b;
b.x = 15;
console.log(a.x);    //a.x изменилось!
a.x = 35;
console.log(b.x);   //b.x изменилось!
console.log("____________________________");
//создание прототипа
var ObjectProto = {
    name: "prukon"
};
var object = Object.create(ObjectProto);
console.log(object.name);
//Обычное написание объектов
console.log("____________________________");
var person ={
    name: "John",
    age:35,
    gender:"male",
    greet: function () {
        console.log("Hi, my name is "+ this.name);
    }
};
var person1 ={
    name: "Bob",
    age:30,
    gender:"female",
    greet: function () {
        console.log("Hi, my name is "+ this.name);
    }
};
console.log(person.name);
console.log(person1.name);
//Написание объектов с учетом наследования
console.log("____________________________");
var Person = {
    construktor: function (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet:function () {
        console.log("Hi, my name is "+ this.name);
    }
};
var person4, person5, person6;
    person4 = Object.create(Person).construktor("Вася",22,"male");
    person5 = Object.create(Person).construktor("Петя",20,"male");
    person6 = Object.create(Person).construktor("Оля",19,"famale");

console.log(person4.name);
console.log(person5.name);
console.log(person6.name);
console.log(person4.age);
console.log(person5.age);
console.log(person6.age);
person4.greet();
person5.greet();
person6.greet();
console.log("____________________________");
//определение, является ли прототипом объект
console.log(Person.isPrototypeOf(person5));

console.log("____________________________");
var WebDeveloper = Object.create(Person);
WebDeveloper.construktor = function (name, age, gender, skills) {
    Person.construktor.apply(this, arguments);
    this.skills = skills || [];
    return this;
};
WebDeveloper.develop = function() {
    console.log("working...");
};
var developer = Object.create(WebDeveloper).construktor("Jack", 21, "male", ["html", "css", "js", "php", "mysql"]);

console.log(developer.skills);
developer.develop();
console.log(developer.name);
console.log(developer.age);

developer.greet();