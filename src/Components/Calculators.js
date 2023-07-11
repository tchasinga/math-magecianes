import React from "react";
import Items from "./Calcmyitems";
const CaculElement = [
    'AC',
    '+/-',
    '%',
    '/',
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
function Caculating() {
  return (
    <div className="calcContainer">
        <div className="disPlayresult">0</div>
        {CaculElement.map((number) => (
            <Items number={number}/>
        ))}
    </div>
  );
}

export default Caculating;
