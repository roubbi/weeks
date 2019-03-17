

const calcAge = function(currentYear, birthYear){
  const minAge = (currentYear - birthYear -1)
  const maxAge = (currentYear - birthYear)
  console.log("You are either " + minAge + " or " + maxAge)
  return  minAge,maxAge    
  }
 calcAge(2017, 1989)

 