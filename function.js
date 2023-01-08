let hello = fun();
console.log(hello);
function fun(){
    return "hello world!";
}
hello = ()=>{
    return "hello Bangladesh";
}
console.log(hello());

hello = ()=>"hello Nazmul";
console.log(hello());
let y = "nazmul";
hello = (val)=>"hello "+val;
console.log(hello(y));
hello = function(){
    return "Hello Folks";
}
console.log(hello());
function myFunction(){
    let x = document.getElementById("username").value;
    console.log(x);
    document.getElementById("demo").innerHTML = x;
}