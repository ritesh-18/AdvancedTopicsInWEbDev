interface User{
    lname:string,
    fname:string,
    age:number
}
//now creating a obj 
let user:User={
    lname:"chauhan",
    fname:"ritesh",
    age:23
}

//now create a function that takes obj as an argument and return wherther user is 18+ or nott

function isAdult(obj:User){
 let age:number=obj.age
 if(age>=18){
    return true;

 }
 else{
    return false;
 }

}
const isLegal=isAdult(user)
console.log(isLegal)


//aaray declaring and accessing
function maxval(arr:number[]){

} 
let arr:number[]=[1,2 ,3 ,4];
console.log(arr[3])