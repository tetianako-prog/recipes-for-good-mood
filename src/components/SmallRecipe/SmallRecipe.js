import React, { Component } from 'react';
import styles from './SmallRecipe.module.css';
import { Link } from 'react-router-dom';

class SmallRecipe extends Component {
  // state = {
  //   isLiked: false,
  // };
  // likeToggle = () => {
  //   this.setState({ isLiked: !this.state.isLiked });
  // };

  render() {
    const { name, date, image, id, location, isLiked, toggleLike } = this.props;
    return (
      <li className={styles.recipe}>
        <img className={styles.image} src={image} alt="" />
        <h6 className={styles.date}>{date}</h6>
        <Link to={`${location}/${id}`}>
          <h3 className={styles.title}>{name}</h3>
        </Link>
        <button onClick={() => toggleLike(id)}>
          {isLiked ? (
            <span className="like">&#9829;</span>
          ) : (
            <span className="like">&#9825;</span>
          )}
        </button>
      </li>
    );
  }
}
export default SmallRecipe;
