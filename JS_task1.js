//Assignment 
//SECTION A: Technical Questions

// 1. What is the difference between var, let, and const?

// VAR
// Function-scoped (Globel-scoped)
// can be redeclared and reassigned
// Leads to confusing behavior
// Makes accidental overwrites easy
// Mostly kept for legacy code

// LET
// Block-scoped ({} matters)
// Can be reassigned
// Cannot be redeclared in the same scope

// CONST
// Block-scoped
// Cannot be reassigned
// Must be initialized immediately

// 2. Which keyword allows redeclaration and why?

// .var allows redeclaration because it is Global-scoped
// .let and const were block-scoped variable declarations


// 3. Which keyword allows reinitialization?

// VAR and LET used for the reassign.

// 4. Which keyword does not allow redeclaration and reinitialization?

// CONST-keyword does not allow redeclaration and reinitialization

// 5. Why should const be used for fixed values?

// const prevents reassignment and helps avoid accidental changes, 
// making the code safer and more predictable.

// 6. What error occurs when redeclaring a let variable?

// SyntaxError: Identifier X or Y has already been declared

// 7. What error occurs when reassigning a const variable?

// SyntaxError: Identifier X has already been declared

// 8. Which keyword is preferred in modern JavaScript and why?

// CONST-is preferred in modern JavaScript 
// it prevents reassignment and helps write safer,more predictable code

// 9. Can const be declared without initialization? Explain.

// No,const cannot be declared without initialization.
// Because const variables must be assigned a value at the time of declaration; 
// It throws:
// SyntaxError: Missing initializer in const declaration

// Example
// const a; // SyntaxError: Missing initializer in const declaration

// 10.When should var be avoided?

// var should be avoided in modern JavaScript
// it is global-scoped and allows redeclaration
// it cause unexpected bugs and confusion
// -----------------------------------------------
// SECTION B: Code-Based Questions

// 11. Predict the output:
var a = 10;
a = 20;
var a = 30;
console.log(a);

// Output : 30
// Soln: js is a line by line code checker because of that 
// whiling checking the 3rd line that's a updated redeclartion.
// ------
// 12. Predict the output:
let b = 5;
b = 15;
console.log(b);

// Output : 15
// Soln: Here updated initialization is b
// ------
// 13. Identify the error:
// let x = 10;
// let x = 20;

// SyntaxError: Identifier 'x' has already been declared 
// Here we can't redeclaration let X because it is block scope
// ------
// 14. Identify the error:
const y = 50;
y = 100;

// SyntaxError: Identifier 'y' has already been declared
// Here we can't reinitialization let y because it is block scope
// ------

// 15. Write a program using var to show redeclaration.

var user1 = 20;
var user1 = 30;
console.log("user1:-",user1);
// ------
// 16. Write a program using let to show reinitialization.

let xname = 5;
xname = 40;
console.log("xname:-",xname);
// ------
// 17. Write a program using const and explain why value cannot change.

const j= 55;
console.log("j:-",j);

// const variable cannot be reassigned after its initial value.
// If you try to assign a new value it will throw a TypeError.
// ------
// 18. Convert var to let where applicable.

var name = "Alex";
var age = 25;

let name1 = "Alex";
    age = 25;

console.log(name1);
console.log(age);

// o/p: Alex ,25
// ------
// 19. Convert var to const where applicable.

var name = "Alex";
var age = 25;

const name2 = "Alex";
    age = 25;

console.log(name2);
console.log(age);

// 20. Write your own example for var, let, and const.

// VAR
var name = "raja";
name="kerli";
var name = "suuman";
console.log("name:-", name);

// LET
let city = "AP";
    city="KA";
console.log("city:-", city);

// CONST
const company= "LLC";
console.log("company:-", company);
