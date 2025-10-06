// Iteration in JavaScript

let num = [1, 2, 3, 4, 5];
let person = ['John', 'ashik', 'munna'];

// for loop 
for(let i=0; i<person.length; i++) {
    console.log(person[i]);
}

//forEach loop
person.forEach(function(item, index, array) {
    console.log(item,index,array);
});

// num array forEach loop 
num.forEach(function(item, index, array) {
    console.log(item, index, array);
});
