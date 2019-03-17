// EX 5


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  let name = prompt('Please enter the name for your reservation');
 

if (reservations[name] && !reservations[name].claimed){ 
    
  alert("Welcome " + name );

}

else if (reservations[name] && reservations[name].claimed){
  
  alert("Hmm, someone already claimed this reservation");
}

else{
    alert("Sorry " + name + " ! There is no reservation under your name :(");
}
























