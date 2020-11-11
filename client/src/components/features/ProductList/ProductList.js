import React from 'react';
import PropTypes from 'prop-types';
import { ProductBox } from '../ProductBox/ProductBox';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import styles from './ProductList.module.scss';

const Component = ({ products }) => (
  <Grid 
    container
    className={styles.root}
    direction='row'
    justify='space-around'
    alignItems='flex-start'
  >
    <Grid item xs={12}>
      <Paper elevation={0} className={styles.head}>OUR PRODUCTS</Paper>
    </Grid>
    {products.map(product => (
      <Grid key={product._id} item spacing={2}>
        <ProductBox {...product}/>
      </Grid>
    ))}  
  </Grid>
);

Component.propTypes = {
  products: PropTypes.array,
};

export {
  Component as ProductList,
  Component as ProductListComponent,
};
