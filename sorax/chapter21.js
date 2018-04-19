var Person, person, anotherPerson;

Person = function (name) {
    return this.name = name;
};


Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};


person = new Person("Jack");
console.log(person.name);
person.greet();

anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);
anotherPerson.greet();
