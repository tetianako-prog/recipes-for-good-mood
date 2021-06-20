import React from 'react';
import Container from './../Container/Container';
import styles from './NewRecipes.module.css';

import { Link } from 'react-router-dom';

const NewRecipes = ({ recipes }) => {
  const newRecipes = recipes
    .filter(recipe => recipe.new)
    .sort((a, b) => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div>
      <Container>
        <h2 className={styles['main-title']}>Нові рецепти</h2>
        <div className={styles['new-container']}>
          <div className={styles['col-23']}>
            {newRecipes.slice(0, 2).map(recipe => (
              <div className={styles.recipe} key={recipe.id}>
                <img
                  className={styles['side-image']}
                  src={recipe.image}
                  alt=""
                />
                <h6 className={styles.date}>{recipe.date}</h6>
                <Link to={`/${recipe.type}/${recipe.id}`}>
                  <h3 className={styles.title}>{recipe.name}</h3>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles['col-49']}>
            {newRecipes.slice(2, 3).map(recipe => (
              <div className={styles.recipe} key={recipe.id}>
                <img
                  className={styles['central-image']}
                  src={recipe.image}
                  alt=""
                />
                <h6 className={styles.date}>{recipe.date}</h6>
                <Link to={`/${recipe.type}/${recipe.id}`}>
                  <h3 className={styles.title}>{recipe.name}</h3>
                </Link>
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
          <div className={styles['col-23']}>
            {newRecipes.slice(3, 5).map(recipe => (
              <div className={styles.recipe} key={recipe.id}>
                <img
                  className={styles['side-image']}
                  src={recipe.image}
                  alt=""
                />
                <h6 className={styles.date}>{recipe.date}</h6>
                <Link to={`/${recipe.type}/${recipe.id}`}>
                  <h3 className={styles.title}>{recipe.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewRecipes;
