let num = 123.45;
console.log(num.toExponential(2)); //returns a string, with a number rounded and written using exponential notation.
console.log(num.toExponential(5));
console.log(num.toFixed(5)); //returns a string, with the number written with a specified number of decimals
console.log(num.toPrecision(5)); //returns a string, with a number written with a specified length
console.log(num.valueOf()); // returns a number as a number.
console.log((num+123).valueOf());
console.log(Number(true)); //Returns a number converted from its argument.
console.log(Number(" 1234  "));
console.log(Number(" 12,34 "));
console.log(Number(new Date("1970-01-02"))); //The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000
console.log(parseInt("124.45")); //Parses its argument and returns a whole number
console.log(parseInt(num));
console.log(parseFloat("124.45")); //Parses its argument and returns a floating point number
console.log(parseFloat(num));
console.log(Number.isInteger(num)); //Returns true if the argument is an integer
console.log(Number.isSafeInteger(123)); //Returns true if the argument is a safe integer