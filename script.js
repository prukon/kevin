
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