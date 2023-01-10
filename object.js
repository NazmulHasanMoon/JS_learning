const person ={
    firstname: "Nazmul",
    lastname: "Hasan",
    birth: 1996,
    fullname: function(){
        return this.firstname+' '+this.lastname;
    }
};
console.log(person.fullname());
class Person{
    constructor(name,b_year){
        this.fname = name;
        this.year = b_year;
    }
    age=()=>{
        let date = new Date();
        return date.getFullYear()-this.year;
    };
}
let mySelf = new Person(person.fullname(),1996);
console.log(mySelf.age());