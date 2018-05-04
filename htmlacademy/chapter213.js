var qualificationDistance = 200;
var attempts = [120, 100, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;
var top;
var attempts2 = [];
var sum = 0;

for (var i = 0; i <= attempts.length - 2; i++) {
    var minValue = attempts[i];

    for (var j = i+1; j <=attempts.length-1; j++) {
        if (attempts[j] < minValue) {
            var minValue = attempts[j];
            var swap = attempts[i];
            attempts[i] = minValue;
            attempts[j] = swap;
        }
    }
}
console.log(attempts);

if (attempts.length % 2 !== 0) {
    var medianIndex = (attempts.length - 1) / 2;
    var median = attempts[medianIndex];
} else {
    var leftIndex = attempts.length / 2 - 1;
    var rightIndex = attempts.length / 2;
    var median = (attempts[leftIndex] + attempts[rightIndex]) / 2;

}
for (i = 2, j = 1; i>= 0 ; i--, j++){
    attempts2[i] = attempts[attempts.length - j];
}
// }
console.log(attempts2);
// console.log(median);
for (i = 0; i< 3  ; i++){
    sum = sum + attempts2[i]
}
console.log(sum);
averageBest = sum/attempts2.length;
console.log(averageBest);

if (averageBest > qualificationDistance) {
    qualified = true;
}
else {
    qualified = false;
}