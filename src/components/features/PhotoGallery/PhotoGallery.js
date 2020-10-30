import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PhotoGallery.module.scss';

const Component = ({images}) => (
  <div className={styles.root}>
    <h2>PhotoGallery</h2>
  </div>
);

Component.propTypes = {
  images: PropTypes.node,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PhotoGallery,
  // Container as PhotoGallery,
  Component as PhotoGalleryComponent,
};
