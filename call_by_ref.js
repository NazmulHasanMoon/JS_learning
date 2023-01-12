// Non-primitive data types are: Object, Array
// Non-primitive data are mutable/updateable
let arr = ['Nazmul','Moon'];
let arr2 = arr;
arr2[1]='Hasan';
console.log(arr);
function callByRef(arr){
    arr.push('Moon');
}
callByRef(arr);
console.log(arr2);
(function callByRef2(arr2){
    arr.pop();
})(arr2);
console.log(arr);
let obj ={
    name: 'Nazmul',
    age: 26
};
let obj2 = obj;
obj2.name = 'Moon';
console.log(obj.name, obj.age);
console.log(obj === obj2);
function myFun(person){
    person.age = 26;
}
myFun(obj);
console.log(obj.age);