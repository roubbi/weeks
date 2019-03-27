

// Spot check: given this HTML:

{/* <div class=feedme>Feed me more</div>

Complete the JS below to recreate the following (click the text):

Feed me more
Feed me more
Feed me more 
......*/}


 
// $(".feedme").on("click", function(){
     
//      $("body").append('<div class=feedme>Feed me more</div>')
// })


$(".feedme").on("click", function(){
     let divCopy = ('<div class=feedme>Feed me more</div>')
     $(this).append(divCopy)
   })



$(".feedme").on("click", function(){
  let divCopy = $(`<div class=feedme> ${$(this).text()} </div>`)
  $("body").append(divCopy)
})

