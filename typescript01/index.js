"use strict";
//now creating a obj 
let user = {
    lname: "chauhan",
    fname: "ritesh",
    age: 23
};
//now create a function that takes obj as an argument and return wherther user is 18+ or nott
function isAdult(obj) {
    let age = obj.age;
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const isLegal = isAdult(user);
console.log(isLegal);
