import React, { useState } from 'react'
import './mainStyles.css'

function App() {
  const [display, setDisplay] = useState('')
  const [result, setResult] = useState('')

  const calculate = (expression) => {
    const tokens = expression.match(/(\d+\.?\d*)|[+\-*/]/g) || [];
    
    if (!tokens.length) return '';

    let result = parseFloat(tokens[0]);
    
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const number = parseFloat(tokens[i + 1]);

      switch (operator) {
        case '+':
          result += number;
          break;
        case '-':
          result -= number;
          break;
        case '*':
          result *= number;
          break;
        case '/':
          if (number === 0) {
            return 'Error';
          }
          result /= number;
          break;
        default:
          return 'Error';
      }
    }

    return result.toString();
  }

  const handleNumber = (value) => {
    if (result === 'Error') {
      setDisplay(value)
      setResult('')
    } else {
      setDisplay(display + value)
    }
  }

  const handleOperator = (operator) => {
    if (display !== '' && !display.endsWith(operator)) {
      setDisplay(display + operator)
      setResult('')
    }
  }

  const handleEqual = () => {
    try {
      const calculatedResult = calculate(display)
      setResult(calculatedResult)
      setDisplay(calculatedResult)
    } catch (error) {
      setResult('Error')
      setDisplay('')
    }
  }

  const handleClear = () => {
    setDisplay('')
    setResult('')
  }

  return (
    <div className="container">
      <div className="left-light"></div>
      <div className="right-light"></div>
      <input 
        type="text" 
        className="display" 
        value={display} 
        readOnly 
      />
      <div className="buttons">
        <button className="btn clear" onClick={handleClear}>C</button>
        <button className="btn operator" onClick={() => handleOperator('/')}>/</button>
        <button className="btn operator" onClick={() => handleOperator('*')}>×</button>
        <button className="btn operator" onClick={() => handleOperator('-')}>-</button>
        
        <button className="btn" onClick={() => handleNumber('7')}>7</button>
        <button className="btn" onClick={() => handleNumber('8')}>8</button>
        <button className="btn" onClick={() => handleNumber('9')}>9</button>
        <button className="btn operator" onClick={() => handleOperator('+')}>+</button>
        
        <button className="btn" onClick={() => handleNumber('4')}>4</button>
        <button className="btn" onClick={() => handleNumber('5')}>5</button>
        <button className="btn" onClick={() => handleNumber('6')}>6</button>
        <button className="btn" onClick={() => handleNumber('.')}>.</button>
        
        <button className="btn" onClick={() => handleNumber('1')}>1</button>
        <button className="btn" onClick={() => handleNumber('2')}>2</button>
        <button className="btn" onClick={() => handleNumber('3')}>3</button>
        <button className="btn" onClick={() => handleNumber('0')}>0</button>
        
        <button className="btn equals" onClick={handleEqual}>=</button>
      </div>
    </div>
  )
}

export default App
