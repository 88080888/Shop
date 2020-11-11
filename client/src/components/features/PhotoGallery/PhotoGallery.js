import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import styles from './PhotoGallery.module.scss';
import Carousel from 'react-bootstrap/Carousel';

const Component = ({images}) => (
  <Carousel className={styles.root}>
    {images.map(image => (
      <Carousel.Item key={uniqid()}>
        <img
          className='d-block w-100'
          src={image}
          alt="slide"
        />  
      </Carousel.Item>
    ))}
  </Carousel>
);

Component.propTypes = {
  images: PropTypes.node,
};

export {
  Component as PhotoGallery,
  Component as PhotoGalleryComponent,
};
