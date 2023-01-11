// Primitive datas are immutable/not changeable
// Primitive data types are: String, Numbers, Boolean, Null, undefined, BigInt
let str = "Nazmul";
str[1]='A';
console.log(str);//Nazmul
let str2 = str.toUpperCase();
console.log(str2,str);
var num1 = 3;
var num2 = num1;
console.log(num1,num2);
num2 = 4;
console.log(num1,num2);
function myFun(param1){
    param1 = param1+2;
    console.log(param1);
}
myFun(num1);
console.log(num1);
myFun(str);
console.log(str);
