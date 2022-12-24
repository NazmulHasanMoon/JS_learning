//Numbers always 64-bit (double type by default)
let a = 1e6; // 1000000
var b = 1344e-2; // 13.44
const c = 14151;
console.log(typeof(a)); //number
console.log(a+' '+b+' '+c);

//String
let _str1 = 'Nazmul';
var _str2 = 'Hasan';
const _str3 = '(Moon)';
console.log(_str1+' '+_str2+' '+_str3);

//Boolean
let flag = true;
let flag2 = false;
console.log(flag);

//Object
let Name = {
    firstname : 'Nazmul',
    lastname : 'Hasan',
    eyecolor : 'black',
    age : 26
};
console.log(Name.firstname);
console.log(Name["lastname"]);
// Date
const b_date = new Date("1996-01-23");
console.log(b_date);

//BigInt
let num1 = 4e18;
let num2 = 2;
let num3 = BigInt(num1**num2); // exponentiation
console.log(num3);