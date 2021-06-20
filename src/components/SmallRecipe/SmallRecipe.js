import React from 'react';
import styles from './SmallRecipe.module.css';
import { Link } from 'react-router-dom';
import { toggleLike } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const SmallRecipe = ({
  name,
  date,
  image,
  id,
  category,
  isLiked,
  recipe,
  likes,
}) => {
  const dispatch = useDispatch();
  const toggleLikeFunc = () => {
    dispatch(toggleLike(id, recipe));
  };

  return (
    <li className={styles.recipe}>
      <img className={styles.image} src={image} alt="" />
      <h6 className={styles.date}>{date}</h6>
      <Link to={`${category}/${id}`}>
        <h3 className={styles.title}>{name}</h3>
      </Link>
      {likes && (
        <button onClick={toggleLikeFunc}>
          {isLiked ? (
            <span className="like">&#9829;</span>
          ) : (
            <span className="like">&#9825;</span>
          )}
        </button>
      )}
    </li>
  );
};

export default SmallRecipe;
