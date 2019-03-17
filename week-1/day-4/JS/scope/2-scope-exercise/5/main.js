

//===================================================================================
//Section 5
//===================================================================================

const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

// Will there be an error? --- Yes : found is not defined
// Why?
// Will something be undefined? 
// Why?

// This code will throw an errort: found is not defined
// because the scope of the found variable is limited to the for scope 
// and therefore it will not be available to the second if is not accessible to the plant function but only to the getSeed function 

// To what scope does each variable belong?
// Global or local? If local, to which specifically?

// users variable belongs to Global Scope
// found variable belongs to the Local Scope (if inside the for of the users variable