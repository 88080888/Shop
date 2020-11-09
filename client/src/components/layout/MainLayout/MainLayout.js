import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import styles from './MainLayout.module.scss';

const Component = ( {children} ) => (
  <div className={styles.root}>
    <AppBar position='fixed' className={styles.header}>
      <Toolbar className={styles.toolbarHeader}>
        <Header />
      </Toolbar>
    </AppBar>

    <Container 
      className={styles.contentBody}
      maxWidth='xl'
    >
      <Toolbar />
      <Toolbar className={styles.bodyToolbar} />
      {children}
      <Toolbar />
      <Toolbar />
    </Container>

    <AppBar position='fixed' className={styles.footer}>
      <Container>
        <Toolbar className={styles.footerToolbar}>
          <Footer />
        </Toolbar>
      </Container>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
