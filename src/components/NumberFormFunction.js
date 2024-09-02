import React, { useState } from 'react';

const NumberFormFunction = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [results, setResults] = useState({ sum: '', difference: '', product: '', remainder: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = parseFloat(value) || 0;
    if (name === 'num1') setNum1(newValue);
    if (name === 'num2') setNum2(newValue);
    calculateResults(name === 'num1' ? newValue : num1, name === 'num2' ? newValue : num2);
  }

  const calculateResults = (number1, number2) => {
    setResults({
      sum: number1 + number2,
      difference: number1 - number2,
      product: number1 * number2,
      remainder: number1 % number2
    });
  }

  return (
    <div>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={handleChange}
        placeholder="Enter number 1"
      />
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={handleChange}
        placeholder="Enter number 2"
      />
      <div>Sum: {results.sum}</div>
      <div>Difference: {results.difference}</div>
      <div>Product: {results.product}</div>
      <div>Remainder: {results.remainder}</div>
    </div>
  );
}

export default NumberFormFunction;
