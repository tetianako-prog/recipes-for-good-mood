import React from 'react';
import Container from './../components/Container/Container';
import { Link } from 'react-router-dom';
import styles from './PopularRecipes.module.css';

const PopularRecipes = ({ recipes }) => {
  const popularRecipes = recipes
    .filter(recipe => recipe.popular)
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 4);
  console.log(popularRecipes);
  return (
    <div>
      <Container>
        <h2 className={styles['main-title']}>Популярне</h2>
        <div className={styles.popular}>
          <ul>
            {popularRecipes.map(recipe => (
              <li key={recipe.id}>
                <div>
                  <img src={recipe.image} alt="" />
                </div>
                <Link to={`/${recipe.type}/${recipe.id}`}>
                  <h3 className={styles.title}>{recipe.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default PopularRecipes;
