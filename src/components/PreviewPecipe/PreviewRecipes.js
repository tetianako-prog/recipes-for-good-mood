import React, { Component } from 'react';
import SmallRecipe from '../SmallRecipe/SmallRecipe';
import Container from '../Container/Container';
import styles from './PreviewRecipes.module.css';

class PreviewRecipes extends Component {
  render() {
    const { location, recipes, toggleLike } = this.props;
    return (
      <Container>
        <ul className={styles['recipe-row']}>
          {recipes &&
            recipes.length > 0 &&
            recipes.map(({ name, date, image, id, isLiked }) => (
              <SmallRecipe
                name={name}
                date={date}
                image={image}
                key={id}
                id={id}
                location={location}
                isLiked={isLiked}
                toggleLike={toggleLike}
                // addLike={props.addLike}
                // removeLike={props.removeLike}
                // isLiked={props.likeRecipesState[id]}
              />
            ))}
        </ul>
      </Container>
    );
  }
}

export default PreviewRecipes;
