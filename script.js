var surname = prompt('Labas ! koks tavo vardas ?');
var surname;
var age;
name = "Andy";
age = 43;


$(document).ready(function(){
 $("#interactive-button").on("click", function(){
 alert("Oho");
 });
});


var i = 1;
while (i < 10) {
    alert(i);
    i = i + 5;
  }

  var jedi = {
    name: "Yoda",
    age: 899,
    talk: function () { alert("another... Sky... walk..."); }
};
var person = {
    age: 122
};
var dog = {};

dog.bark = function () { alert("Au au !"); };

person.name = {
    first: "Jeanne",
    last: "Calment"
};

var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');


for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}
