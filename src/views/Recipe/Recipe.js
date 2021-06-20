import React, { useEffect } from 'react';
//import recipes from '../PreviewRecipes/recipes'

import Container from './../../components/Container/Container';
import styles from './Recipe.module.css';
import AsideRecipes from './AsideRecipes';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipePage } from './../../redux/operations';
import { getOneRecipe, youMayLike, loading } from './../../redux/selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Recipe = () => {
  const { id, category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipePage(id, category));
    window.scrollTo({
      top: 0,
    });
  }, [dispatch, id, category]);
  const recipe = useSelector(getOneRecipe);
  console.log(recipe);
  const youMayLikeRecipes = useSelector(youMayLike);
  const isLoading = useSelector(loading);

  return (
    <main>
      <Container>
        {isLoading ? (
          <div className={styles.loader}>
            <Loader
              type="Puff"
              color="#553C8B"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        ) : (
          recipe && (
            <div>
              <h1 className={styles['main-title']}>{recipe.name}</h1>
              <div className={styles['main-image']}>
                <img src={recipe.image} alt="" />
              </div>{' '}
              <div className={styles['flex-container']}>
                <div className={styles['col-74']}>
                  <div className={styles['icons']}>
                    <div className={styles['icon-block']}>
                      <div className={styles['icon-1']}></div>
                      <div className={styles['description']}>
                        <p className={styles['small']}>Рецепт на:</p>
                        <p className={styles['large']}>{recipe.people}</p>
                      </div>
                    </div>
                    <div className={styles['icon-block']}>
                      <div className={styles['icon-2']}></div>
                      <div className={styles['description']}>
                        <p className={styles['small']}>Підготовка:</p>
                        <p className={styles['large']}>{recipe.preparation}</p>
                      </div>
                    </div>
                    <div className={styles['icon-block']}>
                      <div className={styles['icon-3']}></div>
                      <div className={styles['description']}>
                        <p className={styles['small']}>Час приготування:</p>
                        <p className={styles['large']}>{recipe.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles['container-for-recipe']}>
                    <h2 className={styles['secondary-title']}>Опис</h2>
                    <p>{recipe.description}</p>
                    <div className={styles['ingredients']}>
                      <h2
                        className={[
                          styles['ingred'],
                          styles['secondary-title'],
                        ].join('')}
                      >
                        Інгредієнти
                      </h2>
                      <ul>
                        {recipe.ingredients.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <h2 className={styles['secondary-title']}>
                      Етапи приготування
                    </h2>
                    <div className={styles['steps']}>
                      {Object.keys(recipe.steps).map((step, i) => (
                        <div className={styles['step']} key={i}>
                          <p>
                            <span>{i + 1}. </span>
                            {recipe.steps[step]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles['col-26']}>
                  <h2 className={styles['secondary-title']}>
                    Вам може сподобатись
                  </h2>
                  {youMayLikeRecipes?.length > 0 && (
                    <div>
                      {[...youMayLikeRecipes]
                        .filter(item => item.id !== id)
                        .sort((a, b) => Math.random() - 0.5)
                        .slice(0, 3)
                        .map(({ name, date, image, id }) => (
                          <AsideRecipes
                            name={name}
                            date={date}
                            image={image}
                            key={id}
                            id={id}
                            category={category}
                          />
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </Container>
    </main>
  );
};

export default Recipe;
