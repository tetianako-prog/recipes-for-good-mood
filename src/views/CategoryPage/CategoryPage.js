import React, { useEffect } from 'react';
import Category from '../../components/Category';
import PreviewRecipes from '../../components/PreviewPecipe';
import { fetchCategoryAndRecipes } from '../../redux/operations';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategory,
  getRecipesByCategory,
  loading,
} from './../../redux/selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const CategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(fetchCategoryAndRecipes(category)),
    [dispatch, category],
  );
  const currentCategory = useSelector(getCategory)[0];
  const recipes = useSelector(getRecipesByCategory);
  const isLoading = useSelector(loading);

  return (
    <main>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader
            type="Puff"
            color="#553C8B"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        <>
          {currentCategory && <Category category={currentCategory} />}
          {recipes && <PreviewRecipes recipes={recipes} likes={true} />}
        </>
      )}
    </main>
  );
};

export default CategoryPage;
