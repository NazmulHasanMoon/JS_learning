let string = "https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/submissions/870882332/";
console.log(string.length); // return an integer number
console.log(string.slice(8,16));// (start_position,end_pos) o indexing
console.log(string.slice(8)); //start_pos to rest of the string
console.log(string.slice(-10,-1)); // negative indexing strats from the end
console.log(string.slice(-11));
console.log(string.split('/')); // returns an array of string
console.log(string.substring(8,16));// same as slice. only difference is negative indexing/parameter is not allwoed with substring method
console.log(string.substr(8,8));// start_pos, length. difference with slice method is on second parameter
console.log(string.toUpperCase());//returns string in upper case. toLowerCase() will show the opposite behaviour
console.log(string.search(/LEEtCode/i));
console.log(string.charAt(8));//returns the character at a specified index (position) in a string
console.log(string.charCodeAt(8)); // returns unicode of the character at the specified position
let str2 = "Nazmul";
str2 = str2.concat(string,str2); // joins two or more string
console.log(str2);
console.log(str2.replace('Nazmul',' ')); // replace method return string by replacing the string in 1st param with the string in 2nd param
console.log(str2);
str2 = str2.replaceAll('Nazmul',' ');
console.log(str2);
console.log(str2.trimStart()); // return string type removing the white space characters from the begning of the string. trimEnd() performs the opposite
str2 = str2.trim(); // removing white space character from both the begning and end
console.log(str2);
console.log(str2.padStart(92,'x')); // 1st param repesents what will be the length after adding the string in the 2nd param.
console.log(str2.padStart(93,'x').padEnd(95,'y'));
console.log(str2.padEnd(80,'y')); // returns the str2 as length of str2 is greater than 80. hence it is not possible to add y with the string in the specified length
