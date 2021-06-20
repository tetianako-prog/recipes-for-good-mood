import { combineReducers } from 'redux';
import {
  fetchRecipesRequest,
  fetchRecipesSuccess,
  fetchRecipesError,
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryError,
  fetchRecipesByCategoryRequest,
  fetchRecipesByCategorySuccess,
  fetchRecipesByCategoryError,
  fetchOneRecipeRequest,
  fetchOneRecipeSuccess,
  fetchOneRecipeError,
  fetchYouMayLikeRequest,
  fetchYouMayLikeSuccess,
  fetchYouMayLikeError,
  toggleLikeRequest,
  toggleLikeSuccess,
  toggleLikeError,
  fetchSearchRequest,
  fetchSearchSuccess,
  fetchSearchError,
} from './actions';

import { createReducer } from '@reduxjs/toolkit';

export const recipesReducer = createReducer([], {
  [fetchRecipesSuccess]: (_, { payload }) => payload,
});

export const categoryReducer = createReducer([], {
  [fetchCategorySuccess]: (_, { payload }) => payload,
});

export const recipesByCategoryReducer = createReducer([], {
  [fetchRecipesByCategorySuccess]: (_, { payload }) => payload,
  [toggleLikeSuccess]: (state, { payload }) =>
    state.map(item => {
      if (item.id === payload) {
        return { ...item, isLiked: !item.isLiked };
      } else {
        return item;
      }
    }),
});

export const oneRecipeReducer = createReducer(null, {
  [fetchOneRecipeSuccess]: (_, { payload }) => payload,
});

export const youMayLikeReducer = createReducer([], {
  [fetchYouMayLikeSuccess]: (_, { payload }) => payload,
});

export const searchReducer = createReducer([], {
  [fetchSearchSuccess]: (_, { payload }) => payload,
});

export const loadingReducer = createReducer(false, {
  [fetchRecipesRequest]: () => true,
  [fetchRecipesSuccess]: () => false,
  [fetchRecipesError]: () => false,
  [fetchCategoryRequest]: () => true,
  [fetchCategorySuccess]: () => false,
  [fetchCategoryError]: () => false,
  [fetchRecipesByCategoryRequest]: () => true,
  [fetchRecipesByCategorySuccess]: () => false,
  [fetchRecipesByCategoryError]: () => false,
  [fetchOneRecipeRequest]: () => true,
  [fetchOneRecipeSuccess]: () => false,
  [fetchOneRecipeError]: () => false,
  [fetchYouMayLikeRequest]: () => true,
  [fetchYouMayLikeSuccess]: () => false,
  [fetchYouMayLikeError]: () => false,
  [fetchSearchRequest]: () => true,
  [fetchSearchSuccess]: () => false,
  [fetchSearchError]: () => false,
});
