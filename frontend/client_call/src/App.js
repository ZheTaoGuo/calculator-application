import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import * as qs from 'qs'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const addUrl = "http://localhost:8080/add"
  const minusUrl = "http://localhost:8080/subtract"
  function performCalculation(operator, num1, num2) {

    if (operator === 'add') {
      let addOptions = {
        method: 'POST',
        url: addUrl,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
        data: qs.stringify({num1: num1, num2: num2})
      }
      axios(addOptions).then(response => {
        console.log("this is response", response)
        setResult(response.data.total)
      }).catch(error => {
        console.log("this is error", error)
      })
    }
    if (operator === 'subtract') {
      let minusOptions = {
        method: 'POST',
        url: minusUrl,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
        data: qs.stringify({num1: num1, num2: num2})
      }
      axios(minusOptions).then(response => {
        console.log("this is response", response)
        setResult(response.data.difference)
      }).catch(error => {
        console.log("this is error", error)
      })
    }
  }

  return (
    <div className="App">
      <body>
      <h1> Number Calculator </h1>

      <form id="calculator-form" action="POST">
          <label for="number1">Number 1:</label>
          <input type="number" id="number1" name="number1" value={num1} onChange={e => setNum1(e.target.value)} />
          <br/>
          <br/>
          <label for="number2">Number 2:</label>
          <input type="number" id="number2" name="number2" value={num2} onChange={e => setNum2(e.target.value)}/>
          <br/>
          <br/>
          <button type="button" id="add-button" onClick={() => performCalculation('add', num1, num2)}>Add</button>
          <button type="button" id="subtract-button" onClick={() => performCalculation('subtract', num1, num2)}>Subtract</button>
          <br/>
          <div> 
            <label for="result">Result:</label>
            <div id="result">{result}</div>
          </div>

      </form>
      </body>
    </div>
  );
}

export default App;