import React from 'react';
import Calculator from './Calculator';
import './desiCalc.css';
import Makesomlogic from './Simplemessage';

function Caculating() {
  return (
    <div className="calcContainer">
      <Makesomlogic />
      <Calculator />
    </div>
  );
}

export default Caculating;
