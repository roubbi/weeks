

// Spot check: create an element with two data attributes: barcode and expirationDate
// Then, use jQuery to grab both and print out The item with barcode 311192 will expire on 18-02-2030

// Hint: there's a small issue here, but with enough console logging you'll figure it out ;)



$("#my-input").val("Terabyte")
console.log($('#my-input').val())


const barcode = $("div").data().barcode
console.log(barcode) //prints #2980b9

const expirationdate = $("div").data().expirationdate 
console.log(expirationdate) //prints #2980b9


console.log("The item with barcode " + barcode + " will expire on " + expirationdate)


