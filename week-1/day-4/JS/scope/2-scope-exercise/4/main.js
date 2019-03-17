

//===================================================================================
//Section 4
//===================================================================================


const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


// Even though everything seems perfect, it will not work at all => ReferenceError: (in Red) 
//because the scope of the seed variable is not accessible to the plant function but only to the getSeed function 

// pot variable belongs to Global Scope
// seed variable belongs to the Local Scope (getSeed function)


// Will there be an error? --- No because everything seems ok
// Why?
// Will something be undefined? --- No
// Why?
// To what scope does each variable belong?
// Global or local? If local, to which specifically?
