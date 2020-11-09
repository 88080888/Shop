import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';

import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Button } from '@material-ui/core';

class Component extends React.Component {

  chandleLingerie(type,value) {
    if (type === 'bra') {
      this.props.filter(value)
    }
  }

  render() {
    return(
      <div>
        <Button onClick={event => this.handleLingerie('bra', event.currentTarget.value)}>
        Open Menu
        </Button>
      </div>
    )}
}

export {
  Component as Menu,
  Component as MenuComponent,
};