// cast to number
let x = Number(Math.PI);
console.log(x);
x = Number("3.1416");
console.log(x);//3.1416
x = Number(""); // 0
x= Number("    "); // 0
x = Number("Nazmul"); // NaN
console.log('Value of x:'+x+'\nType of x:'+typeof(x));
x = Number(false); //0
x = Number(true); // 1
console.log(x);
let y = "Hasan";
console.log('Type of y:'+typeof(y));
y = + y; // unary + operator can be used to convert a variable to a number
console.log('Type of y:'+typeof(y)+'\nValue of y:'+y);// number, NaN


//cast to String
y = String(y);
console.log('Type of y:'+typeof(y)+'\nValue of y:'+y);// String, NaN
x = String(x)+1; //11;
console.log(x);
let z = (1+1).toString(); // 2
console.log(z);
console.log(Date().toString());
console.log(String(Date()));
z = new Date("2022-12-25");
console.log(z.getDate());
console.log(z.getDay()); // weekday a number (0-6)
console.log(z.getMonth());
console.log(z.getFullYear());
console.log(z.getHours()); // hour (0-23)
console.log(z.getMinutes());
console.log(z.getSeconds());
console.log(z.getMilliseconds());
console.log(z.getTime());
console.log(String(false));// convert bool to string
console.log(true.toString());// true