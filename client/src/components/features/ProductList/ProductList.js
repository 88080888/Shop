import React from 'react';
import PropTypes from 'prop-types';
import { ProductBox } from '../ProductBox/ProductBox';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductList.module.scss';


const Component = ({ products }) => (
  <Grid 
    container
    className={styles.root}
    direction='row'
    justify='space-around'
    alignItems='center'
  >
    <Grid item xs={12}>
      <Paper elevation={0} className={styles.head}>OUR PRODUCTS</Paper>
    </Grid>
    {products.map(product => (
      <Grid key={product._id} item >
        <ProductBox {...product} />
      </Grid>
    ))}  
  </Grid>
);

Component.propTypes = {
  products: PropTypes.array,
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
