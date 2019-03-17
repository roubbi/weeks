
///////--------------------------------LOOPS

///////--------------------------------FOR...IN


let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])

console.log("-----------")

for(let i in companies){      // i is the index
  console.log(companies[i]);
}

console.log("-----------")

for(let company in companies){      
  console.log(company);
}

//we can say that the loop generates an index for each item in our companies array.

console.log("-----------")


///////--------------------------------FOR...OF


for(let company of companies){      // i is the index
  console.log(company);
}

//What's the difference? 
//Here we don't get an index on each iteration - instead, for...of gives us the element itself! - 
//Notice that we're not doing companies[..] anymore


for(let company of companies){      // i is the index
  console.log("One day I will work at " + company);
}

console.log("-----------")

///////--------------------------------WHILE


// while(someCondition){
//   //do something
// }

// In this case we're not telling the loop to run over a certain array, but rather run until a certain condition is met.

// The condition can be anything from testing the length of an array, or using a counter - so long as it resolves to a boolean.

// And remember, the condition has to break somehow - otherwise the loop will run forever. For instance:

let timer = 0;

while(timer < 10){
  console.log(timer);
  timer++;
}
//without the timer++; we would have a infinite loop.


///////--------------------------------FOR LET I = 0;...


for(let i = 0; i < 10; i++){
  console.log(i)
}

//So if we want to print all the even numbers between 80 and 100, we could do this:

for(let i = 80; i < 100; i+=2){
  console.log(i)
}


