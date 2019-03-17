
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


//EX 1

let names = ["Ruben", "Salome", "Gabriel", "Avishay"];

let ages = [27, 27, 5, 2];





for(let i = 0; i < 3; i++){

  console.log(names[i] + " is " + ages[i] + " years old");
}


//EX 2

let numbers = [1, 2, 3];

let sum=0;

for(let i = 0; i <= 2; i++){

  sum +=  numbers[i];
}

console.log(sum);


//EX 3


let average=0;

for(let i = 0; i < 3; i++){

  average =  sum / numbers.length;
}

console.log(average);


//EX 4

let nums = [];


for(let i = 0; i <= 100; i++){

  nums.push(i);
}

console.log(nums);

//EX 5

for(let i = 0; i <= 100; i++){

  if (nums[i] % 2 == 0) {

    console.log(nums[i]);
  }
}

//EX 6

let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

//Use a loop to find the index of the number 709. You should find it to be 68.

for (i=0, i<100, i++){
if(){

}
}