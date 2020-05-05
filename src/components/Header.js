import React from 'react';

const Header = (props) => (
  <div className="Header">
  <div className="container">
    <h1 className="Header__title">{props.title}</h1>
    {props.subtitle && <h2 className="Header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Zettamine Bot Configuration'
};

export default Header;
