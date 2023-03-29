import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    isModalVisible: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.setState({ isModalVisible: false });
    }
  };

  imageToModal = '';
  tagToModal = '';

  showModal = id => {
    for (let picture of this.props.pictures) {
      if (picture.id === id) {
        this.imageToModal = picture.largeImageURL;
        this.tagToModal = picture.tags;
      }
    }

    this.setState({ isModalVisible: true });
  };

  hideModal = event => {
    if (event.target === event.currentTarget) {
      this.setState({ isModalVisible: false });
    }
  };

  render() {
    const { pictures } = this.props;
    const { isModalVisible } = this.state;
    return (
      <>
        <ul className={css.imageGallery}>
          {pictures.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tag={tags}
              onShowModal={() => this.showModal(id)}
            />
          ))}
        </ul>
        {isModalVisible && (
          <Modal
            imageModal={this.imageToModal}
            tagModal={this.tagToModal}
            onHide={this.hideModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(Object),
};
