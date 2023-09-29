let language = "Good Mornin::!!";
let texted = "";
for(let values of language){
    texted = texted + values ;
}
document.getElementById("demo1").innerHTML = texted;