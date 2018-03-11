function magic_multiply(x, y){
    // --- your code here ---
    if(typeof x == "number" && typeof y == "number"){
        x *= y;
    }
    else if(typeof x == "object" && typeof y == "number"){
        for(let i = 0; i < x.length; i++){
            x[i] *= y;
        }
    }
    else if(typeof y == "object" && typeof x == "number"){
        for(let i = 0; i < y.length; i++){
            y[i] *= x;
        }
        return y;
    }
    else if(typeof x == "number" && typeof y == "string"){
        return "Error: Can not multiply by string"
    }
    else if(typeof y == "number" && typeof x == "string"){
        let tempStr = ""
        for(let j = 0; j < y; j++){
            tempStr += x;
        }
        return tempStr;
    }
    return x;
}

// Test 1
// In order to make this test pass, we will need to add logic to magic_multiply. 
// Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. 
// Remember, we must use these specific inputs!

let test1 = magic_multiply(5, 2);
console.log(test1);

let test2 = magic_multiply(0, 0);
console.log(test2);

// Hint: You will need to handle your output differently depending on if x is an array or an integer.
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);


