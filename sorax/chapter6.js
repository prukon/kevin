var myLine =  "Hello, World";
console.log(myLine.length);                     //расчет длины строки
console.log(myLine.charAt(0));                  //Вывод определнного символа
console.log(myLine[0]);                         //Вывод определнного символа (Обращение как к массиву)
console.log(myLine.charAt(myLine.length-1));    //Определние последнего символа
console.log("");
console.log(myLine.substring(3,5));             //Начальный символ и конечный символ
console.log(myLine.slice(-5));                  //Определние начала строки
console.log(myLine.substr(3,2));                //Начальный символо и количество символов
console.log("");
console.log(myLine.indexOf('r'));                 //Определние индекса символа с начала
console.log(myLine.lastIndexOf('W'));             //Определние индекса символа
console.log(myLine.indexOf('Wo'));                //Определение индекса символов
console.log("");
console.log(myLine.replace("World", "Hell"));     //Замена текста
console.log(myLine.split(" "));                   //Разделение строк на массив
console.log(myLine.toUpperCase());                   //Приведение к верхнему регистру строк на массив
console.log(myLine.toLowerCase());                   //Приведение к нижнему регистру
