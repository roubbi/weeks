

const greet = function(name, currentTime){

  if(currentTime<12){
    timeOfDay = "Morning"
}
else if(currentTime>12 && currentTime<18 ){
  timeOfDay = "Afternoon"
}
else {
  timeOfDay = "Evening"
}
console.log("Good " + timeOfDay + " " + name + "!")
}

greet("Ruben",16)
