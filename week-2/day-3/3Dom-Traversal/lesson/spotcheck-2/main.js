

$("button").on("click", function(){

  //alert($(this).closest("div").find("p").text()) // Ask why this is not working 
  
  //=> Because div is at the same level than the button : They are siblings 

  //=> That's why we need to use .siblings() instead of .closest() (which will always go 1 level higher)

  alert($(".container").find("p").text()) // This is the solution

})


