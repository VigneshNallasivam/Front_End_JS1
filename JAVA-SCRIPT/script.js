const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
//   document.getElementById("msg1").innerHTML = person.fullName;
  document.getElementById("msg1").innerHTML = person.fullName();

  