


// EX 1

let numChildren = prompt("How many chaildren do you have ?")

console.log(numChildren)

isCareful = false

if(!isCareful){
  numChildren++
}

console.log(numChildren)


// EX 2

silverwareCount=4

if(silverwareCount%2==0)

{
  console.log('Nothing is missing')

}

else{

  console.log('there is something missing')
}




// EX 3

let performance = "stellar"
let salary = 10000
let goodBonus = 1000
let stellarBonus = 3000

if(performance){
  salary+= stellarBonus
  console.log('Stellar Job, your new salary is ' + salary)
}

else{
  salary+= goodBonus
  console.log('Good Job, your new salary is ' + salary)
}


// EX 4

const isVIP = false
let cash = 500

if(isVIP || cash>300){

  console.log('Welcome to the Club')

}

else{

  console.log('You are no allowed to enter to his VIP Club')

}

let w

if(w){
  console.log('w est vrai')
}


// EX 5

const a = 3                 
let b = 2
let c = 0 || 12           // In JS, the value will always be true and 0=false that's why here c=12

console.log('c= ' + c) //Confirm this above with Hunter or Karine

let d

b = c                   // b=12
b++                    // b=13
if(d){
  b = a
}

console.log('c= ' + b) // Verify if although d was undeclared, its if was working. -> nothing appear so d has no effect

d = a + (b * c)        // d = 3 + (13*12) = 159
d++                   // d = 160
b += 2               // d = 15

console.log('a= ' + a)
console.log('b= ' + b)
console.log('c= ' + c)
console.log('d= ' + d)


/* 

a=3
b=2
c=0
d?

b=0
b=1

d=  3 + (1 * 0)
d=3
d=4
b=3

//////-- Result --//////////
a=3
b=3
c=0
d=3


*/

// EX 6


const gender = null
let profession = "business"


if (gender=='man'){

  profession+= 'man'
}

else if (gender=='woman'){

  profession+= 'woman'
}

else if (gender==null){

  profession+= 'person'
}

console.log(profession)

// EX 7


let boughtTesla= true
const year0fTeslaPurchase = 2015
let isUsCitizen = true
let currentyear = 2018

/*For your tests, change the values to make sure all the cases are working.
 For the above inputs, your AI prototype should output "Would you like an upgrade?"*/


if (boughtTesla && isUsCitizen){
  
  if ((currentyear - year0fTeslaPurchase) >= 4){

    console.log('Would you like an upgrade ?')

  } 

  else{
    console.log('Are you satisfied with the car ?')
  }

}

else if (!isUsCitizen && boughtTesla){

  console.log('Would you like to move to the US ?')
}

else if (!boughtTesla){

  console.log('Would you like to buy a tesla ?')
}

/*If the customer has previously bought a Tesla, and the customer is a US citizen, 
the AI should check how long ago the customer bought their Tesla

If the Tesla was bought more than four years ago, 
the AI should ask (console log) whether the customer would like an upgrade

Otherwise, it should ask whether the customer is satisfied with the car
If the customer is not as US citizen but has bought a Tesla, the AI should ask whether the customer would like to move to the US
If the customer has not bought a Tesla, the AI should ask whether ze is interested in buying one

*/








































