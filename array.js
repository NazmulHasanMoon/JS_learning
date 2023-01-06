let arr = ["Nazmul","Hasan"];
arr.push("Moon");
arr.unshift("Md");
console.log(arr);
arr.sort();
console.log(arr);
arr[arr.length]="abcd";
arr.splice(0,0,"abc","ab2"); // splice(index,number_of_items_need_to_be_deleted,strings)
console.log(arr);
arr.pop(); // pop_back
arr.shift(); //pop_front
console.log(arr);
arr.splice(0,1); //safely remove one element from the front.means deleted one element which is in the front(index number is 0)
console.log(arr);
console.log(arr.slice(1,3));// start,end
const str = arr.toString();
console.log(typeof(arr));
arr.push(25);
console.log(arr);
console.log(typeof(arr));
console.log(arr.join('*'));// join performs like toString but instead of , we can specify the separator symbol
arr=arr.concat(['BJIT','SF'],['HSTU','CSE']);
console.log(arr);