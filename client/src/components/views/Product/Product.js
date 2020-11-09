import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductById, getProductByIdRequest } from '../../../redux/productsRedux';
import { addCartProductRequest } from '../../../redux/cartRedux';

import { ProductCount } from '../../features/ProductCount/ProductCount';
import { PhotoGallery } from '../../features/PhotoGallery/PhotoGallery';
import { formInputNumberParser } from '../../../utils';

import styles from './Product.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';

class Component extends React.Component {

  state = {
    orderData: {
      totalPrice: 0,
      quantity: 0,
    },
  }

  static propTypes = {
    product: PropTypes.object,
    addCartProductRequest: PropTypes.func,
    getProductByIdRequest: PropTypes.func,
  }

  componentDidMount() {
    const { getProductByIdRequest } = this.props;
    getProductByIdRequest();
  }  

  handleChange = (event) => {
    const { orderData } = this.state;
    const { value, id } = event.target;
    const { product } = this.props;

    const parsedValue = formInputNumberParser(value);
    const totalPrice = parsedValue * product.price;

    this.setState({
      orderData: {
        ...orderData,
        [id]: parsedValue,
        totalPrice: totalPrice,
      },
    });
  }

  decreaseProductQuantity = () => {
    const { orderData } = this.state;
    const { product } = this.props;

    if (orderData.quantity === 0) {
      return;
    }

    const newQuantity = orderData.quantity - 1;

    const totalPrice = newQuantity * product.price;

    this.setState({
      orderData: {
        ...orderData,
        quantity: newQuantity,
        totalPrice: totalPrice,
      },
    });
  }

  increaseProductQuantity = () => {
    const { orderData } = this.state;
    const { product } = this.props;

    if (orderData.quantity === 999) {
      return;
    }

    const newQuantity = orderData.quantity + 1;
    const totalPrice = newQuantity * product.price;

    this.setState({
      orderData: {
        ...orderData,
        quantity: newQuantity,
        totalPrice: totalPrice,
      },
    });
  }

  addToCart = () => {
    const { orderData } = this.state;
    const { product, addCartProductRequest } = this.props;

    const cartProduct = {};


    if(orderData.totalprice !== 0) {
      cartProduct.id = uniqid();
      cartProduct.photo = product.photo[0];
      cartProduct.name = product.name;
      cartProduct.quantity = orderData.quantity;
      cartProduct.price = orderData.totalPrice;
      cartProduct.comment = '';
      cartProduct.totalPrice = orderData.totalPrice;
      cartProduct.productId = product._id;

      addCartProductRequest(cartProduct);
      alert('Product added to the cart');
    }
    else {
      alert('Please pick at least one product');
    }
  }

  render() {
    const {product} = this.props;
    const { orderData } = this.state;

    return(
      <Paper>
        <Grid container className={styles.gridContainer}>

          <Grid item xs={12}>
            <Typography               
              className={styles.title}
              gutterBottom
              variant='h3'
              component='h1'
            >
              {product.name}            
            </Typography>
          </Grid>  

          <Grid item xs={12}>
            <Typography
              variant='h4'
              component='p'
              className={styles.description}
            >
              {product.description}
            </Typography>
          </Grid>

          <Grid item xs={12} container>
            
            <Grid item xs={12} sm={6}>
              <PhotoGallery
                images={product.photo}
              />
            </Grid>


            <Grid item xs container direction='column' className={styles.featuresContainer}>

              <Grid item className={styles.productCounterContainer}>
                <ProductCount
                  handleChange={this.handleQuantityChange}
                  increase={this.increaseProductQuantity}
                  decrease={this.decreaseProductQuantity}
                  quantity={orderData.quantity}
                />
              </Grid>
              
              <Grid item>
                <Typography
                  variant='h5'
                  component='p'
                  className={styles.totalPrice}
                >
                  Price: {orderData.totalPrice}$
                </Typography>
              </Grid>
              
              <Grid item container>
                <Grid item xs={12} md={6} className={styles.buttonHomepage}>
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

                <Grid item xs={12} md={6} className={styles.buttonCart}>
                  <Button
                    variant='contained'
                    size='large'
                    color='primary'
                    onClick={this.addToCart}
                    className={styles.button}
                    startIcon={<AddIcon />}
                  >
                    <span>ADD TO CART</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch,props) => ({
  addCartProductRequest: cartProduct => dispatch(addCartProductRequest(cartProduct)),
  getProductByIdRequest: () => dispatch(getProductByIdRequest(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
