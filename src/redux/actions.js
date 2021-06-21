import { createAction } from '@reduxjs/toolkit';

export const fetchRecipesRequest = createAction('recipes/fetchRecipesRequest');
export const fetchRecipesSuccess = createAction('recipes/fetchRecipesSuccess');
export const fetchRecipesError = createAction('recipes/fetchRecipesError');

export const fetchCategoryRequest = createAction(
  'categories/fetchCategoryRequest',
);
export const fetchCategorySuccess = createAction(
  'categories/fetchCategorySuccess',
);
export const fetchCategoryError = createAction('categories/fetchCategoryError');

export const fetchRecipesByCategoryRequest = createAction(
  'recipesByCategory/fetchRecipesByCategoryRequest',
);
export const fetchRecipesByCategorySuccess = createAction(
  'recipesByCategory/fetchRecipesByCategorySuccess',
);
export const fetchRecipesByCategoryError = createAction(
  'recipesByCategory/fetchRecipesByCategoryError',
);

export const fetchOneRecipeRequest = createAction(
  'recipe/fetchOneRecipeRequest',
);
export const fetchOneRecipeSuccess = createAction(
  'recipe/fetchOneRecipeSuccess',
);
export const fetchOneRecipeError = createAction('recipe/fetchOneRecipeError');

export const fetchYouMayLikeRequest = createAction(
  'recipe/fetchYouMayLikeRequest',
);

export const fetchYouMayLikeSuccess = createAction(
  'recipe/fetchYouMayLikeSuccess',
);

export const fetchYouMayLikeError = createAction('recipe/fetchYouMayLikeError');

export const toggleLikeRequest = createAction('recipe/toggleLikeRequest');
export const toggleLikeSuccess = createAction('recipe/toggleLikeSuccess');
export const toggleLikeError = createAction('recipe/toggleLikeError');

export const fetchSearchRequest = createAction('recipes/fetchSearchRequest');
export const fetchSearchSuccess = createAction('recipes/fetchSearchSuccess');
export const fetchSearchError = createAction('recipes/fetchSearchError');

export const fetchLikedRecipesRequest = createAction(
  'recipes/fetchLikedRecipesRequest',
);

export const fetchLikedRecipesSuccess = createAction(
  'recipes/fetchLikedRecipesSuccess',
);
export const fetchLikedRecipesError = createAction(
  'recipes/fetchLikedRecipesError',
);
