
// Create a Family function with two variables inside its scope:
// A members array which starts empty
// A birth function
// The birth function should take one parameter, name, and push it to members, then log the updated array
// The Family function should return the birth function, but not the members array
// Call the Family function, store it in a giveBirth variable, then call giveBirth a few times.

// Mazel tov!


const family = function() {

const members = []

const birth = function(name) {

  members.push(name)
  console.log(members)

}
return birth
}

const giveBirth = family()

giveBirth()


