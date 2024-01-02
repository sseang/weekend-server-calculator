//const { response } = require("../../server");

//const { response } = require("../../server");

console.log('client.js is sourced!');
let OPERATOR;

// #### Client-Side:

// * [x]Inside the `<section data-testid="recentResult">` element, display the most recent calculation **result**.
//   * [x]Update this when a new calculation is made.

// * []Inside the `<section data-testid="resultHistory">` element, display a list of all previous calculations on the page when it loads (using a `GET '/calculations'` request). 
//   * []Update this list when a new calculation is made. 
//displayed but failing test!!

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

            //not able to do 2 GET calls? (This could be because the text is broken up by multiple elements, 
            
            historyDiv.innerHTML += `
                <li>${items.numOne}${items.operator}${items.numTwo} = ${items.result}</li>
            `; 
           // <li>${String(items.numOne + items.operator + items.numTwo + '=' + items.result)}</li>

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
        numOne: Number(num1Element),
        numTwo: Number(num2Element),
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

        //fetch new DATA to render
        fetchMath();
    })
    .catch((error) => {
        console.log('Error', error);
        alert('UH OH!! Check consoles for details.'); 
     });



};
//calculate();

//function for operators
function operatorButton(event) {
    console.log(event.target);
    event.preventDefault();
      OPERATOR = event.target.value;
    
    };

//function for clear inputs
function clearInput(event) {
    console.log(event.target);
    event.preventDefault();
    //clear fields
    document.querySelector('#numOne').value = '';
    document.querySelector('#numTwo').value = '';
    
    };


