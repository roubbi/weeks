
// EX 1

let p1 = {
    name: "Ruben",
    age: "Bonan",
    city: "Paris"
}

let p2 = {
    name: "Salome",
    age: "Bonan",
    city: "Paris"
}

if(p1.age == p2.age) {

    if(p1.city == p2.city){

        console.log("Jill wanted to date Robert")
    }
} 

else{
    console.log("Jill wanted to date Robert, but couldn't")

}




// EX 2  --// This is an array of 2 objects - corrected by karin


const mylist = [
                      
      {item: "Pen", count: 2},
      {item: "Bottle", count: 1},
    ]
  
  console.log(mylist);

  mylist[0].item = "iPen"; // replace the Pen by iPen in the fist item
  console.log(mylist);

  mylist.splice(1,1);
  console.log(mylist); 

//   mylist[0].length = 1;  
//  console.log(mylist);      // It is working, but what was the other way ? => Use a Splice ! => Coup de Vis




// EX 3


const array2 = [
                      
    {item: "Apple", count: 1},
    {item: "Banana", count: 1},
  ]

console.log(array2);

mylist.push(...array2);
console.log(mylist);

/*BECAREFUL: If You don't use ... You will get an array inside of an array*/


// EX 4

let library = {
    books : [           
        {title: "Elon Musk Autobiography", Author: "Ashlee Vance:"},
        {title: "Steve Jobs Autobiography", Author: "Walter Isaacson"},
      ]
}

console.log(mylist);

 mylist.push(library.books);





// EX 5


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');


/*If the reservation exists and is unclaimed, welcome the user (console log or use alert)
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name*/

// How to check if the reservation exists ? => If the name entered is different than Bob or Ted 
//                                          => If the name entered is different than the names in reservations array


// //if (reservations.name){ // this if is not working because I'm using the DOT NOTATION, 

//                         //so the programme will be looking for the variable name instead of verifying the keys.
    
// }
// else{
//     alert("Sorry " + name + " ! There is no reservation under your name :(");
// }

//console.log(reservations["Bob"]);

if (reservations[name] && reservations["Bob"]){ 

    alert("Welcome " + name );

}
else{
    alert("Sorry " + name + " ! There is no reservation under your name :(");
}









// EX 6
























