






const bag = ["flashlight", "medicine"]
const moreItems = ["tent", "water bottle", "knife", "rope"]

console.log(bag.length)

if(bag.length < 3){
  const nextItem = moreItems[0]
  bag.push(nextItem)
}
console.log(bag.length)
console.log(bag) 
//console.log("Added " + nextItem)


