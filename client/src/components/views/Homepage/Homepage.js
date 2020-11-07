import React from 'react';
import PropTypes from 'prop-types';
import { ProductList } from '../../features/ProductList/ProductList';
import { connect } from 'react-redux';
import { getAllProducts, getAllProductsRequest  } from '../../../redux/productsRedux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

class Component extends React.Component {

  static propTypes = {
    products: PropTypes.array,
    getAllProductsRequest: PropTypes.func,
  }

  async componentDidMount() {
    const { getAllProductsRequest } = this.props;
    await getAllProductsRequest();
  }  
  
  render() {
    const { products } = this.props;

    return(
      <Paper>
        <Grid container  className={styles.gridContainer} justify='center'>
          <Grid item xs={12}>
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

const mapDispatchToProps = dispatch => ({
  getAllProductsRequest: () => dispatch(getAllProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
