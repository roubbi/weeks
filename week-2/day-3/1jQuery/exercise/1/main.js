

// Exercise 1


console.log($("#my-input").val())


$( "button" ).click(function() {

    const text = $("#my-input").val()
    $( "ul" ).append(`<li> ${text}</li>`)
    
    
  });

