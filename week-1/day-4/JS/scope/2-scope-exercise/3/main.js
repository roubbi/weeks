
//===================================================================================
//Section 3 
//===================================================================================

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)



// What will console log display ? 

// Served a special fish
// Served a special lettuce plate
// Served a special curious cheese

// Finished serving all the orders: fish, lettuce plate, curious cheese

// 13  ? belongs to Local Scope
// cowsound belongs to the Local Scope


// Will there be an error? --- No because everything seems ok
// Why?
// Will something be undefined? --- No
// Why?
// To what scope does each variable belong?
// Global or local? If local, to which specifically?

// order Global Scope
// specialOrder Local Scope (if)
// allOrders Global Scope
