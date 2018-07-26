import api from '../adapter';

export default {
  fetchAllRecipes: () => {
    return api.makeRequest('/api/recipes', api.requstTypes.GET);
  },
  addRecipe: recipe => {
    return api.makeRequest('/api/recipes', api.requstTypes.POST, recipe);
  },
  updateRecipe: recipe => {
    return api.makeRequest(`/api/recipes/${recipe._id}`, api.requstTypes.PATCH,recipe);
  },
  deleteRecipe: id => {
    return api.makeRequest(`/api/recipes/${id}`, api.requstTypes.DELETE);
  },
  fetchRecipe: id => {
    return api.makeRequest(`/api/recipes/${id}`, api.requstTypes.GET);
  },
  sortRecipes: () => {
    return api.makeRequest('/api/recipes/rating', api.requstTypes.GET)
  }
};