
/*Spot check 1: given the following, and only the following HTML:

<div id="blogs"></div>
<button>Post Blog</button>

Write a listener that appends a div with a class of blog to the blogs div
Each div should have some text inside of it - it will be the same text each time
Write another listener that changes any element with a class of blog to have the text "blargh"
Use jQuery's text method to change the text inside an element*/



$("button").on("click", function(){
  $("#blogs").append("<div class='blog'>Cool blog</div>")
})

$("#blogs").on("click", ".blog", function(){
  $(this).text("blargh") 
})
