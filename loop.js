const arr = ["Md","Nazmul","Hasan","Moon"];
let len = arr.length;
for(let i=0;i<len;i++){
    console.log(arr[i]);
}
for(let key in arr){
    console.log(arr[key]);
}
const personObj = {
    firstName:"Md Nazmul",
    midName:"Hasan",
    lastName:"Moon",
    age:26
};
for(let key in personObj){
    console.log(personObj[key]);
}
arr.forEach((value,index)=>{
    console.log("index:"+index+";value:"+value);
});

arr.forEach((value)=>{
    console.log(value);
});

Object.keys(personObj).forEach(key=>{
    console.log(key,personObj[key]);
});

Object.values(personObj).forEach(value=>{
    console.log(value);
});

Object.entries(personObj).forEach(entity=>{
    const [key,value] = entity;
    console.log(key,value);
})

for(let value of arr){
    console.log(value);
}
while(--len){
    console.log(arr[len]);
}
let i=0;
while(arr[i]){
    console.log(arr[i]);
}