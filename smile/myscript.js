var movie = "Залоговок h1";
var one = "Hello, World";
//Обращение к элементу через ID
document.getElementById("movie").innerHTML = movie;

//Обращение к элементу через ID (QUERY)
$("#myid").text("Обращение через id");

//Обращение к элементу через класс (QUERY)
$(".myclass").text("Обращение через класс");

//Затухание (QUERY)
$('#movie, #main').fadeOut('slow');

//Определение количества ссылок на странице
urlcount=document.links.length;
document.write('<br> url-' + urlcount);

//Вывод всех ссылок
var s = '';
for ( i=0; i < document.links.length; i++ ){
    s += '<br><a href="' +
    document.links[i].href +
    '">' +
    document.links[i].href +
    '</a> :: ' +
    document.links[i].innerHTML;
}
document.write(s);

//Вывод всех ссылок только URL
var s = '';
for ( i=0; i < document.links.length; i++ ){
    s += document.links[i].href +'<br>' ;
}
document.write(s);

//передача данных в консоль
console.log(document.getElementsByClassName("myclass"));
//Обработка нескольких аргументов
displayItems("Пуп","Муп","Муп");
function displayItems()
{
    for (i = 0 ; i < displayItems.arguments.length ; ++i)
        document.write(displayItems.arguments[i] + "<br>")
}

//Привод аргументов в строчный вид и первой заглавной буквой
fixNames("the", "DALLAS", "CowBoys","1FeffdD")
function fixNames()
{
    var s = ""
    for (j = 0 ; j < fixNames.arguments.length ; ++j)
        s += fixNames.arguments[j].charAt(0).toUpperCase() +
        fixNames.arguments[j].substr(1).toLowerCase() + " "
    return document.write((s.substr(0, s.length-1)))
}