


//===================================================================================
//Section 1
//===================================================================================
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}
console.log("Damn, you see this gal? She ran " + distance + " miles")


// What will console log display ? 

// running*8
// Finished running 8 miles
// Error because the scope of distance is limited to the if 
// and the last console.log is after the closing } of the if
// So distance is undefined for the last console.log

// run belongs to the Gobal Scope
// distance belongs to the Local Scope


// Will there be an error?
// Why?
// Will something be undefined?
// Why?
// To what scope does each variable belong?
// Global or local? If local, to which specifically?