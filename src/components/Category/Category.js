import React from 'react';
import styles from './Category.module.css';
import Container from './../Container/Container';

const Category = ({ category }) => {
  return (
    <Container>
      <div className={styles.category}>
        <h1 className={styles.title}>{category.title}</h1>
        <div className={styles.row}>
          <div className={styles.text}>
            <p>{category.text}</p>
          </div>
          <div className={styles.image}>
            <img src={category.image} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Category;
