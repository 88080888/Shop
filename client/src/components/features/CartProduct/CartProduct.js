import React from 'react';
import PropTypes from 'prop-types';

import { ProductCount } from '../ProductCount/ProductCount';
import { connect } from 'react-redux';
import { removeCartProduct, updateCartProduct } from '../../../redux/cartRedux.js';
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
      <Grid container className={styles.root} spacing={2}>

        <Grid item>
          <ButtonBase className={styles.imageContainer} exact to={`/product/${productId}`}>
            <img className={styles.image} src={photo} alt='product' />
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>

          <Grid  item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography className={styles.productName} gutterBottom variant='subtitle1'>
                {name}
              </Typography>
            </Grid>
            <Grid item xs>
              <ProductCount handleChange={this.handleQuantityChange} quantity={cartProductData.quantity} increase={this.increaseCartProductQuantity} decrease={this.decreaseCartProductQuantity} />
            </Grid>
            <Grid item xs>
              <TextField
                id='comment'
                label='Comment'
                variant='outlined'
                multiline
                rowsMax={4}
                inputProps={{
                  maxLength: 100,
                }}
                className={styles.commentField}
                value={cartProductData.comment}
                onChange={this.handleCommentChange}
              />
            </Grid>
          </Grid>

          <Grid  item xs container direction='column' spacing={2}>
            <Grid className={styles.price} item>
              ${cartProductData.totalPrice}
            </Grid>
            <Grid item className={styles.iconContainer}>
              <Button onClick={this.removeFromCart}>
                <DeleteIcon className={styles.icon} />
              </Button>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    );
  }
}


// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  removeCartProduct: id => dispatch(removeCartProduct(id)),
  updateCartProduct: updatedCartProduct => dispatch(updateCartProduct(updatedCartProduct)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  //Component as CartProduct,
  Container as CartProduct,
  Component as CartProductComponent,
};
