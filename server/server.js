const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [
  {
    numOne: 3,
    numTwo: 5,
    operator: '+',
    result: 8
  },
  {
    numOne: 11,
    numTwo: 7,
    operator: '-',
    result: 4

  }
];

//create array for recent results in another file on server??
//let recentMath = []

// Here's a wonderful place to make some routes:

// GET /calculations

// [x] Create a `GET '/calculations'` route that will send the `calculations` array back to the client.
app.get('/calculations', (req, res) => {
  res.send(calculations);
});

// POST /calculations

// [] Create a `POST '/calculations` route that will "do the math" and obtain the correct `result` value. check with(" ") in POSTMAN
app.post('/calculations', (req, res) => {
  //store & confirm data
  let newCalculation = req.body;
  console.log('Get a POST request', newCalculation);

  switch(newCalculation.operator) {
    case '+':
      newCalculation.result = Number(newCalculation.numOne) + Number(newCalculation.numTwo)
      break
    case '-':
      newCalculation.result = Number(newCalculation.numOne) - Number(newCalculation.numTwo)
      break        
    case '*':
      newCalculation.result = Number(newCalculation.numOne) * Number(newCalculation.numTwo)
      break
    case '/':
      newCalculation.result = Number(newCalculation.numOne) / Number(newCalculation.numTwo)
      break
      default:
        return
  };

  //if ()""

  //add data to array
  calculations.push(newCalculation);

  //confirm data & route
  res.sendStatus(201);
});









// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
