//замыкания и построение счетчиков
//Пример 1
var func = function(){
    var i = 10;
    return function(){
        return i;
    }
};
var newfunc  = function(){
    var i = 20;
    console.log(func()());
};
newfunc();
console.log("_____________________");
//Пример 2
var func = function(){
    var i = 10;
    return function(){
        return i;
    }
};
var myfunc = func();
var newfunc  = function(){
    var i = 20;
    console.log(myfunc());
};
newfunc();
console.log("_____________________");
//Практический пример (создание счетчика)
var counter = function(num){

    var count = 0;
    return function(num){
        //count = num !==undefined ? num : count;
        if (num !==undefined) {
            count = num
        }
        return count++;
    }
}();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log("_____________________");
//такой же счетчик без замыкания
var counter = function(num){

    //counter.count = num !== undefined ? num : counter.count;
    if (num !== undefined) {
        counter.count = num
    }
    return counter.count++;
};
counter.count = 0;
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());




