import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { OrderSummaryList } from '../../features/OrderSummaryList/OrderSummaryList';
import { OrderForm } from '../../features/OrderForm/OrderForm';

import { connect } from 'react-redux';
import { getAllCartProducts, clearCartRequest, getCartProductsRequest } from '../../../redux/cartRedux.js';
import { addOrderRequest } from '../../../redux/ordersRedux';

import styles from './OrderSummary.module.scss';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SendIcon from '@material-ui/icons/Send';

class Component extends React.Component {
  state = {
    orderData: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      message: '',
      ordered: '',
      totalCost: '',
      orderDetails: this.props.cartProducts,
    }, 
  }

  static propTypes = {
    cartProducts: PropTypes.array,
    addOrderRequest: PropTypes.func,
    clearCartProducts: PropTypes.func,
    getCartProducts: PropTypes.func,
  }

  componentDidMount() {
    const { getCartProducts } = this.props;

    getCartProducts();
  }

  totalCost() {
    const { cartProducts } = this.props;

    let totalCost = 0;

    cartProducts.map(cartProduct => totalCost += cartProduct.totalPrice);

    return totalCost;
  }

  handleChange = (event) => {
    const { orderData } = this.state;
    const { value, id, name } = event.target;

    if(id) {
      this.setState({
        orderData: {
          ...orderData,
          [id]: value,
        },
      })
    }
    else {
      this.setState({
        orderData: {
          ...orderData,
          [name]: value,
        },
      });
    }
  }

  setOrderParams = () => {
    const { orderData } = this.state;
    const date = new Date();
    const totalCost = this.totalCost();

    this.setState({
      orderData: {
        ...orderData,
        ordered: date,
        totalCost: totalCost,
      },
    });
  }

  clearCart() {
    const { clearCartProducts } = this.props;
    this.setState({
      orderData: {
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
        ordered: '',
        totalCost: '',
      },
    });
    clearCartProducts();
  }  

  submitForm = async(event) => {
    const { orderData } = this.state;
    const { addOrderRequest, cartProducts } = this.props;

    event.preventDefault();

    let error = null;

    if(cartProducts.length === 0) error='Your cart is empty!';

    if(!orderData.name.length || !orderData.surname.length || !orderData.email.length || !orderData.phone) error='All form fields should be filled';
    else if(orderData.name.length > 15 || orderData.surname.length > 20) error ='Name or surname is too long. Name max 15 characters, surname max 20';

    if(!error) {
      await addOrderRequest(orderData);
      alert('Order submitted successfully');
      this.clearCart();
    } else {
      alert(error);
    }
  }

  render() {
    const { cartProducts } = this.props;
    const { orderData } = this.state;

    return(
      <Paper className={styles.root}>
        <Grid item xs={12}>
          <Typography
            className={styles.title}
            gutterBottom
            variant='h4'
            component='h1'
          >
            Order summary
          </Typography>
        </Grid>

        <Grid item xs={12} className={styles.orderList}>
          <OrderSummaryList cartProducts={cartProducts} />
        </Grid>
        
        <Grid item xs={12} className={styles.totalCostContainer}>
          <Typography className={styles.totalCost} gutterBottom variant="h4" component="span">
            Total cost: {this.totalCost()}$
          </Typography>
        </Grid>

        <Grid item xs={12} className={styles.contactFormHeaderContainer}>
          <Typography
            gutterBottom
            variant='h4'
            component='h1'
            className={styles.title}
          >
              Contact form
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={6} className={styles.form}>
          <OrderForm
            orderData={orderData}
            handleChange={this.handleChange}
            submitForm={this.submitForm}
            formId='orderSummaryForm'
          />
        </Grid>

        <Grid item container className={styles.buttonsContainer}>

          <Grid item xs={12} sm={5} className={styles.buttonCart}>
            <Button
              variant='contained'
              size='large'
              component={NavLink}
              exact to={`/cart`}
              className={styles.buttonBackCart}
              startIcon={<ArrowBackIosIcon />}
            >
              BACK TO CART
            </Button>
          </Grid>

          <Grid item xs={12} sm={5} className={styles.buttonSubmitOrder}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              className={styles.buttonSend}
              type='submit'
              onClick={this.setOrderParams}
              form='orderSummaryForm'
              endIcon={<SendIcon />}
            >
              SUBMIT ORDER
            </Button>
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
  addOrderRequest: orderData => dispatch(addOrderRequest(orderData)),
  clearCartProducts: () => dispatch(clearCartRequest()),
  getCartProducts: () => dispatch(getCartProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as OrderSummary,
  Component as OrderSummaryComponent,
};
