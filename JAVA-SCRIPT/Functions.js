//Immediately Invoked Functions(IIF) Declaration
(function (){
    console.log("WELCOMES..!!");
})();

//Constructor Functions Declaration
const addition = new Function("x","y","return x+y");
let result = addition(10,6);
console.log(result);

//Arrow Function Declaration
const sum = (a,b) =>{
    let add = a +b;
    console.log(add);
}
sum(2,45);

