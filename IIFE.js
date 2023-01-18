let arr = ['Nazmul','Hasan'];
((arr)=>{
    arr.push('Moon');
    // console.log(arr);
})(arr);
console.log(arr);
(function callByRef2(arr){
    arr.pop();
})(arr);
console.log(arr);
