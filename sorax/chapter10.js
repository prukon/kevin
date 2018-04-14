//if (выражение) инструкция
if (true) console.log("hello, world");
var n=2;
if (n>3) {
    n *= 4;
    console.log(n);
}
else  {
    n *= 40;
    console.log(n);
}
console.log("_______________");
var name = "Женя", homesity;

if (name === "Женя") {
    homesity = "Санкт-Петербург"
}
else if (name === "Вася") {
    homesity = "Киров"
}
console.log(homesity);

//switch (выражение) {
//    case выражение : инструкции
//    case выражение : инструкции
//    default : инструкции
//}

switch  (name) {
    case "Женя" : homesity = "Санкт-Петербург"; break;
    case "Вася" : homesity = "Киров"; break;
    default : homesity = "неизвесный город";
}