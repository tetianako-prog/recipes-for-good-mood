import React, { useEffect } from 'react';
import NewRecipes from '../../components/NewRecipes';
import PopularRecipes from '../../components/PopularRecipes';
import FromSubscribers from '../../components/FromSubscribers';
import { useSelector } from 'react-redux';
import { getAllRecipes, loading } from '../../redux/selectors';
import { fetchRecipes } from '../../redux/operations';
import { useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);
  const recipes = useSelector(getAllRecipes);
  const isLoading = useSelector(loading);
  return (
    <main>
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
        recipes?.length > 0 && (
          <>
            <NewRecipes recipes={recipes} />
            <PopularRecipes recipes={recipes} />
            <FromSubscribers recipes={recipes} />
          </>
        )
      )}
    </main>
  );
};

export default MainPage;
