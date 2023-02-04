class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return "Name of this person is "+ this.name;
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