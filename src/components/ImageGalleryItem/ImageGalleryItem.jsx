import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, webformatURL, tags, onShowModal }) => {
  return (
    <li key={id} className={css['ImageGalleryItem']} onClick={onShowModal}>
      <img
        src={webformatURL}
        alt={tags}
        className={css['ImageGalleryItem-image']}
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
