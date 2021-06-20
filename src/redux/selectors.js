import { createSelector } from '@reduxjs/toolkit';

export const getAllRecipes = state => state.recipes;

export const getCategory = state => state.category;

export const getRecipesByCategory = state => state.recipesByCategory;

export const getOneRecipe = state => state.oneRecipe;

export const youMayLike = state => state.youMayLike;

export const loading = state => state.isLoading;

export const getSearch = state => state.search;
