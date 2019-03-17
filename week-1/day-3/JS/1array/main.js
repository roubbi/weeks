



let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

//We can determine the number of items in the array using length

console.log(companies.length) // will print 4, because there are four companies in this array

let myFriends = [] // an empty array

let infoAboutTesla = ["Tesla", 5000, true, "best"]


//Knowing this, we can print out the value of Microsoft by doing this:


console.log(companies[3]);

console.log(companies[6-4]);


console.log(companies[4]) // prints undefined

// This should make sense because at the 4th index we haven't yet defined any values for companies


//Spot check

let myStuff = ["Macbook Pro", "S8", "JBL Headphone"]

console.log("The array myStuff contains: " + myStuff);

console.log("The second item of myStuff is " + myStuff[1]);



//VARIABLES FROM ARRAYS


const firstCompany = companies[0]
console.log(firstCompany) // prints "Tesla"
console.log(firstCompany == companies[0]) // prints true

/*By the way, we can use .length and a bit of simple math to access the last element of an array. 
Since .length gives us the length of an array, then .length - 1 will always be the index of the last element:*/


const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
console.log(plants.length) // prints 5

let lastIndex = plants.length - 1 // equal to (5 - 1) = 4
console.log(plants[lastIndex]) // prints "Yew"
console.log(plants[4]) // the same

console.log("The first plant is " + plants[0] + ", and the last one is " + plants[plants.length - 1] );

//UPDATING ARRAYS


companies[1] = "Twitter";
console.log(companies[1]);


// PUSH (ADDING TO AN ARRAY)

companies.push("Blizzard Entertainment");
console.log(companies[4])


/*Remember that push always adds the element to the end of the array.

To add to the beginning of an array, use unshift - same syntax as push*/


/*Using your myStuff array, add the last item to the beginning, and the first item to the end.
If your array was ["a", "b", "c"], then now it should be ["c", "a", "b", "c", "a"] */

console.log(myStuff);

console.log(myStuff.length)

 myStuff.unshift (myStuff[myStuff.length - 1])
 myStuff.push [myStuff[0]];
 myStuff.push (myStuff[myStuff.length - 3])

console.log(myStuff);


//// ELegant Solution

const lastItem = myStuff[myStuff.length - 1]
const firstItem = myStuff[0]

myStuff.unshift(lastItem)
myStuff.push(firstItem)

console.log(myStuff) // prints ["Passport", "Squid hat", "Portrait of a wizard", "Passport", "Squid hat"]


//You can also add several items with this (albeit uncommon) syntax:

companies.push("Fox Entertainment", "Marvel Studios", "Rolex");

console.log(companies)


let employees = ["DeMarcus", "Kai", "Christina"]
let candidates = ["Tiffany", "Elana", "Carl"]

console.log(employees)

employees.push(...candidates)

console.log(employees)



/*Spot check: Duplicate your myStuff array using ...
For instance, if it was ["a", "b", "c"], it should now be ["a", "b", "c", "a", "b", "c"]*/

myStuff = ["Macbook Pro", "S8", "JBL Headphone"]

myStuff.push(...myStuff)
console.log(myStuff)


//SPLICE (REMOVING FROM AN ARRAY)


/*As for removing items from arrays, it's a little more involved but still straightforward. 
There is a method called splice, and it needs two things:

Where to start removing
How many to remove from that point*/

console.log(companies)
companies.splice(1, 1) //That's saying go to the index 1, and remove 1 item from there
console.log(companies)


// When you use splice, the method will return* the item(s) that you removed from the array. See this:

let fridge = ["Milk", "Eggplant", "Truffle", "Edible shoe"]
let removedItem = fridge.splice(3, 1)

console.log(removedItem) // prints ["Edible shoe"]
console.log(fridge) // prints ["Milk", "Eggplant", "Truffle"]

// *We'll learn about what return means exactly when we get to functions

// So not only does splice remove from an array, it also gives you the value(s) of the item(s) you removed. 
// No matter how many items you remove, you will receive an array in return. Try this out for yourself.


// Another note about splicing, if you do not indicate the second input (i.e. how many items to remove), 
// then splice will remove everything from the the start you indicated and onwards:

let badHabbits = ["Pizza", "Sugars", "White bread"]
let removedHabbits = badHabbits.splice(1)

console.log(removedHabbits) // prints ["Sugars", "White bread"]
console.log(badHabbits)// prints ["Pizza"]... can't get rid of that



