// Алфавит
var symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];
// console.log(symbols.length);
// Смещение
var shift = 10;
var newsimvol = 0;
// Закодированное сообщение
var encodedMessage = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

// Раскодированное сообщение
var decodedMessage = '';
for (var i = 0; i <= (encodedMessage.length - 1); i++) {
    if (((encodedMessage[i] + shift) >= (symbols.length))) {
        decodedMessage += (symbols[(encodedMessage[i] + shift) - (symbols.length)]);
        console.log((symbols[(encodedMessage[i] + shift) - (symbols.length)]));
    }
    for (var n = 0; n <= (symbols.length - 1); n++) {
        if (((encodedMessage[i] + shift) === n)
        ) {
            decodedMessage += symbols[n];
        }
    }
}
console.log(decodedMessage);
