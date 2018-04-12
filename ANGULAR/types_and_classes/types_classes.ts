// myNum = 5;
const myNum: number = 5;

// myString = "Hello Universe";
const myString: String = "Hello Universe";

// myArr = [1,2,3,4];
const myArr: Array<number> = [1,2,3,4];

// myObj = { name:'Bill'};
const myObj: object = { name: 'Bill'};

// anythingVariable = "Hey";
var anythingVariable: any = "Hey"; 

// anythingVariable = 25; 
var anythingVariable: any = 25;

// arrayOne = [true, false, true, true]; 
const arrayOne: Array<Boolean> = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
const arrayTwo: Array<any> = [1, 'abc', true, 2];

// myObj = { x: 5, y: 10 };
var myObj1: object = { x: 5, y: 10};

// // object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());

class MyNode {
        val: number;

        constructor(value: number){
            this.val = value;
        }

        _priv: number;
        doSomething(){
            this._priv = 10;
        }
}

// myNodeInstance = new MyNode(1);
let myNodeInstance = new MyNode(1);

// console.log(myNodeInstance.val);
console.log(myNodeInstance.val);

// function myFunction() {
//     console.log("Hello World");
//     return;
// }
function myFunction(): void {
    console.log("Hello World");
}

// function sendingErrors() {
// 	throw new Error('Error message');
// }
function sendingErrors(): never {
    throw new Error('Error message');
}