

// Spot check 1: add a div to your HTML and use the hover event to change its background color to blue.



$("div").css("background-color", "red")

$('div').hover(function() {
    $("div").css("background-color", "blue")
  })




// $("div").hover().css("background-color", "yellow") => Ask Can I use those Methods without putting them into function ?
//$("div").click().css("background-color", "yellow")

// $('div').on('click', function () {
//     alert('changing the color to Yellow')
//     $("div").css("background-color", "yellow")
//   })

//   $('div').click (function() {
//     alert('changing the color to Yellow')
//     $("div").css("background-color", "yellow")
//   })






