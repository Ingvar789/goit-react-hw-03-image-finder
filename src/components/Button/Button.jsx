import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';
const ImageGalleryItem = ({ onLoadMore }) => {
  return (
    <button className={css.button} type="button" onClick={() => onLoadMore()}>
      Load more
    </button>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
