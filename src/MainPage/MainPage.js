import React, { Component } from 'react';
import NewRecipes from './NewRecipes';
import PopularRecipes from './PopularRecipes';
import FromSubscribers from './FromSubscribers';
import axios from 'axios';

class MainPage extends Component {
  state = {
    recipes: [],
  };
  componentDidMount() {
    axios
      .get('https://60ae79925b8c300017dea964.mockapi.io/api/recipes')
      .then(response => this.setState({ recipes: response.data }))
      .catch(err => console.log(err));
  }
  render() {
    const { recipes } = this.state;

    return (
      <>
        {recipes.length > 0 ? (
          <div>
            <NewRecipes recipes={recipes} />
            <PopularRecipes recipes={recipes} />
            <FromSubscribers recipes={recipes} />
          </div>
        ) : null}
      </>
    );
  }
}

export default MainPage;
