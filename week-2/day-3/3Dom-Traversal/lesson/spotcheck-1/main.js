

$('button').on('click', function() {
  alert ($(this).closest("div").find("span").text())
})


/* ----- Pas besoin d'utiliser 2 fonctions or even to add id to buttons ----- */

// $("#rockButton").on('click', function(){

// const finder = $(this).closest("div").find("span").text()

// alert(finder)

// })


// $('#islandButton').on('click', function(){

// let finder2 = $(this).closest("div").find("span").text()

// alert(finder2)

// })



