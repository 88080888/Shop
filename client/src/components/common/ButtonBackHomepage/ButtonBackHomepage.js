import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import styles from './ButtonBackHomepage.module.scss';

const Component = () => (
  <Button
    variant='contained'
    size='large'
    component={NavLink}
    exact to={`/`}
    className={styles.buttonBackHomepage}
    startIcon={<ArrowBackIosIcon />}
  >
  BACK TO HOMEPAGE
  </Button>
);

export {
  Component as ButtonBackHomepage,
  Component as ButtonBackHomepageComponent,
};
