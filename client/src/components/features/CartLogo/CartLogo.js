import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { getAllCartProducts } from '../../../redux/cartRedux';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartLogo.module.scss';

import Button from '@material-ui/core/Button';

class Component extends React.Component {

  static propTypes = {
    cartProducts: PropTypes.array,
  }  

  cartProductCounter() {
    const { cartProducts } = this.props;
    let totalQuantity = 0;
    cartProducts.map(cartProduct => totalQuantity += cartProduct.quantity);
    return totalQuantity;
  }

  render() {
    return(
      <div className={styles.root}>
        <Button className={styles.link} component={Link} to={`/cart`}>
          <ShoppingBasketIcon className={styles.icon} />
        </Button>
        <span className={styles.productCounter}>{this.cartProductCounter()}</span>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cartProducts: getAllCartProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as CartLogo,
  Container as CartLogo,
  Component as CartLogoComponent,
};
