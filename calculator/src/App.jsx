import { useState } from 'react';
import "./App.css";

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result) || '');
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <h1 className="heading">Awesome Calculator</h1>
      <input type="text" className="result" value={result} readOnly />
      <div className="keypad">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={clear} className="clear-btn">C</button>
        <button onClick={() => handleClick('/')} className="operator-btn">/</button>
        <button onClick={calculate} className="equals-btn">=</button>
      </div>
    </div>
  );
}

export default Calculator;
