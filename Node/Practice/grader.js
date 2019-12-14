function average(array) {
    var sum = 0;
    array.forEach(element => {
        sum += element;    
    });
    av = sum/array.length;
    return Math.round(av);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(average(scores));
console.log(average(scores2));