let person={
    firstName: 'Nazmul',
    lasatName: 'hasan',
    name: function(){
        return this.firstName+' '+this.lasatName;
    }
};
let student={
    firstName: 'Hasan',
    lasatName: 'Moon'
}
let fun = person.name.bind(student);
console.log(fun());
console.log(person.name.bind(student));
console.log(person.name.call(student));
console.log(person.name.apply(student));

let vehicle ={
    name: 'Car',
    fun: function(speed){
        return this.name +' can run at '+speed+'kmph';
    }
};
let plane ={
    name: 'Plane',
    fly: function(speed) {
        return this.name+' runs at '+speed+'kmph';
    }
};
console.log(plane.fly(200));
let magic = vehicle.fun.bind(plane,200);
console.log(magic());