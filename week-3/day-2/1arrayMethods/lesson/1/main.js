/* -------------- FILTER --------------- */


// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }]


    // let isColorOrange = vegetables.color.filter(c => c === "orange")
    // console.log (isColorOrange)


   /* Why this code is not working ?

   Because I used vegetables.color to get access to the color 
   BUT vegetables is an ARRAY and .color only works on OBJECT.
   
   However .filter is an Array Method 
   
   Thnaks to the Filter Method the v is goint to be each object contained in the vegetables array
   That's why I can now use .color to access the color.
*/

   //  let orangeVegetables = vegetables.filter(v => v.color === "orange")
   //  console.log (orangeVegetables)

   //  // To display the orange Vegetables Name (without the Array or Object format)

   //  orangeVegetables.forEach(ov => console.log(ov.name))



    /* -------------- FOREACH --------------- */


    /*Spot check: given the following array, write a named function outside of a forEach method. 
    The function should receive one parameter, person, and should increase the person's salary by 300 
    if their performance was good.*/ 


//     let people = [
//       { salary: 1300, goodPerformance: false },
//       { salary: 1500, goodPerformance: true },
//       { salary: 1200, goodPerformance: true },
//       { salary: 1700, goodPerformance: false },
//       { salary: 1600, goodPerformance: true },
//   ]


// const giveRaise = function (person){

// if (person.goodPerformance)
// person.salary+=300
// }

//   people.forEach(giveRaise)
//   console.log(people) 
  
  // ==> We have to use console.log because ForEach does not return anything


  
// filter or map creates another array that's why I need to use foreach here


/* -------------- MAP --------------- */

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// console.log(messagesFromDad)

// let calmMessages = messagesFromDad.map(m => m.toLowerCase())
// console.log(calmMessages)

/* -------------- xxx --------------- */

// let users = [
//    {
//    "name": "Leanne Graham",
//    "address": {
//        "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//        "geo": { "lat": "-37.3159", "lng": "81.1496" }
//    }
// }, {
//    "name": "Ervin Howell",
//    "address": {
//        "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//        "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//    }
// }
// ]

// console.log (users.map(u => { return { name: u.name, city: u.address.city } }))


/* -------------- FIND --------------- */

let posts = [
   {
       id: 0, text: "I'm not here",
       comments: [{ id: 0, text: "support that" }]
   },
   {
       id: 1, text: "Find me",
       comments: [
           { id: 0, text: "here I am" },
           { id: 1, text: "rock you like a hurricane" },
           { id: 2, text: "dum dum" }]
   },
   {
       id: 2, text: "Where's waldo anyway",
       comments: [
           { id: 0, text: "who's waldo" },
           { id: 1, text: "he's called Effi" }]
   },
   {
       id: 3, text: "Poof",
       comments: [{ id: 0, text: "like magic" }]
   }
]

const findById = id => posts.find(p => p.id === id)
console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}

/* -------------- xxx --------------- */

const findCommentByID = (postID, commentID) =>{
  
   let post = findById(postID)
   return post.comments.find(c => c.id == commentID)

}

console.log(findCommentByID(1, 0)) // {id: 0, text: "here I am"}


/* -------------- SOME & EVERY --------------- */

// These two methods, unlike the other array methods, 
// always return a boolean after checking all the items in the array.

let movies = [
   { title: "Dareangel", studio: "Marvel", year: 2023 },
   { title: "Batterfly", studio: "Fox", year: 2021 },
   { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
   { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

if (movies.some(m => m.studio=="Marvel")){
   
   console.log("Let's go watch some movies")
}

else {
 console.log("Let's stay home")
}

if (movies.every(m => m.year > 2020)){

   console.log("Futuristic stuff")
}

else {
 console.log("Yawn")
}


/* -------------- CHAINING METHODS --------------- */

let countries = [
   { name: "Greece", population: 500 },
   { name: "Namibia", population: 1200 },
   { name: "Finland", population: 100 },
   { name: "Switzerland", population: 300 },
   { name: "Peru", population: 200 }
]

// let smallCountries = countries.filter(c => c.population < 500).map(c => c.name)

// console.log(smallCountries)

// -- Better to write like this:

// let smallCountries =
//     countries
//         .filter(c => c.population < 500)
//         .map(c => c.name)