import React from 'react';
import PropTypes from 'prop-types';
import { ProductBox } from '../ProductBox/ProductBox';

import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductList.module.scss';

const Component = ({className, children}) => (
  <Grid
    container
    className={styles.root}
    direction='row'
    justify='space-around'
    alignItems='center'
  >

    <Grid item>
      <ProductBox />
    </Grid>
  </Grid>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductList,
  // Container as ProductList,
  Component as ProductListComponent,
};
