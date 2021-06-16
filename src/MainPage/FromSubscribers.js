import React from 'react';
import { Link } from 'react-router-dom';
import Container from './../components/Container/Container';
import styles from './FromSubscribers.module.css';

const FromSubscribers = ({ recipes }) => {
  return (
    <div>
      <Container>
        <h2 className={styles['main-title']}>Рецепти від дописувачів</h2>
        <ul className={styles['recipe-row']}>
          {recipes
            .filter(recipe => recipe.fromSubscribers)
            .map(recipe => (
              <li className={styles.recipe} key={recipe.id}>
                <img className={styles.image} src={recipe.image} alt="" />
                <h6 className={styles.date}>{recipe.date}</h6>
                <Link to={`/${recipe.type}/${recipe.id}`}>
                  <h3 className={styles.title}>{recipe.name}</h3>
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </div>
  );
};

export default FromSubscribers;
