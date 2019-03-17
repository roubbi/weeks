// EX 5


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  let name = prompt('Please enter the name for your reservation');


  const nameCapitalized = name[0].toUpperCase() + name.slice(1).toLowerCase()

 name = nameCapitalized;

  //console.log(nameCapitalized);
 

if (reservations[name] && !reservations[name].claimed){ 
    
  alert("Welcome " + name );

}

else if (reservations[name] && reservations[name].claimed){
  
  alert("Hmm, someone already claimed this reservation");
}

else{

  console.log(name);
  
  //reservations[name].push(name) // You can't use push for Object, push is for Array

  reservations[name] = "Ruben"

  reservations[name].claimed =true

    alert("Hello " + name +"! You have currently no reservation, let's add you... Done ");

    console.log(reservations[name]);
}
























