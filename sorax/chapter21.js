var Person, person, anotherPerson, Developer, developer;

Person = function (name) { //создание конструктора (класса)
    return this.name = name;
};
//Свойство prototype доступно только функциям!
Person.prototype.greet = function () { //через  .prototype можно вешать любые свойства и методы
   return "Hello, my name is " + this.name;
};
person = new Person("Jack"); //создание экземпляра класса (объекта)
console.log(person.name);
person.greet();
console.log(person.constructor); //всем объектам созданным на основе класса конструктора присваивается свойство constructor
console.log(Person.prototype.constructor); //в том числе и пототипу объекта
anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);
anotherPerson.greet();
console.log("_____________________");
//Бинарный оператор instanceof
console.log(anotherPerson instanceof Person); //Проверка принадлежности объекта к классу
console.log(Person.prototype.isPrototypeOf(anotherPerson)); //аналогичная проверка к пренадлежности к классу
//-------------------
//создание нового класса
Developer = function(name, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
};
Person.prototype.hello = function () { //через  .prototype можно вешать любые свойства и методы
    return "Hello " + this.name;
};
console.log(Developer.prototype); //Developer Сразу после создания класса
//-------------------
Developer.prototype = Object.create(Person.prototype); //наследование
Developer.prototype.constructor = Developer;
developer = new Developer("John", ["php" , "mysql", "js"]); //создание объекта
console.log(developer.name);
console.log(developer.skills); 
console.log(developer.greet());
console.log(developer.hello());
console.log(developer instanceof Developer);  //developer является объектом класса Developer
console.log(developer instanceof Person);     //developer является объектом класса Person
console.log("_____________________");
console.log(Person.prototype);
console.log(Developer.prototype); //Developer После наследования
console.log("_____________________");

console.log(Object());     //Все функции наследуются от класса Object, который определен функцией (конструктором) Object
console.log(Object.prototype);

console.log(developer.toString());      //метод toString наследуюется от Object. Вызывается когда выполняется приобразование в строку
console.log("" + developer);            //при преобразовании в строку вызывается метод toString
Person.prototype.toString = function() {    //переопределение метода toString
    return this.name;
};

console.log("" + developer);            //метод toString возвращает новое значение
console.log("My name is " + developer);    //метод toString возвращает новое значение
var func = function(a) {
    return a+ 10;
};
console.log(func.toString());            //toString  возвращает исходный текст функции
console.log("_____________________");
console.log(developer.valueOf());       //метод valueOf наследуюется от Object. Вызывается когда выполняется приобразование в число
console.log(+developer);            //при преобразовании в число вызывается метод valueOf
Person.prototype.valueOf = function() {    //переопределение метода valueOf
    return 100;
};
console.log({}.toString()); //вызов toString у объекта. таким образом можно определить класс объекта

var func2;
func2 = function(a) {
    return a+ 10;
};