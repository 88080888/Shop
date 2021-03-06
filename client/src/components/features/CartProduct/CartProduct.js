import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { ProductCount } from '../ProductCount/ProductCount';
import { connect } from 'react-redux';
import { removeCartProductRequest, updateCartProductRequest } from '../../../redux/cartRedux.js';
import { formInputNumberParser } from '../../../utils';

import styles from './CartProduct.module.scss';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

class Component extends React.Component {

  state = {
    cartProductData: {
      totalPrice: this.props.totalPrice,
      quantity: this.props.quantity,
      comment: this.props.comment,
    },
  }

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.node,
    quantity: PropTypes.number,
    price: PropTypes.number,
    comment: PropTypes.string,
    removeCartProduct: PropTypes.func,
    totalPrice: PropTypes.number,
    updateCartProduct: PropTypes.func,
    productId: PropTypes.string,
  }

  removeFromCart = () => {
    const { id, removeCartProduct } = this.props;
    removeCartProduct(id);
  }

  handleQuantityChange = (event) => {
    const { cartProductData } = this.state;
    const { value, id } = event.target;
    const { price, updateCartProduct } = this.props;
    const parsedValue = formInputNumberParser(value);
    const totalPrice = parsedValue * price;

    this.setState({
      cartProductData: {
        ...cartProductData,
        totalPrice: totalPrice,
        [id]: parsedValue,
      },
    });

    const cartProduct = {};

    cartProduct.id = this.props.id;
    cartProduct.key = id;
    cartProduct.value = parsedValue;
    cartProduct.totalPrice = totalPrice;

    updateCartProduct(cartProduct);
  }

  handleCommentChange = (event) => {
    const { cartProductData } = this.state;
    const { value } = event.target;
    const { updateCartProduct, id } = this.props;

    this.setState({
      cartProductData: {
        ...cartProductData,
        'comment': value,
      },
    });

    const cartProduct = {};

    cartProduct.id = id;
    cartProduct.key = 'comment';
    cartProduct.value = value;

    updateCartProduct(cartProduct);
  }

  increaseCartProductQuantity = () => {
    const { cartProductData } = this.state;
    const { price, id, updateCartProduct } = this.props;

    if(cartProductData.quantity === 999) {
      return;
    }

    const newQuantity = cartProductData.quantity + 1;
    const totalPrice = newQuantity * price;

    this.setState({
      cartProductData: {
        ...cartProductData,
        quantity: newQuantity,
        totalPrice: totalPrice,
      },
    });

    const cartProduct = {};

    cartProduct.id = id;
    cartProduct.key = 'quantity';
    cartProduct.value = newQuantity;
    cartProduct.totalPrice = totalPrice;

    updateCartProduct(cartProduct);
  }

  decreaseCartProductQuantity = () => {
    const { cartProductData } = this.state;
    const { price, id, updateCartProduct } = this.props;

    if(cartProductData.quantity === 1) {
      return;
    }

    const newQuantity = cartProductData.quantity - 1;
    const totalPrice = newQuantity * price;

    this.setState({
      cartProductData: {
        ...cartProductData,
        quantity: newQuantity,
        totalPrice: totalPrice,
      },
    });

    const cartProduct = {};

    cartProduct.id = id;
    cartProduct.key = 'quantity';
    cartProduct.value = newQuantity;
    cartProduct.totalPrice = totalPrice;

    updateCartProduct(cartProduct);
  }

  render() {
    const { productId, name, photo } = this.props;
    const { cartProductData } = this.state;

    return(
      <Grid container className={styles.root} spacing={2} align='center' alignItems='center'>

        <Grid item xs={2} className={styles.imageBoxContainer}>
          <ButtonBase 
            className={styles.imageContainer} 
            component={NavLink}
            exact to={`/product/${productId}`}
          >
            <img className={styles.image} src={photo} alt='product' />
          </ButtonBase>
        </Grid>

        <Grid item xs={3} className={styles.productNameContainer}>
          <Typography className={styles.productName} variant='h6'>
            {name}
          </Typography>
        </Grid>

        <Grid  item xs={2} className={styles.formFieldLine}>
            <ProductCount
              handleChange={this.handleQuantityChange}
              quantity={cartProductData.quantity}
              increase={this.increaseCartProductQuantity}
              decrease={this.decreaseCartProductQuantity}
            />
        </Grid>

        <Grid className={styles.price}  item xs={1} >
              ${cartProductData.totalPrice}
        </Grid>

        <Grid  item xs={3} className={styles.formFieldLine}>
            <TextField
              id='comment'
              label='Comment'
              variant='outlined'
              multiline
              rows={1}
              rowsMax={4}
              inputProps={{
                maxLength: 100,
              }}
              className={styles.commentField}
              value={cartProductData.comment}
              onChange={this.handleCommentChange}
            />
        </Grid>

        <Grid  item xs={1} className={styles.iconContainer}>
          <Button onClick={this.removeFromCart}>
            <DeleteIcon className={styles.icon} />
          </Button>
        </Grid>

      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeCartProduct: id => dispatch(removeCartProductRequest(id)),
  updateCartProduct: updatedCartProduct => dispatch(updateCartProductRequest(updatedCartProduct)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as CartProduct,
  Component as CartProductComponent,
};
