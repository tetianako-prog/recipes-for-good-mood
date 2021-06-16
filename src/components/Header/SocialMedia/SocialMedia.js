import React from 'react';
import sprite from './../../../img/sprite.svg';
import styles from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
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
  );
};
export default SocialMedia;
