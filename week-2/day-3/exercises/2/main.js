// You can get the current date/time in Javascript by writing: const time = new Date(). 
// Create a function called getTime that takes one parameter - a function - then calls it with an argument.


// ---- Without calling a function ----/


// const time = new Date()

// const getTime = function(){

// alert('The current time is: ' + time)
// }
// getTime()

// ---- With calling a function ----/

const time = new Date()

const returnTime = function (time) {
  alert('The current time is: ' + time)
}

const getTime = function (func) {
  func(time)
}

getTime(returnTime)

