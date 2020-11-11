import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCartProducts, getCartProductsRequest } from '../../../redux/cartRedux';

import { CartProductList } from '../../features/CartProductList/CartProductList';
import { ButtonBackHomepage } from '../../common/ButtonBackHomepage/ButtonBackHomepage';

import styles from './Cart.module.scss';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Component extends React.Component {
  static propTypes = {
    cartProducts: PropTypes.array,
    getCartProducts: PropTypes.func,
  }

  totalCost() {
    const { cartProducts } = this.props;

    let totalCost = 0;

    cartProducts.map(cartProduct => totalCost += cartProduct.totalPrice);

    return totalCost;
  }

  componentDidMount() {
    const { getCartProducts } = this.props;

    getCartProducts();
  }

  render() {
    const { cartProducts } = this.props;


    return(
      <Paper className={styles.root}>
        <Grid container className = {styles.gridContainer}>
          <Grid item xs={12}>
            <Typography className={styles.title} gutterBottom variant='h3' component='h1'>
              Cart
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CartProductList cartProducts={cartProducts} />
          </Grid>
          <Grid item xs={12} className={styles.totalCostContainer}>
            <Typography className={styles.title} gutterBottom variant='h4' component='h1'>
              Total cost:{this.totalCost()}$
            </Typography>
          </Grid>
          <Grid item container className={styles.buttonsContainer}>
            <Grid item xs={6} className={styles.buttonHomepage}>
              <ButtonBackHomepage />
            </Grid>
            <Grid item xs={6} className={styles.buttonOrderSummary}>
              <Button
                variant='contained'
                size='large'
                component={NavLink}
                exact to={`/order`}
                className={styles.button}
                endIcon={<ArrowForwardIosIcon />}
              >
              ORDER SUMMARY
              </Button>
            </Grid>         
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: getAllCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  getCartProducts: () => dispatch(getCartProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Cart,
  Component as CartComponent,
};
