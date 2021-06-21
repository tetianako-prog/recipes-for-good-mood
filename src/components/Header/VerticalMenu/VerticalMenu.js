import React from 'react';
import styles from './VerticalMenu.module.css';
import { Link } from 'react-router-dom';
import sprite from './../../../img/sprite.svg';

const VerticalMenu = ({ open, onClose }) => {
  return (
    <>
      <button
        type="button"
        className={styles['close-button']}
        onClick={onClose}
      >
        <svg className={styles['close-icon']}>
          <use href={sprite + '#close'}></use>
        </svg>
      </button>
      <ul
        className={
          open
            ? [styles['vertical-menu'], styles['is-open']].join(' ')
            : styles['vertical-menu']
        }
        onClick={onClose}
      >
        <li className={styles['menu-item']}>
          <Link to="/appetizers">Закуски</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/salads">Салати</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/soups">Супи</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/main-courses">Головні страви</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/bakery">Випічка</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/desserts">Десерти</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/drinks">Напої</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/liked">Улюблене</Link>
        </li>
      </ul>
    </>
  );
};

export default VerticalMenu;

/* {open && (
        <>
          <button
            type="button"
            className={styles['close-button']}
            onClick={closeMenu}
          >
            <svg className={styles['close-icon']}>
              <use href={sprite + '#close'}></use>
            </svg>
          </button>
          <ul className={styles['vertical-menu']} onClick={closeMenu}>
            <li className={styles['menu-item']}>
              <Link to="/appetizers">Закуски</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/salads">Салати</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/soups">Супи</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/main-courses">Головні страви</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/bakery">Випічка</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/desserts">Десерти</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/drinks">Напої</Link>
            </li>
            <li className={styles['menu-item']}>
              <Link to="/liked">Улюблене</Link>
            </li>
          </ul>
        </>
      )} */

//export default VerticalMenu;
