import React from 'react';
import sprite from './../../img/sprite.svg';
import styles from './Footer.module.css';
import Container from './../Container/Container';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles['footer-flex']}>
          <div className={styles['col-34']}>
            <p>&copy; Рецепти для гарного настрою, 2021</p>
          </div>
          <div className={styles['col-66']}>
            <span>Приєднуйтесь до нас</span>
            <div className={styles['social-media']}>
              <a className={styles.link} href="https://facebook.com">
                <svg className={styles.icon}>
                  <use href={sprite + '#facebook'}></use>
                </svg>
              </a>
              <a className={styles.link} href="https://facebook.com">
                <svg className={styles.icon}>
                  <use href={sprite + '#whatsapp'}></use>
                </svg>
              </a>
              <a className={styles.link} href="https://facebook.com">
                <svg className={styles.icon}>
                  <use href={sprite + '#instagram'}></use>
                </svg>
              </a>
              <a className={styles.link} href="https://facebook.com">
                <svg className={styles.icon}>
                  <use href={sprite + '#twitter'}></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
