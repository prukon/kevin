//уроки
var movie = "Залоговок h1";
var one = "Hello, World";
////Обращение к элементу через ID
//document.getElementById("movie").innerHTML = movie;
//
////Обращение к элементу через ID (QUERY)
//$("#myid").text("Обращение через id");
//
////Обращение к элементу через класс (QUERY)
//$(".myclass").text("Обращение через класс");
//
////Затухание (QUERY)
//$('#movie, #main').fadeOut('slow');


document.getElementsByClassName("myclass")[0].innerHTML = one;
console.log(document.getElementsByClassName("myclass"));