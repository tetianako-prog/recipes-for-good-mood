import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';
import SocialMedia from './SocialMedia/SocialMedia';
import VerticalMenu from './VerticalMenu/VerticalMenu';
import Search from './Search/Search';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-flex-row">
          <div className="col-for-logo">
            <Logo />
          </div>
          <div className="col-for-social-media">
            <SocialMedia />
            <VerticalMenu />
          </div>
          <div className="col-for-search">
            <Search />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
