
const findSmallest = function(numbers){
  let smallest = numbers[0]

  for(let num of numbers){
    if(num < smallest){
      smallest = num
    }
  }

  return smallest
}



const EvenOrOdd = function(numbers){
  let number = numbers[0]

  for(let num of numbers){
    if (number%2==0){
      numberIsEven = true
    console.log(number + " is even")
    }
    else{
      numberIsEven = false
    console.log(number + " is odd")
    }
    }return number
    }
  
const numbers = [17, 21, 9, 34]
const num = EvenOrOdd(numbers)
console.log(num)



// Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 3) print out the odd numbers.

const arrayNumbers = function(number){

const isEven = function(number){

  if (number%2==0){
    numberIsEven = true
    console.log(numberIsEven)
  console.log(number + " is even")
  }
  else{
    numberIsEven = false
    console.log(numberIsEven)
  console.log(number + " is odd")
  }
  }
  
  isEven(11)