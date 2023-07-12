import React from 'react';
import PropTypes from 'prop-types';
import './desiCalc.css';

function Items({ number }) {
  let className = 'input-btn';

  if (['/', 'x', '-', '+', '='].includes(number)) {
    className += ' signs';
  } else if (number === '0') {
    className += ' zero';
  } else if (['AC', '+/-', '%'].includes(number)) {
    className += ' top';
  }

  return <div className={className}>{number}</div>;
}

Items.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Items;
