import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import axios from 'axios';
import PreviewRecipes from './../components/PreviewPecipe/PreviewRecipes';
import Container from './../components/Container/Container';

const SearchPage = () => {
  const location = useLocation();
  const query = queryString.parse(location.search).query;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?search=${query}`,
      );
      setRecipes(result.data);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <Container>
        <h1 style={{ marginBottom: '20px' }}>Результати пошуку</h1>
      </Container>

      {recipes.length > 0 ? (
        <PreviewRecipes recipes={recipes} />
      ) : (
        <div>Вибачте, нічого не знайдено</div>
      )}
    </div>
  );
};

export default SearchPage;
