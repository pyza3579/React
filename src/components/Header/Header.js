import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import Container from '../Container/Container.js';
import {settings} from '../../data/dataStore.js';
import PropTypes from 'prop-types';
import {headerTitle} from '../../data/dataStore.js';



class Header extends React.Component { //dlaczego render jest w class?
  static propTypes = {
    icon: PropTypes.node,
    home: PropTypes.node,
    info: PropTypes.node,
    faq: PropTypes.node,

  };

  static defaultProps = {
    icon: settings.headerIcon,
    home: headerTitle.headerHome,
    info: headerTitle.headerInfo,
    faq: headerTitle.headerFAQ,
  };

  render() {
    const {icon, home, info, faq} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <NavLink exact to='/' activeClassName='active'>{home}</NavLink>
            <NavLink exact to='/info' activeClassName='active'>{info}</NavLink>
            <NavLink exact to='/FAQ' activeClassName='active'>{faq}</NavLink>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;