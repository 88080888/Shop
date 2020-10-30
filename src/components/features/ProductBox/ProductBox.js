import React from 'react';
//import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//import 03 from '../../../images/products/03.jpg';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

const Component = ({}) => (
  <Card className={styles.root}>
    <CardActionArea
      //className={styles.cardClickableArea}
      //exact to={`/product/1`}
    >
      <CardMedia
        component='img'
        image='../../../images/products/03.jpg'
        className={styles.photo}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='h2'
          className={styles.cardTitle}
        >
          panties
        </Typography>

        <Typography
          variant='body1'
          component='p'
          className={styles.cardBody}
        >
          Prices start from 50$!
        </Typography>
      </CardContent>
    </CardActionArea>

    <CardActions>
      <Button
        variant='contained'
        size='large'
        color='primary'
        //component={NavLink}
        exact to={`/product/1`}
        className={styles.button}
      >
        Show
      </Button>
    </CardActions>

  </Card>
);

Component.propTypes = {
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
