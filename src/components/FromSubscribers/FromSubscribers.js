import React from 'react';
import { Link } from 'react-router-dom';
import Container from './../Container/Container';
import styles from './FromSubscribers.module.css';

const FromSubscribers = ({ recipes }) => {
  const recipesFromSubscribers = recipes
    .filter(recipe => recipe.fromSubscribers)
    .slice(0, 8);
  return (
    <div>
      <Container>
        <h2 className={styles['main-title']}>Рецепти від дописувачів</h2>
        <ul className={styles['recipe-row']}>
          {recipesFromSubscribers.map(recipe => (
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
