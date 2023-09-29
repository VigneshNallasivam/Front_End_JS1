import {names} from './java.js';
import value from './addition.js';
import {aged} from './java.js';
class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
const myCar1 = new Car("Limo",2015);
const myCar2 = new Car("Ferrari",2000);

// document.getElementById("content").innerHTML = "My Car Is "+myCar1.age()+" Years Old";
// document.getElementById("content").innerHTML = "My Car Is "+myCar2.age()+" Years Old";
document.getElementById("content").innerHTML = "My Name Is : "+names;
document.getElementById("disp").innerHTML = "My Age Is : "+aged;
document.getElementById("disp").innerHTML = "My Addition Is : "+value;