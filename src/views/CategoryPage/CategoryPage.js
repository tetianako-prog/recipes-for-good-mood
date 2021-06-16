import React, { Component } from 'react';
import axios from 'axios';
import Category from '../../components/Category/Category';
import PreviewRecipes from '../../components/PreviewPecipe/PreviewRecipes';

class CategoryPage extends Component {
  state = {
    pageCategory: {},
    recipes: [],
    id: null,
  };

  async componentDidMount() {
    const { category } = this.props.match.params;
    const pageCategory = await axios.get(
      `https://60ae79925b8c300017dea964.mockapi.io/api/categories?search=${category}`,
    );
    const recipes = await axios.get(
      `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?search=${category}`,
    );
    this.setState({
      pageCategory: pageCategory.data[0],
      recipes: recipes.data,
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      const recipe = this.state.recipes.find(item => item.id === this.state.id);
      const isLiked = recipe.isLiked;
      await axios.put(
        `https://60ae79925b8c300017dea964.mockapi.io/api/recipes/${this.state.id}`,
        { ...recipe, isLiked: !isLiked },
      );
      const newRecipes = await axios.get(
        `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?search=${recipe.type}`,
      );
      this.setState({ recipes: newRecipes.data });
    }
    if (prevProps.match.params.category !== this.props.match.params.category) {
      const { category } = this.props.match.params;
      const result = await Promise.all([
        axios.get(
          `https://60ae79925b8c300017dea964.mockapi.io/api/categories?search=${category}`,
        ),
        axios.get(
          `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?search=${category}`,
        ),
      ]);

      this.setState({
        pageCategory: result[0].data[0],
        recipes: result[1].data,
      });
    }
  }

  toggleLike = id => {
    this.setState({ id });
  };

  render() {
    return (
      <div>
        {this.state.pageCategory && (
          <Category category={this.state.pageCategory} />
        )}
        {this.state.recipes && (
          <PreviewRecipes
            recipes={this.state.recipes}
            location={this.props.location.pathname}
            toggleLike={this.toggleLike}
          />
        )}
      </div>
    );
  }
}

export default CategoryPage;
