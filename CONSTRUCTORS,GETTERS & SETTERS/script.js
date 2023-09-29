function Persons(first,last,sex,age,place){
    this.firstName = first;
    this.lastName = last;
    this.gender = sex;
    this.age = age;
    this.place = place;
}

const mother = new Persons("Vignesh","Waran","male",25,"Erode");
const father = new Persons("Vignesh","Waran","male",20,"Erode");

document.querySelector("h1").innerHTML = "My Mothers age is : "+ mother.age;
document.querySelector("h1").innerHTML = "My Fathers age is : "+ father.age;

//TO ADD A NEW PROPERTY IN A CONSTRUCTOR
mother.nationality = "Indian";
document.querySelector("h1").innerHTML = "My Mothers Nationality is : "+ mother.nationality;

//TO ADD A NEW FUNCTION IN A CONSTRUCTOR
mother.name = function(){
    return this.firstName+" "+this.lastName;
};
document.querySelector("h1").innerHTML = "My Mothers Name is : "+ mother.name();

//SIMPLY ADDING ABOVE METHODS WE CAN DO IT INSIDE A CONSTRUCTOR ITSELF
function Persons(first,last,sex,age,place){
    this.firstName = first;
    this.lastName = last;
    this.gender = sex;
    this.age = age;
    this.place = place;
    this.nationality = "Indian";
    this.name = function(){
        return this.firstName + " " + this.lastName;
    }
}
document.querySelector("h1").innerHTML = "My Mothers Nationality is : "+ mother.nationality;

