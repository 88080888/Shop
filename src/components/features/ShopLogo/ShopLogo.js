import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../../../images/logo.png';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ShopLogo.module.scss';

const Component = () => (
  <span className={styles.root}>
    <Button className={styles.link} component={Link} to={`/`}>
      <img className={styles.logo} src={logo} alt="logo" />
    </Button>
    <Button className={styles.logoText} component={Link} to={`/`}>
      <h1 className={styles.title}>Lola</h1>
      <h5 className={styles.subtitle}>Exclusive Lingerie</h5>
    </Button>
  </span>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ShopLogo,
  // Container as ShopLogo,
  Component as ShopLogoComponent,
};
