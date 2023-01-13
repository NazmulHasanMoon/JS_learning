let arr = ['Nazmul','Moon'];
let fun=(arr)=>{
    arr.push('Moon');
};
fun(arr);
console.log(arr);
(function callByRef2(arr){
    arr.pop();
})(arr);
console.log(arr);
