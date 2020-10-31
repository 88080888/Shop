import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { ProductCount } from '../../features/ProductCount/ProductCount';
import { PhotoGallery } from '../../features/PhotoGallery/PhotoGallery';
import { formInputNumberParser } from '../../../utils';

import styles from './Product.module.scss';

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
            <Button>Add to cart</Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
