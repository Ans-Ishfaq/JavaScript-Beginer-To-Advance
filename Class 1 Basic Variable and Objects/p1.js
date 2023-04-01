
// Variable 
// Var Let Const

//Three Conepts 
//1 Scope  ( Block Functional Global )
//2 Reassigning a Value     (     )
//3 When we acess a variable before declaring it

// Scope  
// Where and wether we can use a variable inside a function/block Or Outside a Function/Block 
// Block => { let name="Ans" }
// Function => function name(){ let name = "Ans" }
// Anything that lies outside a function or block is Global

//Block
{
    var height = 6;
    let myName="Ans";
    const age = 21;
    // console.log(myName)

}

console.log(myName) // ERROR 
console.log(age)  // 6
console.log(height)  // ERROR


//Functional Scope

function myData(){
    var height = 7
    let myName = "Ans1"
    const age =22;
    
console.log(height)
}

myData();

console.log(height)  //ERR
console.log(age)     // ERR
console.log(myName)  // ERR

// Global Scope

var height = 7
let myName = "Ans1"
const age =22;

function myData2(){
    console.log(height)
    console.log(myName)
    console.log(age)
}

myData2();

// console.log(height)
// console.log(myName)
// console.log(age)


// Reassigning A Value

var height = 8;
let myName3 = "Ans";
const age1 = 23;


height = 89; //age is 89
myName3 = "Ans1"; //  name is Ans1
age1 = 25; // uncaught type error

console.log(myName3)


//*** Const => when a object is declared and reassign a value with const 
// we can still change the properties
//But we cant reassign another object value  to same varble

//Eample

const Uni ={
    'Name':"Cui Sahiwal"
}
console.log(Uni["Name"])
console.log(Uni.Name)

Uni.Name = "COMSATS Sahiwal" //Allowed
console.log(Uni.Name)

Uni = {'City':"Okara"}
console.log(Uni.City)

// Accessing A  Varible Before Declaring Iy

//*** Never try to access a variable without declairng it





///////////////////////////////////////////// O bject //////////////////////////////////

let firstArray=["ans","harry","sibi","baba"];
console.log(firstArray)

console.log(firstArray[2])
console.log(firstArray.indexOf("sibi"))
console.log(firstArray.length)
console.log(firstArray.join(' ')) // join all elemnt into string
