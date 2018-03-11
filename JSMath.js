// Assignment: JavaScript Math
// Complete the below challenges using JavaScript's Math object.


// Math 1
// Write a function called zero_negativity(). This function should take an array. 
// Return true if the input array contains no negative numbers, return false if it does.

function zero_negativity(arr){
    for(let i = 0; i < arr.length; i++){
        if(Math.sign(arr[i]) == -1){
            return false;
        }
    }
    return true;
}

let myArr = [4,6,-6,4]
console.log(zero_negativity(myArr))

// Math 2
// Write a function called is_even(). This function should take a number. 
// Return true if the input number is even, return false if the number is odd.

function is_even(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}

let myNum = 57
console.log(is_even(myNum))
// Math 3
// Write a function called how_many_even(). This function should take an array. 
// Return the total number of elements in the array that are even. You may call is_even() to solve this.

function how_many_even(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(is_even(arr[i])){
            count++;
        }
    }
    return count;
}

let myArr1 = [4,6,-6,4,7,9,8]
console.log(how_many_even(myArr1))

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. 
// Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(n){
    let newArr = []
    for(let i = 0; i < n; i++){
        newArr.push(Math.floor(Math.random() * 10))
    }
    return newArr;
}

console.log(create_dummy_array(5))

// Math 5
// Write a function called random_choice(). This function should take an array. 
// Return a random element of the array, based on its length. This function should never return undefined.

function random_choice(arr){
    let idx = Math.floor(Math.random() * arr.length)
    return arr[idx];
}

let myArr2 = [4,6,-6,1,3,9]
console.log(random_choice(myArr2))