import axios from 'axios';
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

axios.defaults.baseURL = 'https://60ae79925b8c300017dea964.mockapi.io/api';

export const fetchRecipes = () => async dispatch => {
  dispatch(fetchRecipesRequest());
  try {
    const { data } = await axios.get('/recipes');
    dispatch(fetchRecipesSuccess(data));
  } catch (err) {
    dispatch(fetchRecipesError(err));
  }
};

export const fetchCategoryAndRecipes = category => async dispatch => {
  dispatch(fetchCategoryRequest());
  dispatch(fetchRecipesByCategoryRequest());
  try {
    const [r1, r2] = await Promise.all([
      axios.get(`/categories?search=${category}`),
      axios.get(`/recipes?search=${category}`),
    ]);
    dispatch(fetchCategorySuccess(r1.data));
    dispatch(fetchRecipesByCategorySuccess(r2.data));
  } catch (err) {
    dispatch(fetchCategoryError(err));
    dispatch(fetchRecipesByCategoryError(err));
  }
};

export const fetchRecipePage = (id, category) => async dispatch => {
  dispatch(fetchOneRecipeRequest());
  dispatch(fetchYouMayLikeRequest());
  try {
    const [r1, r2] = await Promise.all([
      axios.get(`/recipes/${id}`),
      axios.get(`/recipes?search=${category}`),
    ]);

    dispatch(fetchOneRecipeSuccess(r1.data));

    dispatch(fetchYouMayLikeSuccess(r2.data));
  } catch (err) {
    dispatch(fetchOneRecipeError());
    dispatch(fetchYouMayLikeError());
  }
};

export const toggleLike = (id, recipe) => async dispatch => {
  dispatch(toggleLikeRequest());
  try {
    await axios.put(`/recipes/${id}`, { ...recipe, isLiked: !recipe.isLiked });
    dispatch(toggleLikeSuccess(id));
  } catch (err) {
    dispatch(toggleLikeError(err));
  }
};

export const fetchSearch = searchQuery => async dispatch => {
  dispatch(fetchSearchRequest());
  try {
    const { data } = await axios.get(`/recipes?search=${searchQuery}`);
    dispatch(fetchSearchSuccess(data));
  } catch (err) {
    dispatch(fetchSearchError(err));
  }
};
