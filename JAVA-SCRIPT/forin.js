
const personDetails = {
    firstName: "Vignesh",
    lastName: "Waran",
    age: 25
}

let textS = " ";
for (let values in personDetails) {
    textS = textS + personDetails[values] + " ";
}
document.getElementById("demo1").innerHTML = textS;