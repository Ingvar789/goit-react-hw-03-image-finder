import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

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

  showModal = index => {
    this.imageToModal = this.props.pictures[index].largeImageURL;
    this.tagToModal = this.props.pictures[index].tags;

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
        <ul className={css['ImageGallery']}>
          {pictures.map(({ id, webformatURL, tags }, index) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tag={tags}
              onShowModal={() => this.showModal(index)}
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
