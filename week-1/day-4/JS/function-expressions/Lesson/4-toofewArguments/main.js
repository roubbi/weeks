
const greet = function(name){
  console.log("hello, " + name)
}

const growOld = function(user){
  user.age++
}



greet() // prints Hello, undefined
growOld() // throws an error


// Sometimes if we forget to pass an argument, JS will shrug it off with an undefined - as with greet above. Notice that since we don't pass any argument to the name parameter, it remain undefined!

// However, when we call growOld and the user parameter remains undefined - that's problematic because then in the function we're trying to do undefined.age++ - and undefined does not have an age!

// Try it out yourself and see the error in the console.