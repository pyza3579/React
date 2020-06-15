import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header.js';

const MainLayout = ({children}) => (
  <div>
    <Header> {/*header wyswietli nawigacje a prop children bedzie renderowac wszystko, co zostalo dodane w Tagach <mainLayout w app.js */}
      {children}
    </Header> 
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;