//Can we make this into a method of an object?
// function each(arr, callback) {
//     // loop through the array
//     for(var i = 0; i < arr.length; i++) {
//       callback(arr[i]); // invoking the callback many times... delegation!
//     }
//   }
  

var _ = {
    map: function(arr, cb) {
        //code here;
        var result = [];
        for(let i = 0; i < arr.length; i++){
            result.push(cb(arr[i], i))
        }
        return result;
    },
    reduce: function(arr, cb, memo) { 
        // code here;
        for(let i = 0; i < arr.length; i++){
            memo = cb(arr[i], memo)
        }
        return memo;
    },
    find: function(arr, cb) {   
        // code here;
        for(let i = 0; i < arr.length; i++){
            if(cb(arr[i])){
                return arr[i];
            }
        }
    },
    filter: function(arr, cb) { 
        // code here;
        var result = [];
        for(let i = 0; i < arr.length; i++){
            if(cb(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    },
    reject: function(arr, cb) { 
        // code here;
        var result = [];
        for(let i = 0; i < arr.length; i++){
            if(!cb(arr[i])){
                result.push(arr[i]);
            } 
        }
        return result;
    }
  }
 // you just created a library with 5 methods!
 
 console.log(_.map([1,2,3], function(elem, idx){
    console.log(`Element: ${elem}, Index: ${idx}`)
    return elem * 3;
 }))

 console.log(_.reduce([1,2,3], function(memo, num){
    return memo + num;
 }, 0))
 
 console.log(_.find([1,2,3], function(num){
    return num % 2 == 0;
 }))

 console.log(_.filter([1,2,3,4,5,6], function(num){
    return num % 2 == 0;
 }))

 console.log(_.reject([1,2,3,4,5,6], function(num){
    return num % 2 == 0;
 }))