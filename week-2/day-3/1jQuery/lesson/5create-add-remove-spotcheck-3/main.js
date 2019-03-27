
/* Spot check: given the following array, 

create a <div class='human'>FIRST_NAME - LAST_NAME</div> for each item, and add it to body

const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" }
]*/

//-- Working

// const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

// for(let name of names){
//   $("body").append(`<div>${name}</div>`)
// }

//--

 
const names = [
  { first: "Alex", last: "Johnson" },
  { first: "Byron", last: "Loveall" },
  { first: "Cassandra", last: "Wuthers" },
  { first: "Deandre", last: "Rahm" },
  { first: "Ellena", last: "Freeman" }
]

for(let name of names){
  $("body").append(`<div class=human>${name.first} - ${name.last} </div>`)
  //$("body").append(`<div>${name.first}</div>` + "-" + `<div>${name.last}</div>`)
}

// // for(let name of names){
// //   $("body").append(`<div>${name}</div>`)
// // }


