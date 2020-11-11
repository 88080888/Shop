import React from 'react';
import PropTypes from 'prop-types';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <a className={styles.link} href='https://www.facebook.com/'>
      <FacebookIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://www.instagram.com/'>
      <InstagramIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://www.youtube.com/'>
      <YouTubeIcon className={styles.icon} />
    </a>

    <a className={styles.link} href='https://twitter.com/'>
      <TwitterIcon className={styles.icon} />
    </a>

  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
