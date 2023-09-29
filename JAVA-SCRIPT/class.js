class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new car("Ford", 2014);
document.getElementById("demo1").innerHTML = "My car is " + myCar.age(year) + " years old.";
