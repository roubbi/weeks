// const capitalize = function (name){

//   name.toUpperCase()
//   }

//   capitalize("bOb") // returns Bob
//   //capitalize("TAYLOR") // returns Taylor
//   //capitalize("feliSHIA") // returns Felishia


const name = 'FlAvIo'

const arrangeName = function (user){}



const name = 'FlAvIo'
const nameLower = name.toLowerCase()
console.log(nameLower)

const nameCapitalized = nameLower.charAt(0).toUpperCase() + nameLower.slice(1)
console.log(nameCapitalized)


const multiply = function(x, y=2){
  console.log(x * y)
}

multiply(3, 4) // prints 12




const user = "ruben"

const greed = function (user){
  console.log("Hello " + user)
}

greed(user)