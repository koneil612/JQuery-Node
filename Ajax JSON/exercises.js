// ************************************
// Ajax, Callback, and JSON Exercises
// ************************************
// CPS: 1
// Rewrite the following code (both the function and the code calling the function) in continuation-passing style:
// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);

function square(num, callback) {
    var squared = num * num;
    callback(squared);
}
square(5, function(squared) {
    console.log(squared);
});

// ************************************
// CPS: 2
// Rewrite the following code (both of the functions and the calling code) in CPS:
//
// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }
//
// var x = 4;
// var y = 3;
// var answer = squareRoot(square(x) + square(y));
// console.log('The answer is: ' + answer);


function answerCPS(x, y, callback) {
    function square(num) {
        return num * num;
    }
    function squareRoot(num) {
        return Math.sqrt(num);
    }
    var answer=squareRoot(square(x) + square(y));
    callback(answer);
}

answerCPS(4, 3, function(answer) {
    console.log('The answer is: ' + answer);
});
// ************************************
// CPS: 3
//
// Add a 1000 millisecond delay to the CPS version of the square function you wrote for the last exercise, and a 500 millisecond delay to the squareRoot function. Re-run the code and see that there's a delay before the answer is printed.
//

function answerCPS(x, y, callback) {
    function square(num) {
        return num * num;
        }

    function squareRoot(num) {
        return Math.sqrt(num);
    }
    
    var answer=squareRoot(square(x) + square(y));
    callback(answer);

}

answerCPS(4, 3, function(answer) {
    console.log('The answer is: ' + answer);
});

setTimeout(function() {
    square();
}, 2000);



// ************************************
// Ajax Search Form
//
// Download and unzip the ajax_exercise.zip file in a folder. Run it using python server.py and access the app at http://localhost:5000. This is a Flask app. To start, it should render a form at the root URL /. It should also return some JSON result data at /search.
//
// Using jQuery, capture the form submit events:
// prevent the default submit action
// make an Ajax request to the /search URL using $.get
// when the data comes back, render the result data to ul#result-list as individual li items
// Send a query parameter to the /search. You may use jQuery's serialize method: $('#search-form').serialize() and plug its result into the data parameter (the second parameter) of $.get. On the backend, verify that you are getting the query parameter passed in by printing request.args.
// Create a database of websites. Each website needs only a title and a URL. A database schema has been provided in db.sql. Make a database, and manually enter some data for querying.
// Change the search function of server.py to query the database for matching websites instead of returning the hard-coded results from results.json. Test to see that the search form is now working.
