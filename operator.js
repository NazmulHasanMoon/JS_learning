let x = 4;
// arithmatic oprators (+,-,*,/,%,**,++,--)
x++; // arithmatic incremnt
console.log(x);
let y = x%3; // Modulas
console.log(y);
y += 2; // y = y+2 (aditional assignment)
y **=3; // y = y^3 (exponentiation)
console.log(y);
y -=2;// y = y-2 substruction
x += y;
console.log(x+' '+y);
// comparison operators (==,===,>,<,<=,>=,!=,!==,?)
if(x !==y){ // not equal value or not equal type
    if(y === x-5){ // equal value and type
        if(y <x){ // less than
            y = (x-5===y)? x:y; //ternary operator
            console.log(y);
        }
    }
}

// Logical operators (&&,||,!)
if(x%2 && y%2){ // logical AND operation
    --x;
    y--;
    console.log(x+' '+y);
}
else{
    x++;
}

//Bitwise operators (&,|,~,^,<<,>>,>>>)
// and, or, not, xor, left shift, right shift, unsigned right shift
console.log((2&1));// 0
console.log((2|1));// 3
console.log(~(5)); // -6
console.log((6^2));// 4
console.log((6<<1)); //12
console.log((6>>1));//3
console.log((6>>1));//3