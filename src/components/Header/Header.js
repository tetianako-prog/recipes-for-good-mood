import React, { useState } from 'react';
import Logo from './Logo/Logo';
import SocialMedia from './SocialMedia/SocialMedia';
import VerticalMenu from './VerticalMenu/VerticalMenu';
import Search from './Search/Search';
import Container from '../Container/Container';
import styles from './Header.module.css';
import sprite from './../../img/sprite.svg';

const Header = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = 'scroll';
  };
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles['header-row']}>
          <div className={styles['logo-col']}>
            <Logo />
          </div>
          <div className={styles['social-media-col']}>
            <SocialMedia />
          </div>

          <div className={styles['search-col']}>
            <Search />
          </div>
          <div className={styles['vertical']}>
            <button
              type="button"
              className={styles.hamburger}
              onClick={openMenu}
            >
              {' '}
              <svg className={styles['hamburger-icon']}>
                <use href={sprite + '#menu'}></use>
              </svg>
            </button>
            {open && <VerticalMenu open={open} onClose={closeMenu} />}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
