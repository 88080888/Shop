import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAllCartProducts } from '../../../redux/cartRedux';

import { CartProductList } from '../../features/CartProductList/CartProductList';

import styles from './Cart.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        <Typography className={styles.title} gutterBottom variant="h3" component="h1">
          Cart
        </Typography>
        <CartProductList cartProducts={cartProducts} />
        <Typography className={styles.title} gutterBottom variant="h4" component="h1">
          Total cost:{this.totalCost()}$
        </Typography>
        <Button
          variant='contained'
          size='large'
          color='primary'
          className={styles.button}
          component={NavLink}
          exact to={`/order`}
        >
        ORDER SUMMARY
        </Button>
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
