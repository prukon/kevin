console.log(5 + "5");
console.log(typeof  (5 + "5"));
console.log("5" * "4");
console.log(typeof ("5" * "4"));
console.log("5" * "hi");
console.log(typeof ("5" * "hi"));
console.log("________________________");
console.log("5" == 5);          //true
console.log("0" == false);      // true
console.log(Boolean("0"));      // true
console.log("________________________");
console.log(null == false);      //false
console.log(null == true);       //false
console.log(Boolean(null));      //false
console.log("________________________");
console.log(undefined == false);    //false
console.log(undefined == true);     //false
console.log(undefined == null);     //true
console.log("________________________");
console.log(Number("5"));
console.log(typeof (Number("5")));
console.log(String(123));
console.log(typeof (String(123)));
console.log(Boolean(0));
console.log(typeof (Boolean(0)));
console.log("________________________");
console.log(!!5);
console.log(typeof !!5);                //быстрое приобразование в булевый тип
console.log(345 +"");                   //быстрое приобразование в строку
console.log(typeof (356 + ""));
console.log(+"123");                   //быстрое приобразование в число
console.log(typeof (+"123"));
console.log("________________________");
var n = 340;
console.log(n.toString(2));
console.log(typeof n.toString(2));      //метод преобразования в строку  указанием системы счисления
console.log(false.toString());
console.log(typeof  false.toString());
console.log("________________________");
console.log(parseInt("108 px", 10));     //парсинг числа
console.log(parseFloat("12.34 em"));     //парсинг десятичной дроби