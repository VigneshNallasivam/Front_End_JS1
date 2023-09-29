const colors = ["Red", "Blue", "Green", "Yellow", "Pink"];
var result1 = colors.toString();
console.log(result1);

const fruits = ["Banana", "Mango", 'Apple', "Orange", "Kiwi"];
let fruitLength = fruits.length;
let data = `<ul>`
for (let i = 0; i < fruitLength; i++) {
    data += `<li> ` + fruits[i] + `</li>`;
}
data += `</ul>`
document.getElementById("demo1").innerHTML = data;
console.log(data);

const cars = ["Benz","Volvo",'lamborghini'];
document.getElementById("demo1").innerHTML=cars;

const contents = ["Apple","Yellow",245];
console.log(contents);
console.log(typeof contents);

//ARRAY USING FOR-EACH
const elements = ["Vignesh","Sathish",898,"Vinith","Raghav",4563];
let textArr = "<ul>";
elements.forEach(myFunctions);
textArr = textArr + "</ul>";
document.getElementById("demo1").innerHTML = textArr;
function myFunctions (value)
{
    return textArr = textArr + "<li>" + value + "</li>";
}

//ARRAY USING NORMAL FOR-LOOP
const elementsA = ["Vignesh","Sathish",898,"Vinith","Raghav",4563];
let textArr1Length = elementsA.length;
let textArr1 = "<ul>";
for(let i=0; i<textArr1Length ;i++){
    textArr1 = textArr1 + "<li>" + elementsA[i] + "</li>";
}
textArr1 = textArr1 + "</ul>";
document.getElementById("demo1").innerHTML = textArr1;
