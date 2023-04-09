

//Funtion Declaration
//Template Literals => " ${} "
//Function Fxpression
//Hoisting
//Parameters And Arguments
//Default Arguments
//Return Valure
// 7 Arror Function
// 8 Functions and Methods
// 9 For Loop
// 10 For Each Method And CallBack Function



function greet() {
    console.log("Hey Devs");
}
greet();


//Functiion Declaration
function student (){
    let name ="Ikram";
    let age = 21;
    let section = "B"
    console.log("Hey My name IS Muzmail");
    console.log(`Hey My Name Is ${name} and my age is ${age} and my section ${section}` );
}

student();

//Function Expression
const greet= function(){
    console.log("Hey Devs")
}
greet();

//Parameter and Arguments

// function myName(firstName , secondName){

//     console.log("Ans Ishfaq");
//     console.log(`First Name is ${firstName} and second name is ${secondName} `)

// }
// myName("Muzamil" ," Ikram");


//Default Parameter

function myName(firstName ="Muzamil" , secondName = "Ikram"){

    // console.log("Ans Ishfaq");
    console.log(`First Name is ${firstName} and second name is ${secondName} `)

}
myName("Ans","Faizan");


function sum (a,b)
{
    return a + b ;
}
const result = sum(2,3);
console.log(result)


//Hoisting

hello();
function hello(){
    console.log("Hello Bois")
}


//Arrow Function

// function greet() {
//     console.log("Hey Devs");
// }
// greet();

// variable name = () => {}

const greet2 = () => console.log("Hey Devs 2")
greet2();  



// Methods 

const student1 =
{
    sName : "Muzamil",
    sReg  : 88,
    section : "B",
    history: function() {
        console.log("Hi")
    } 
}

// console.log(student.history());

student1.history();