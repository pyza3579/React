import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';


class Header extends React.Component { //dlaczego render jest w class?
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name='icons'>
              </Icon>
            </Link>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;