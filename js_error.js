let x=1;
try{
    if(x==="1")console.log("good");
    else throw "something is missing!!!please check and run again.";
}
catch(error){
    console.log(error);
}

let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name);
  console.log(err.message);
}
//ReferenceError 
try{
    num+=y;
}
catch(e){
    console.log(e.name);
    console.log(e.message);
}
let y=3;