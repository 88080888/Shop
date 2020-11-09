import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={styles.root}>
    <h2>NotFound</h2>
  </div>
);

Component.propTypes = {
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
