import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { addCartProduct } from '../../../redux/cartRedux';

import { ProductCount } from '../../features/ProductCount/ProductCount';
import { PhotoGallery } from '../../features/PhotoGallery/PhotoGallery';
import { formInputNumberParser } from '../../../utils';

//import styles from './Product.module.scss';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Component extends React.Component {

  state = {
    orderData: {
      finalPrice: 0,
      quantity: 0,
    },
  }

  static propTypes = {
    product: PropTypes.object,
    addCartProduct: PropTypes.func,
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
    const { product, addCartProduct } = this.props;

    const cartProduct = {};


    if(orderData.totalprice !== 0) {
      cartProduct.id = uniqid();
      cartProduct.photo = product.photo[0];
      cartProduct.name = product.name;
      cartProduct.quantity = orderData.quantity;
      cartProduct.price = orderData.totalPrice;
      cartProduct.comment = '';
      cartProduct.totalPrice = orderData.totalPrice;

      addCartProduct(cartProduct);
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
        <Card>
          <CardContent>
            <Typography>
              {product.name}
            </Typography>
            <Typography>
              {product.description}
            </Typography>
            <PhotoGallery images={product.photo} />
            <ProductCount handleChange={this.handleChange} increase={this.increaseProductQuantity} decrease={this.decreaseProductQuantity} quantity={orderData.quantity} />
            <Typography>
              Price: {orderData.totalPrice} $
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.addToCart}>Add to cart</Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addCartProduct: cartProduct => dispatch(addCartProduct(cartProduct)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
