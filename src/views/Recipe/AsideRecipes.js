import React from 'react';
import styles from './AsideRecipes.module.css';
import { Link } from 'react-router-dom';

const AsideRecipes = ({ name, date, image, id, match }) => {
  return (
    <div className={styles['recipe-aside']}>
      <Link to={`${match.url.slice(0, match.url.lastIndexOf('/'))}/${id}`}>
        <img className={styles.image} src={image} alt="" />
        <h6 className={styles['date']}>{date}</h6>
        <h3 className={styles['title']}>{name}</h3>
      </Link>
    </div>
  );
};
export default AsideRecipes;
