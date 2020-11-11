import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import logo from '../../../images/logo.png';

import styles from './ShopLogo.module.scss';

const Component = () => (
  <span className={styles.root}>
    <Button className={styles.link} component={Link} to={`/`}>
      <img className={styles.logo} src={logo} alt='logo' />
    </Button>
    <Button className={styles.logoText} component={Link} to={`/`}>
      <h1 className={styles.title}>Lola</h1>
      <h5 className={styles.subtitle}>Exclusive Lingerie</h5>
    </Button>
  </span>
);

export {
  Component as ShopLogo,
  Component as ShopLogoComponent,
};
