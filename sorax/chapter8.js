console.log(typeof null);
console.log(typeof undefined);
console.log("_____________________");
var temp;
var obj ={};
var a = [1,2,3,4];
console.log(temp);                  //обращение к пустой переменной возвращает undefined
console.log(obj.property);          //обращение к несуществующему свойству объекта возвращает undefined
console.log(a[4]);                  //обращение к несуществу. индексу массива возвращает undefined

console.log("_____________________");

function greet (name) {
    return "Hello " + name;
}
console.log(greet ("Prukon"));
console.log(greet ());              //Если в функцию не передать параметры, то эти параметры будут undefined

function emptyfunc (name) {
}
console.log(emptyfunc ("Prukon"));
console.log(emptyfunc ());

console.log("_____________________");
null == undefined;
null === undefined;
