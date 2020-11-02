import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderSummary.module.scss';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';


const Component = ({cartProducts}) => (
  <Table aria-label='simple table'>
    <TableHead>
      <TableRow>
        <TableCell>Product</TableCell>
        <TableCell>Quantity</TableCell>
        <TableCell>Comment</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cartProducts.map(cartProduct => (
        <TableRow key={cartProduct.id}>
          <TableCell>{cartProduct.name}</TableCell>
          <TableCell>{cartProduct.quantity}</TableCell>
          <TableCell>{cartProduct.comment}</TableCell>
          <TableCell>{cartProduct.finalPrice}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

Component.propTypes = {
  cartProducts: PropTypes.array,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderSummary,
  // Container as OrderSummary,
  Component as OrderSummaryComponent,
};
