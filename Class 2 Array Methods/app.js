
///////////////////// Array Methods////////////
//Join 
//lastIndexOf 
//Join    //join all elemnt into string
//Slice  //Extract a portion of array and return a new array
//Spread Operator
//Array.From
//Push
//Pop
//Concat
//Splice

let email = "ansishfaq725@gmail.com";
let lastLetter = email.lastIndexOf("a");
console.log(lastLetter);

// slice (from , to) //Extract a portion of array and return a new array
console.log(email.slice(0,5))

//Join

let array = ["ans","sibi","baba","mama"]
console.log(array.join(""))

//Copy An Array
// 1 Create new array
// 2 Assigns the vales of previos array to new array
// 3 Medium => Spread Operator , Slice  , Array.from()


let array1 = ["ans","sibi","baba","mama"]
let newArray1 = [...array1]
// let newArray2 = array1.slice();
// let newArray3 =  Array.from(array1);
console.log(newArray1)
console.log(array1.join("").lastIndexOf("m"))

// Push
let arrayTwo = ["Apple","Mango","Banana","Orange"]
let addedEle = arrayTwo.push("Pine Apple");
console.log(arrayTwo)



//pop (Destructive Method)
//Destructuve Method (A destructive method, also known as a mutative method, is a method that modifies the original data structure that it is called on. )

//push(), pop(), shift(), and unshift() methods for arrays, as well as the delete operator for objects, are all destructive methods because they modify the original array or object.

//pop() method is a destructive method in JavaScript because it modifies the original array by removing its last element.

let remove = arrayTwo.pop("Pine Apple");
console.log(arrayTwo)
//If array is empty pop will returun undefine

//Note When you call the pop() method on an array, it removes the last element from that array and returns the removed element. This means that the original array is permanently changed - the length of the array is decreased by one, and the last element is removed.



//concat
//In JavaScript, the concat() method is used to combine two or more arrays into a new array. It does not modify the original arrays, but instead returns a new array that contains all the elements from the original arrays.

//The concat() method takes one or more arrays as arguments, and returns a new array that contains all the elements from the original arrays in the order they were passed in as arguments.

const array11 = [1, 2, 3];
const array22= [4, 5, 6];
const array33 = [7, 8, 9];

const newArray = array11.concat(array22, array33);

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newConcat = arrayTwo.concat("Hello","Hi","Ans")
console.log(newConcat)
const first = "ans";
const second = "Ishfaq"
const concat = first + second;
console.log(concat)

// let newConcat2 = arrayTwo.concat("HOla")
// console.log(newConcat2)

// //Splice

let fruits = ["Orange","banana","Pear","melon"];
console.log(fruits);
let deduct = fruits.splice(1,0,"mango")
console.log(fruits)


const fruits2 = ['apple', 'banana', 'cherry', 'date'];

// Remove 'banana' and 'cherry' from the array starting at index 1, and insert 'kiwi' and 'lemon' in their place.
fruits2.splice(0,0, 'kiwi', 'lemon');

console.log(fruits2); // Output: ['apple', 'kiwi', 'lemon', 'date']



