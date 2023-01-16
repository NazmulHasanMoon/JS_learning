let person={
    fName:'Nazmul',
    lName: 'Hasan',
    name: function(){
        return this.fName+' '+this.lName;
    }
};
let fun = function (id){
    return 'Hello '+this.name()+". Your id is "+id;
};
console.log(fun.call(person, 61));

function human(fName,lName,gender,religion,age){
    this.name=fName+' '+lName;
    this.gender=gender;
    this.religion=religion;
    this.age=age;
}
function student(fName,lName,gender,religion,age,id,dept){
    human.call(this,fName,lName,gender,religion,age,id,dept);
    this.id=id;
    this._dept=dept;
}
let std1 = new student('Nazmul','Hasan','Male','Islam',26,2061,'CSE','Programmer');
console.log(std1);
class teacher{
    constructor(fName,lName,gender,religion,age,id,dept,designation){
        student.call(this,fName,lName,gender,religion,age,id,dept);
        this.designation=designation;
    }
}
let tec = new teacher('Zakaria','Ziko','Male','Islam',26,20001,'CSE','Lecturer');
console.log(tec);