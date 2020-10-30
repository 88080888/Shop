import React from 'react';
import PropTypes from 'prop-types';
import { ProductList } from '../../features/ProductList/ProductList';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../redux/productsRedux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

class Component extends React.Component {

  static propTypes = {
    products: PropTypes.array,
  }  
  
  render() {
    const { products } = this.props;

    return(
      <Paper>
        <Grid container  className={styles.gridContainer} justify='center'>
          <Grid item>
            <ProductList products={products}/>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}


const mapStateToProps = state => ({
  products: getAllProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
