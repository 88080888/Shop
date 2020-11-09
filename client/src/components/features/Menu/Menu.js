import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

import { BottomNavigation } from '@material-ui/core';

class Component extends React.Component {

  render() {
    return(
      <BottomNavigation className={styles.root}>
        <BottomNavigation label="Recents"  />bra
        <BottomNavigation label="Favorites" />pants
        <BottomNavigation label="Nearby"  />
        <BottomNavigation label="Folder" />
      </BottomNavigation>
    )}
}

export {
  Component as Menu,
  Component as MenuComponent,
};