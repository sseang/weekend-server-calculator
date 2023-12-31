//const { response } = require("../../server");

console.log('client.js is sourced!');


// #### Client-Side:

// * [x]Inside the `<section data-testid="recentResult">` element, display the most recent calculation **result**.
//   * []Update this when a new calculation is made.
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
        //target data
        let mathFromServer = response.data;
        //confirm data
        console.log(mathFromServer);
        //target element and store in variable
        //let historyDiv = document.querySelector('#oldHistory');
        let recentDiv = document.querySelector('#recentHistory')
        //confirm data
        //console.log(historyDiv);
        console.log(recentDiv);
        
        //loop and rendor to DOM
        for (let items of mathFromServer) {
            //confirm data
            console.log(items);

            //not able to do 2 GET calls?
            // historyDiv.innerHTML += `
            // <li>
            //     <i>${items.numOne}${items.operator}${items.numTwo} = ${items.result}</i>
            // </li>
            // `; 

            //change to h2
            recentDiv.innerHTML += `.
            <li>
            <i>${items.numOne}${items.operator}${items.numTwo} = ${items.result}</i>
            </li>
            `;       
        }
    })
    .catch((error) => {
        console.log(error);
        alert('NO!! Check console for details.');
    });
};

fetchMath();

// * []Inside the `<section data-testid="resultHistory">` element, display a list of all previous calculations on the page when it loads (using a `GET '/calculations'` request). 
//   * []Update this list when a new calculation is made.



// * []Inside `<form data-testid="calculator">`:
//   * []Create a user interface where the user can input two values and select a mathematical operator.
//     * Each mathematical operator is represented by a button:
//       * `<button>+</button>`
//   * []When the `=` button is clicked, capture the input values and operator, then send this data to `POST '/calculations'`. You'll need to format it like so:
//     * `{ numOne: 25, numTwo: 10, operator: '+' }`
//   * []There should be a `'C'` button that will clear the inputs.