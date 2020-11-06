import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import { CartProductList } from '../../features/CartProductList/CartProductList';
import Grid from '@material-ui/core/Grid';

import styles from './Cart.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Component extends React.Component {
  static propTypes = {
    cartProducts: PropTypes.array,
  }

  totalCost() {
    const { cartProducts } = this.props;

    let totalCost = 0;

    cartProducts.map(cartProduct => totalCost += cartProduct.totalPrice);

    return totalCost;
  }

  render() {
    const { cartProducts } = this.props;


    return(
      <Paper>
        <Grid container className = {styles.gridContainer}>
          <Grid item xs={12}>
            <Typography className={styles.title} gutterBottom variant="h3" component="h1">
              Cart
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CartProductList cartProducts={cartProducts} />
          </Grid>
          <Grid item xs={12} className={styles.totalCostContainer}>
            <Typography className={styles.title} gutterBottom variant="h4" component="h1">
              Total cost:{this.totalCost()}$
            </Typography>
          </Grid>
          <Grid item container className={styles.buttonsContainer}>
            <Grid item xs={6} className={styles.buttonHomepage}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                className={styles.button}
                component={NavLink}
                exact to={`/`}
                startIcon={<ArrowBackIosIcon />}
              >
                BACK TO HOMEPAGE
              </Button>
            </Grid>
            <Grid item xs={6} className={styles.buttonOrderSummary}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                className={styles.button}
                component={NavLink}
                exact to={`/order`}
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

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
