    console.log(a);// undifined
    var a=1; // life cycle entier the function
    console.log(a);// 1
    // console.log(b); // error
    let b=2; // block scoped
    b=3;//valid
    console.log(b);//3
    var a=3; // valid
    a=4;//valid
    console.log(a); // 4
    //let b=4; // error
    const c=123;
    console.log(c);
    //c=12;// error
    // Identifier must start with either a letter or usderscore (_) or dollar sign ($).
    var name = 'Nazmul';
    let _midname = 'Hasan'; // JS treats _ as a character, this is a valid identifier.
    const $lastname = 'Moon'; // $ can be a valid identifier in JS
    name += _midname + $lastname; // string concatination.
    console.log(name);
    let _midName = 'H'; // valid. _midname and midName are two different variable.
    // As JS identifiers are case sensitive.
    console.log(_midName +' '+_midname);