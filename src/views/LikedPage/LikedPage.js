import React, { useState, useEffect } from 'react';
import Container from './../../components/Container/Container';
import PreviewRecipes from './../../components/PreviewPecipe/PreviewRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLiked } from '../../redux/operations';
import { getLiked, loading } from '../../redux/selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LikedPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLiked());
  }, [dispatch]);
  const recipes = useSelector(getLiked);
  const isLoading = useSelector(loading);

  return (
    <main>
      <Container>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader
              type="Puff"
              color="#553C8B"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        ) : (
          <>
            <h1
              style={{
                marginBottom: '48px',
                marginTop: '48px',
                textAlign: 'center',
              }}
            >
              Улюблене
            </h1>
            {recipes.length > 0 ? (
              <PreviewRecipes recipes={recipes} />
            ) : (
              <div>Вибачте, нічого не додано до улюбленого</div>
            )}
          </>
        )}
      </Container>
    </main>
  );
};

export default LikedPage;
