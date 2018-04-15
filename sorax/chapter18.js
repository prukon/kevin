//создаем объект с использованием this
var person = {
        name: "John",
        greet: function(){
        return "Hi, my name is " + this.name;
        }
};
console.log(person.greet());
console.log("_________________________");
var greet1 = function(){
    return "Hi, my name is " + this.name;
};
//использует метод с this в объекте
var person1 = {
    name: "Bob",
    greet: greet1
};
var person2 = {
    name: "Maly",
    greet: greet1
};
console.log(person1.greet());
console.log("_________________________");

var func = function(n){
    return n + "Hi, my name is " + this.name;
};
var people = {
        name:"Kate",
        meeting: func
};
var people2 = {
    name:"Nastya",
    meeting: func
};

console.log(people.meeting("123 "));
console.log(people2.meeting.call(people, "Hello "));    //Обращаемся к другому обекту в  методе, в котором используется this и передаем значение аргумента
console.log(people2.meeting.apply(people, ["Hello "]));    //Обращаемся к другому обекту в  методе, в котором используется this и передаем значение аргумента
console.log("_________________________");
//bound определяет заранее с каким объектом связывать функцию
var bound = func.bind(people2);
console.log(bound("Hello, World"));