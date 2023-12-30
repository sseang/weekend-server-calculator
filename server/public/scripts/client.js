//const { response } = require("../../server");

console.log('client.js is sourced!');


// #### Client-Side:

// * []Inside the `<section data-testid="resultHistory">` element, display a list of all previous calculations on the page when it loads (using a `GET '/calculations'` request). 
    //fetch data function or GET request
    function fetchMath() {
        //confirm function
        console.log('In the FETCH function');
        //axios GET
        axios ({
            method: 'GET',
            url: '/calculations'
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
            alert('NO!! Check console for details.');
        });
    };
    fetchMath();
    
//   * []Update this list when a new calculation is made.

// * []Inside the `<section data-testid="recentResult">` element, display the most recent calculation **result**.
//   * []Update this when a new calculation is made.

// * []Inside `<form data-testid="calculator">`:
//   * []Create a user interface where the user can input two values and select a mathematical operator.
//     * Each mathematical operator is represented by a button:
//       * `<button>+</button>`
//   * []When the `=` button is clicked, capture the input values and operator, then send this data to `POST '/calculations'`. You'll need to format it like so:
//     * `{ numOne: 25, numTwo: 10, operator: '+' }`
//   * []There should be a `'C'` button that will clear the inputs.