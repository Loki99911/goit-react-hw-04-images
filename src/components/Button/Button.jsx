import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ page }) => {
  return (
    <button type="button" className="Button" onClick={() => page()}>
      Load more
    </button>
  );
};

Button.propTypes = {
  page: PropTypes.func.isRequired,
};
