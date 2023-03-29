import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, webformatURL, tags, onShowModal }) => {
  return (
    <li key={id} className={css.imageGalleryItem} onClick={onShowModal}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.imageGalleryItemImage}
      />
    </li>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onShowModal: PropTypes.func,
};
