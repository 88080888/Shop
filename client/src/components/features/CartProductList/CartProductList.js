import React from 'react';
import PropTypes from 'prop-types';

import { CartProduct } from '../CartProduct/CartProduct';

import styles from './CartProductList.module.scss';

import Grid from '@material-ui/core/Grid';

const Component = ({cartProducts}) => (
  <Grid
    container
    className={styles.root}
    direction='column'
    justify='center'
    alignItems='center'
  >

    {cartProducts.map(cartProduct => (
      <Grid key={cartProduct.id} item>

        <CartProduct {...cartProduct} />

      </Grid>
    ))}
  </Grid>
);

Component.propTypes = {
  cartProducts: PropTypes.array,
};

export {
  Component as CartProductList,
  Component as CartProductListComponent,
};
