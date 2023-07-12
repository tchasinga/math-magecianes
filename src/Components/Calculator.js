import React, { useState } from 'react';
import calculate from '../logic/Calculate';
import CalcButton from './CalcButton';
import './desiCalc.css';

const CaculElement = [
  'AC',
  '+/-',
  '%',
  '÷',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);

    if (newData.total !== null) {
      setCalculatorData(newData);
      setDisplayValue(newData.total);
    } else if (newData.next !== null) {
      setCalculatorData(newData);
      setDisplayValue(newData.next);
    } else {
      setCalculatorData(newData);
      setDisplayValue('0');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        {CaculElement.map((number) => (
          <CalcButton key={number} onClick={handleClick} buttonName={number} />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
