import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  recipesReducer,
  categoryReducer,
  recipesByCategoryReducer,
  oneRecipeReducer,
  youMayLikeReducer,
  loadingReducer,
  searchReducer,
} from './reducers';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    category: categoryReducer,
    recipesByCategory: recipesByCategoryReducer,
    oneRecipe: oneRecipeReducer,
    youMayLike: youMayLikeReducer,
    isLoading: loadingReducer,
    search: searchReducer,
  },
  //devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
