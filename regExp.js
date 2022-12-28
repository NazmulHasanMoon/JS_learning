let text = "Nazmul hasan Moon SE\nSE at BJIT\nE_Id: 11291\nBSc (Engg) in CSE at HSTU\nemail: hasan.mdnazmul@bjitgroup.com";
console.log(text);
let n = text.search('bjit');
console.log(n);
n = text.search(/bjit/i); //use i to get the 1st occurance of the string in case insensetive manner.
console.log(n);
console.log(text.match(/^SE/m)); // perform multiline matching
console.log(text.match(/SE/g)); // perform global matching...all matches
console.log(text.match(/[asn]/i)); //Find any of the characters between the brackets (1st match as of i modifier)
console.log(text.match(/[1-5]/g)); //Find any of the digits between the brackets and for 'g' this is a global mathcing
console.log(text.match(/[b-m]/i));
console.log(text.match(/(moon|hasan)/g)); // Find any of the alternatives separated with |
console.log(text.match(/\d/g)); //global search for digits
console.log(text.match(/\s/m)); // 1st match of whitespace character
console.log(text.search((/\b@bjit/))); //Find a match at the beginning of a word
console.log(text.search(/san\b/)); //Find a match at the end of a word
console.log(text.match((/\bmdnazmul@/m)));
console.log(text.match((/\u09/g))); //global search for the hexadecimal number 09
console.log(text.match(/mu+/g)); //matches string that contains at least one 'u'
console.log(text.match(/mu*/g)); //matches string that contains zero or more u
console.log(text.match(/an?/g));//matches string that contains zero or one n
let pattern = /hasan/;
console.log(pattern.test(text)); //test() method is a RegExp expression method which return true/false
console.log(pattern.exec(text)); //returns the found text as an object.
