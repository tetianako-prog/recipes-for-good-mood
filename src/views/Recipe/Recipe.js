import React, { Component } from 'react';
//import recipes from '../PreviewRecipes/recipes'

import axios from 'axios';
import Container from './../../components/Container/Container';
import styles from './Recipe.module.css';
import AsideRecipes from './AsideRecipes';

class Recipe extends Component {
  state = {
    recipe: null,
    asideRecipes: [],
  };
  async componentDidMount() {
    const result = await Promise.all([
      axios.get(
        `https://60ae79925b8c300017dea964.mockapi.io/api/recipes/${this.props.match.params.id}`,
      ),
      axios.get(
        `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?search=${this.props.match.params.category}`,
      ),
    ]);
    const filteredRecipes = result[1].data.filter(
      item => item.id !== result[0].data.id,
    );
    this.setState({ recipe: result[0].data, asideRecipes: filteredRecipes });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      const result = await Promise.all([
        axios.get(
          `https://60ae79925b8c300017dea964.mockapi.io/api/recipes/${this.props.match.params.id}`,
        ),
        axios.get(
          `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?search=${this.props.match.params.category}`,
        ),
      ]);
      const filteredRecipes = result[1].data.filter(
        item => item.id !== result[0].data.id,
      );
      this.setState({
        recipe: result[0].data,
        asideRecipes: filteredRecipes,
      });
    }
  }

  render() {
    const { recipe } = this.state;
    return (
      <Container>
        {recipe ? (
          <main>
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

                {this.state.asideRecipes
                  .sort((a, b) => Math.random() - 0.5)
                  .slice(0, 3)
                  .map(({ name, date, image, id }) => (
                    <AsideRecipes
                      name={name}
                      date={date}
                      image={image}
                      key={id}
                      id={id}
                      match={this.props.match}
                    />
                  ))}
              </div>
            </div>
          </main>
        ) : null}
      </Container>
    );
  }
}

export default Recipe;
