

//===================================================================================
//Section 6
//===================================================================================

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}



// Even though everything seems perfect, it will not work at all => Assignment to constant variable. 
//Indeed isEnough is defined as const and because of this it can't work

// isEnough variable belongs to Global Scope

// Will there be an error? 
// Why?
// Will something be undefined? --- No
// Why? --- Because every variable is assigned
// To what scope does each variable belong?
// Global or local? If local, to which specifically?
