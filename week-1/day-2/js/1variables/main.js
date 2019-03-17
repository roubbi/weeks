


console.log("hello world!");

let country="France"

console.log(country);

console.log("The country inside the variable country is " + country)

// strings

const sentence = "this is definitely; DEFINITELY a string!"

// Numbers

let moneyInBank = 600

console.log(moneyInBank + 300)

// Booleans

const instructorIsFunny = true
let enoughJokesInClass = false


let a = 6
let b = a

console.log(a) //prints 6
console.log(b) //prints 6

b = 2

console.log(a) //prints 6
console.log(b) //prints 2


// Concatenation


const firstString = "car"
const secondString = "pet"
const bothStrings = firstString + secondString


console.log(bothStrings) //

let firstStrings = "bar"
firstStrings += "man"
console.log(firstStrings) // will print "barman"


let firstStringss = "bat"
firstStringss += "man"
console.log(firstStringss) // will print "batman"


let galaxyVersion = "S"
galaxyVersion += 11
console.log(galaxyVersion) // will print "S11"


// OPERATORS

console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false


console.log(1 == "1")// prints true
console.log(1 === "1")// prints false 

//When we check equality with two equal signs JavaScript first converts the two values to a common type behind the scenes - in the above case, it will convert "1" to 1, and therefore it will be equal.


console.log(27 + 15)
console.log(81 / 9)
console.log(3.14 * 10)


console.log( (3 + 5) * 2 ) // same as 8*2, which will print 16

let num
console.log(3 + num)

console.log(14 % 5) // will print 4

console.log((3 < 2) ||  (1 > 0)) // prints true because the right side resolves to true, even though the left side resolves to false

console.log(("a" == "a") && (32 === "32")) // prints false because the right side resolves to false

console.log(!(10 > 5)) // prints false, because the 10 IS greater than 5 (true), but the ! flips the true to a false


console.log("51" !== 52)

let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10