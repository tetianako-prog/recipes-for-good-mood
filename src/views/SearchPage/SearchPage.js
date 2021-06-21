import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import PreviewRecipes from '../../components/PreviewPecipe/PreviewRecipes';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '../../redux/operations';
import { getSearch, loading } from '../../redux/selectors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const SearchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = queryString.parse(location.search).query;

  useEffect(() => {
    dispatch(fetchSearch(query));
  }, [dispatch, query]);

  const recipes = useSelector(getSearch);
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
                marginTop: '48px',
                marginBottom: '48px',
                textAlign: 'center',
              }}
            >
              Результати пошуку
            </h1>
            {recipes.length > 0 ? (
              <PreviewRecipes recipes={recipes} />
            ) : (
              <div style={{ fontSize: '20px', textAlign: 'center' }}>
                Вибачте, нічого не знайдено
              </div>
            )}
          </>
        )}
      </Container>
    </main>
  );
};

export default SearchPage;
