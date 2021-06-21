import React, { Component } from 'react';
import SmallRecipe from '../SmallRecipe';
import Container from '../Container/Container';
import styles from './PreviewRecipes.module.css';

const PreviewRecipes = ({ recipes, likes }) => {
  return (
    <Container>
      <ul className={styles['recipe-row']}>
        {recipes &&
          recipes.length > 0 &&
          recipes.map(item => (
            <SmallRecipe
              name={item.name}
              date={item.date}
              image={item.image}
              key={item.id}
              id={item.id}
              category={item.type}
              isLiked={item.isLiked}
              recipe={item}
              likes={likes}
            />
          ))}
      </ul>
    </Container>
  );
};

export default PreviewRecipes;

// class PreviewRecipes extends Component {
//   render() {
//     const { location, recipes, toggleLike } = this.props;
//     return (
//       <Container>
//         <ul className={styles['recipe-row']}>
//           {recipes &&
//             recipes.length > 0 &&
//             recipes.map(({ name, date, image, id, isLiked }) => (
//               <SmallRecipe
//                 name={name}
//                 date={date}
//                 image={image}
//                 key={id}
//                 id={id}
//                 location={location}
//                 isLiked={isLiked}
//                 toggleLike={toggleLike}
//                 // addLike={props.addLike}
//                 // removeLike={props.removeLike}
//                 // isLiked={props.likeRecipesState[id]}
//               />
//             ))}
//         </ul>
//       </Container>
//     );
//   }
// }

// export default PreviewRecipes;
