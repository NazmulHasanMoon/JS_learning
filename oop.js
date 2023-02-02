class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return "Name of this person is "+ this.name +" and age is "+this.age;
    }
}
const person1 = new Human("Nazmul",27);
const person2 = new Human("Sohag",27);
console.log(person1.getInfo());
console.log(person2.getInfo());