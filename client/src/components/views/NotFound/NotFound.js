import React from 'react';
import PropTypes from 'prop-types';

import styles from './NotFound.module.scss';

const Component = () => (
  <div className={styles.root}>
    <h2>NotFound</h2>
  </div>
);

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
