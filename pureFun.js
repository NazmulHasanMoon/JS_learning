function pure() {
    let val1 = 6;
    let val2 = 4;
    return val1 * val2;
}
let ans = pure();
console.log(ans);

const impureAssoc = (key, value, object) => {
    object[key] = value;
};
const person = {
    name:'Bobo'
};
const result = impureAssoc('shoeSize', 400, person);
console.log({person,result});

const pureAssoc = (key,value,object)=>({
    ...object,
    [key]:value,
});
const result2 = pureAssoc('Age', 25, person);
console.log({person,result2,});