

// Spot check 2: given the code below, use jQuery to alert the value of the input when the button is clicked:


//  const value = $("#my-input").val()   //// -> why this is not working ?

//  $('button').click (function() {
//        alert(value)
//  }) 
 

 $('button').click (function() {
       alert($("#my-input").val())
 
 })

