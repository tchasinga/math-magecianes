import React from 'react';
import PropTypes from 'prop-types';

function CalcButton({ buttonName, onClick }) {
  const handleClick = () => {
    onClick(buttonName);
  };

  return (
    <button type="button" className="calcButton" onClick={handleClick}>
      {buttonName}
    </button>
  );
}

CalcButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CalcButton;
