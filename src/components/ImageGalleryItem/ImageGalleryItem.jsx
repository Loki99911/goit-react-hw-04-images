import PropTypes from 'prop-types';
import React from 'react';

export const ImageGalleryItem = ({ url, text, largeImg, funcToggle }) => {
  return (
    <li className="ImageGalleryItem" onClick={() => funcToggle(largeImg, text)}>
      <img src={url} alt={text} className="ImageGalleryItem-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  funcToggle: PropTypes.func.isRequired,
};