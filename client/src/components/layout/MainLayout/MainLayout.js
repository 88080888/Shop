import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position='fixed' className={styles.header}>
      <Toolbar className={styles.toolbarHeader}>
        <Header />
      </Toolbar>
    </AppBar>

    <Container className={styles.contentBody}>
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
