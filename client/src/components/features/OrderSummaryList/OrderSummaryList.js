import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummaryList.module.scss';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

const Component = ({cartProducts}) => (
  <Table aria-label='simple table' className={styles.root}>
    <TableHead>
      <TableRow>
        <TableCell align='center'  className={styles.tableHead}>Product</TableCell>
        <TableCell align='center' className={styles.tableHead}>Quantity</TableCell>
        <TableCell align='center' className={styles.tableHead}>Comment</TableCell>
        <TableCell align='center' className={styles.tableHead}>Price</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cartProducts.map(cartProduct => (
        <TableRow key={cartProduct.id}>
          <TableCell align='center' className={styles.tableBody}>{cartProduct.name}</TableCell>
          <TableCell align='center' className={styles.tableBody}>{cartProduct.quantity}</TableCell>
          <TableCell align='center' className={styles.tableBody}>{cartProduct.comment}</TableCell>
          <TableCell align='center' className={styles.tableBody}>{cartProduct.totalPrice} $</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

Component.propTypes = {
  cartProducts: PropTypes.array,
};

export {
  Component as OrderSummaryList,
  Component as OrderSummaryListComponent,
};
