//throw "hello"

var func = function(n){
    if (n>10) throw new Error("Привет. У тебя ошибка");

    n+15;
    return n;
};
//func(16);

//Обработчик исключений
//try {
//    инструкции
//} catch (идентификатор) {
//    инструкции
//} finally {
//    инструкции
//}

try {
    func(20);
}
catch (e){ console.log("Ошибка. " + e.message);
}



