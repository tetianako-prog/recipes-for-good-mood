import React, { useState, useEffect } from 'react';
import Container from './../../components/Container/Container';
import PreviewRecipes from './../../components/PreviewPecipe/PreviewRecipes';
import axios from 'axios';

const LikedPage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://60ae79925b8c300017dea964.mockapi.io/api/recipes?isLiked=true`,
      );
      setRecipes(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <h1 style={{ marginBottom: '20px' }}>Улюблене</h1>
      </Container>

      {recipes.length > 0 ? (
        <PreviewRecipes recipes={recipes} />
      ) : (
        <div>Вибачте, нічого не знайдено</div>
      )}
    </div>
  );
};

export default LikedPage;
