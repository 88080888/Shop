import React from 'react';
import styles from './Header.module.scss';
import { CartLogo } from '../../features/CartLogo/CartLogo';
import { ShopLogo } from '../../features/ShopLogo/ShopLogo';

const Component = () => (
  <div className={styles.root}>
    <ShopLogo />
    <CartLogo />
  </div>
);

export {
  Component as Header,
  Component as HeaderComponent,
};
