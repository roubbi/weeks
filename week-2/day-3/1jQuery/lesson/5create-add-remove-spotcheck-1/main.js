

// Spot check: given the following HTML and CSS, 
//write some JS that changes the div's color to blue whenever the user hovers over that div
 

 $('.box').hover (function() {
      $(this).css("background-color", "blue")
 
 })

 const aDynamicDiv = "<div class='mine'>Oh yes</div>"
const elem = $(aDynamicDiv)
console.log(elem)

$("body").append(elem) // Adds the element to the page

$('.fruits').append('<p class="red">Raspberry</p>')
$('.fruits').append('<p class="brown">Kiwi</p>')

const text = "Banana"
const item = $("<div class=fruit>" + text + "</div>")

console.log(item) //prints <div class=fruit>Banana</div> as a jQuery object - this is what we created!