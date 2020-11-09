import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductCount.module.scss';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';

const Component = ({handleChange, increase, decrease, quantity}) => (
  <div className={styles.root}>
    <Button onClick={decrease} className={styles.button}><RemoveIcon className={styles.icon} /></Button>
    <TextField
      id="quantity"
      label="Quantity"
      variant="outlined"
      type="number"
      inputProps={{
        min: 0,
        max: 999,
        step: 1,
      }}
      onChange={handleChange}
      required
      className={styles.counter}
      value={quantity}
    />
    <Button onClick={increase} className={styles.button}><AddIcon className={styles.icon} /></Button>
  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func,
  increase: PropTypes.func,
  decrease: PropTypes.func,
  quantity: PropTypes.number,
};

export {
  Component as ProductCount,
  Component as ProductCountComponent,
};
