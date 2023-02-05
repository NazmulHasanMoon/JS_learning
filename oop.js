class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return "Name of this person is "+ this.name;
    }
    get pName(){
        return this.name;
    }
    get pAge(){
        return this.age;
    }
    set pAge(age){
        this.age = age;
    }
}
const person1 = new Human("Nazmul",27);
const person2 = new Human("Sohag",27);
console.log(person1.getInfo());
console.log(person2.getInfo());
console.log(person1.pAge);
person2.pAge = 28;
console.log(person2.pAge);

//inheritance
class Student extends Human{
    constructor(name,age,dept){
        super(name,age);
        this.dept=dept;
    }
    getStudentInfo(){
        return "The name of the Student is "+ this.name+". He/She is "+this.age+" and student of "+this.dept; 
    }
}
let std1 = new Student("Moon",26,"Post Graduation");
console.log(std1.getStudentInfo());
console.log(std1.pName);
console.log(std1.getInfo());