//Spot Chek

let nature = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"];

const NatureLastItem = nature[nature.length - 1]
nature.unshift(NatureLastItem)
nature.splice(1)
console.log(nature)


// Solution

//const nature = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]

nature.splice(0, nature.length - 1)
console.log(nature) // prints ["life"]

const abc = ["a", "b", "c"]

abc.splice(0, abc.length - 1)
console.log(abc) // prints ["life"]


//Mid-Lesson Array Exercise

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

console.log("Genes contains " + genes) 

genes.push(genes[2]); // Push RLF to the End of genes

console.log("Genes contains " + genes) 

genes.splice(2, 1, "CRYZ"); // Overwrite the remaining RLF with CRYZ (index 2) 
genes.splice(4, 1); // Delete the remaining CRYZ

console.log("Genes contains " + genes) 

genes.push(genes[3]); // Push AZIN2 to the End of genes
genes.push(genes[3]); // Push AZIN2 to the End of genes
genes.splice(3, 1); // Delete the remaining AZIN2
genes.unshift("FXT"); // Adding FXT at the Beginning of the strand

console.log("Genes contains " + genes) 



//let removedGenes = genes.splice(3, 1); // it gives me an array 

//console.log("removedGenes contains " + removedGenes) 
 
// To extract the values/items of an array I can use ... AKA Spread

//genes.splice(2, 0, ...removedGenes)

// genes.push(removedGenes)
// genes.push(removedGenes)

// console.log(genes)

// let newGenes = [...genes]
// console.log(newGenes);


/*WOW The SOLUTION IS AMAAAAAZINGLY BEAUTIFUL :p */


////// OBJECTS


let person = {
    name: "Mariah",
    occupation: "Gangster"
  }

  console.log(person.occupation) // prints "Gangster"

  const names = ["Mariah", "James", "Luke"]
const occupations = ["Gangster", "Preacher", "Hero"]

console.log(names[0] + " is a " + occupations[0])

console.log(person.name + " is a " + person.occupation)



//Let's look at an object with an array inside:

const bag = {
  weight: 10,
  owner: "Larissa",
  items: ["Pen", "Bottle", "Book"]
}


console.log(bag.items) // prints ["Pen", "Bottle", "Book"]

console.log(bag.items[1]) // "Bottle"


//SpotCheck 1

let car = {
 color: "red",
 numWheels: 4,
 isFancy:true
}

console.log("The " + car.color +  " car has " + car.numWheels + " wheels.");

if(car.isFancy){

    console.log("It is fancy");
}

else{
    console.log("It is not fancy");
}



//SpotCheck 2


/*create an object with the following properties:

item - string
toBeginning - boolean
items - array*/

let wp = {
    item:"CMS",
    toBeginning:true,
    items: ["a", "b", "c"],
}

if(wp.toBeginning){
    wp.items.unshift ("item")
}

else{
    wp.items.push("item")
}



console.log(wp);


//If toBeginning is true, insert item to the beginning of items, otherwise, insert it at the end.



///DOT NOTATION VS. BRACKET NOTATION

//ADD A VALUE
const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4
  }
  
  //Suddenly the zoo acquired two dozen eagles
  
  animalCounts.eagle = 24
  //or
  animalCounts["eagle"] = 24

console.log(animalCounts);



  const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"

//Write some code that gives human the key-value pair of name: "Goojibear", using the variables above.

human[babyNameKey] = babyNameValue
human.name = "Goojibear"
console.log(human);

human.name = "Ruben"
console.log(human);


/// OBJECTS AS VARIABLES


//SPOT CHECK 
//console.log(food[0].color)



//----------------------------------------
//CTRL+F => CONTINUE //Great. Now let's go back to our bag example from before, and add a twist://

  //Spot check: get the name of the first item in the bag. You should be able to do this no problem ~

  console.log(bag.items[0]) // 
  



  //------------------------REFERENCE TYPES



  let numbers = [1, 2, 3]
let nums = numbers

nums[0] = 50

console.log(numbers)

//The reason this happens is that JS does not create a new space in memory for reference types. 
//Instead, it references an existing space, if possible.

let personnage = {
    fistName: "Ruben",
    lastName: "Bonan"
}

let p = personnage 
p.fistName = "Chappy"

console.log(p)
console.log(personnage)

// It is also called a Shadow Copy