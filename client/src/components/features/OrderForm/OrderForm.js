import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderForm.module.scss';

import TextField from '@material-ui/core/TextField';

const Component = ({submitForm, orderData, setOrderDate, handleChange, formId}) => (
  <form
    className={styles.form}
    onSubmit={submitForm}
    id={formId}
  >
    <TextField
      id='name'
      label='Name'
      variant='outlined'
      InputProps={{
        minLength: 10,
      }}
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.name}
    />
    <TextField
      id='surname'
      label='Surname'
      variant='outlined'
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.surname}
    />
    <TextField
      id='address'
      label='Address'
      variant='outlined'
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.address}
    />
    <TextField
      id='email'
      label='Email'
      variant='outlined'
      type='email'
      required
      fullWidth
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.email}
    />
    <TextField
      id='phone'
      label='Phone number'
      variant='outlined'
      type='tel'
      className={styles.formFieldPartialWidth}
      onChange={handleChange}
      value={orderData.phone}
    />

    <TextField
    fullWidth
      name='message'
      label='Message'
      variant='outlined'
      multiline
      rows={4}
      rowsMax={4}
      inputProps={{
        maxLength: 100,
      }}
      className={styles.formFieldFullWidth}
      onChange={handleChange}
      value={orderData.message}
    />

  </form>
);

Component.propTypes = {
  submitForm: PropTypes.func,
  orderData: PropTypes.object,
  formId: PropTypes.string,
  handleChange: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderForm,
  // Container as OrderForm,
  Component as OrderFormComponent,
};
