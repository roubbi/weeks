

// Exercise 1





const Dynamicboxl = "<div class='box' id='left'> </div>"
const Dynamicboxr = "<div class='box' id='right'> </div>"

const eleml = $(Dynamicboxl)
$("body").append(eleml)

const elemr = $(Dynamicboxr)
$("body").append(elemr)

isLeftBoxMagenta = true
isRightBoxMagenta = true

$(eleml).hover(function(){

  isLeftBoxMagenta = true
  $(elemr).css("background-color", "red")
  $(eleml).css("background-color", "#8e44ad")
})

$(elemr).hover(function(){

  isLeftBoxMagenta = false
  $(eleml).css("background-color", "red")
  $(elemr).css("background-color", "#8e44ad")
})


