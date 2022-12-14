import PropTypes from 'prop-types';
import React from 'react'; //, { Component }
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imgArr, funcToggle }) => {
  return (
    <ul className="ImageGallery">
      {imgArr.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            url={img.webformatURL}
            text={img.tags}
            largeImg={img.largeImageURL}
            funcToggle={funcToggle}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  funcToggle: PropTypes.func.isRequired,
};