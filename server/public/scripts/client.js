//const { response } = require("../../server");

//const { response } = require("../../server");

console.log('client.js is sourced!');
let OPERATOR;

// #### Client-Side:

// * [x]Inside the `<section data-testid="recentResult">` element, display the most recent calculation **result**.
//   * []Update this when a new calculation is made.

// * []Inside the `<section data-testid="resultHistory">` element, display a list of all previous calculations on the page when it loads (using a `GET '/calculations'` request). 
//   * []Update this list when a new calculation is made. 
//displayed but failig test!!

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
        let recentDiv = document.querySelector('#recentHistory')
        let historyDiv = document.querySelector('#oldHistory');
        //confirm data
        console.log(historyDiv);
        console.log(recentDiv);
        
        //loop and rendor to DOM
        for (let items of mathFromServer) {
            //confirm data
            console.log(items);

            //change to h2
            recentDiv.innerHTML = `
            <h2>${items.result}</h2>
            `;       

            //not able to do 2 GET calls?
            historyDiv.innerHTML += `
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



//operatorButton();


//send data or POST
function calculate(event) {
    //prevent refresh
    event.preventDefault();
    //confirm function
    console.log('In the POST function:');


    //target ID 
    const num1Element = document.querySelector('#numOne').value;
    const num2Element = document.querySelector('#numTwo').value;
    const operatorElement = document.querySelector('#operators');


    //confirm data
    console.log(num1Element);
    console.log(num2Element);
    console.log(OPERATOR);
    
    //variable for new data
    const goCalculate = {
        numOne: num1Element,
        numTwo: num2Element,
        operator: OPERATOR,
        
    };

    //POST info via Axios
    axios({
        method: 'POST',
        url: '/calculations',
        data: goCalculate,
    })
    .then((response) => {
        //confirm data route
        console.log(response);
        alert('New math added!!');

        //clear DOM
        const mathList = document.querySelector('#oldHistory');
        //confirm data
        console.log(mathList);
        mathList.innerHTML = '';

        //fetch new DATA
        fetchMath();
    })
    .catch((error) => {
        console.log('Error', error);
        alert('UH OH!! Check consoles for details.'); 
     });
     //clear fields
     document.querySelector('#numOne').value = '';
     document.querySelector('#numTwo').value = '';


};
//calculate();

function operatorButton(event) {
    console.log(event.target);
    event.preventDefault();
      OPERATOR = event.target.value;
    
    };



// * []Inside `<form data-testid="calculator">`:
//   * []Create a user interface where the user can input two values and select a mathematical operator.
//     * Each mathematical operator is represented by a button:
//       * `<button>+</button>`
//   * []When the `=` button is clicked, capture the input values and operator, then send this data to `POST '/calculations'`. You'll need to format it like so:
//     * `{ numOne: 25, numTwo: 10, operator: '+' }`
//   * []There should be a `'C'` button that will clear the inputs.