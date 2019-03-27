/* -------------- FILTER --------------- */



// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
  
//   //log the data
//   console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
//   let slogan = users[users.length-1].company.catchPhrase
  
  
//   //log the data
//   console.log(`${slogan}`) //prints -37.3159, 81.1496
// })

/* -------------- xxx --------------- */

// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: function(data) {
//       console.log(data);
//     }
//   })

/* Spot check: instead of using an anonymous function in the success, 
   use a named function called useData instead. */



//    const useData = function(data){
//     console.log(data)
//   }
  
//   $.ajax({
//       method: "GET",
//       url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//       success: useData
//     }); 



  /* -------------- xxx --------------- */

//   const fetch = function () {
//     $.ajax({
//         method: "GET",
//         url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

 /* -------------- Exercise 1 --------------- */


 /* Remember the fetch function from before? There we had the ISBN hard-coded on each call, 
    which is not very useful.
    Instead, add a parameter to the function that accepts an ISBN, and modify your function 
    so that it searches for info about the book with that ISBN.

    For instance, if you call fetch(9780575087057), you should receive data about the best book in the world: 
    Name of the Wind.*/

    
    // const fetch = function (isbnNumber) {
    //     $.ajax({
    //         method: "GET",
    //         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`, // Template Literals
    //         success: function (data) {
    //             console.log(data)
    //         },
    //         error: function (xhr, text, error) {
    //             console.log(text)
    //         }
    //     })
    // }

    // fetch(9782806269171)

     /* -------------- Exercise 2 --------------- */

     /* Now modify your function again so that it receives two parameters: queryType and queryValue

        You should modify your function to search by whatever queryType is (ISBN or title), 
        
        with the value of whatever queryValue is.

        For instance, if you call fetch("title", "The Wise Man's Fears"), you should receive data about the book The Wise Man's Fears.

        You can test your function with the following, as well:

        fetch("isbn", 9789814561778) - From Third World to First: The Singapore Story
        fetch("title", "How to Win Friends and Influence People") - book by Dale Carnegie */


        // const fetch = function (queryType, queryValue) {
        //     $.ajax({
        //         method: "GET",
        //         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        //         success: function (data) {
        //             console.log(data)
        //         },
        //         error: function (xhr, text, error) {
        //             console.log(text)
        //         }
        //     })
        // }
    
        // fetch("isbn", 9789814561778)
        // fetch("title", "How to Win Friends and Influence People")

        


        /* -------------- Exercise 3 --------------- */

        /*   You will have noticed that the Google Books API returns its data in an items array 
        - usually this array has data on more than one book.
        
        Modify your fetch function again so that instead of printing the entire data that is returned 
        from the API, you print the title, author, and ISBN forEach of the books in items  */


        // const fetch = function (queryType, queryValue) {
        //     $.ajax({
        //         method: "GET",
        //         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        //         success: function (data) {
        //             console.log(data.items)
        //             console.log(data.items[0])
        //             console.log(data.items[0].volumeInfo)
        //             console.log(data.items[0].volumeInfo.authors)

              
                    
        //         //Object bookVolumes
        //         //=>Inside
        //         // Array called items
        //         //=>Inside
        //         //Objects
        //         // volumeInfo
        //         //=>Inside
        //         // Authors ["Lee Kuan Yew"]




        //         },
        //         error: function (xhr, text, error) {
        //             console.log(text)
        //         }
        //     })
        // }
    
        // fetch("isbn", 9789814561778)
    
/* // const fetch = function (isbnNumber) {
    //     $.ajax({
    //         method: "GET",
    //         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${B
    r}`, // Template Literals
    //         success: function (data) {
    //             console.log(data)
    //         },
    //         error: function (xhr, text, error) {
    //             console.log(text)
    //         }
    //     })
    // }
    
*/

/* -------------- Exercise 4 --------------- */

// const fetch = function () {
//         $.ajax({
//             method: "GET",
//             url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=uG1hHHcXqSC1M07xd4CFdYD3dkj9jKVS&limit=5',
//             success: function (data) {
//                 const catImage = data.data[0].embed_url
//                 $( "body").append( "<iframe src="+catImage+">" + "</iframe>" );
//             },
//             error: function (xhr, text, error) {
//                 console.log(text)
//             }
//         })
//     }

//     fetch()

    /* -------------- Exercise 5 --------------- */

    const fetch = function () {

        const text = $("#input-text").val()
        console.log(text)

        $.ajax({
            method: "GET",
            url: `http://api.giphy.com/v1/gifs/search?q=${text}&api_key=uG1hHHcXqSC1M07xd4CFdYD3dkj9jKVS&limit=5`,
            success: function (data) {
                const gifImage = data.data[0].embed_url
                $( "body").append( "<iframe src="+gifImage+">" + "</iframe>" );
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }

    // var singleValues = 
    
