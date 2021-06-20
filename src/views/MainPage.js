import React, { useEffect } from 'react';
import NewRecipes from './../components/NewRecipes/NewRecipes';
import PopularRecipes from './../components/PopularRecipes/PopularRecipes';
import FromSubscribers from './../components/FromSubscribers/FromSubscribers';
import { useSelector } from 'react-redux';
import { getAllRecipes, loading } from '../redux/selectors';
import { fetchRecipes } from '../redux/operations';
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

//  axios.put('https://60ae79925b8c300017dea964.mockapi.io/api/recipes/8', {
//    name: 'Помідори, фаршировані маслюками і цибулею',
//    type: 'appetizers',
//    date: '01 березня 2021',
//    image:
//      'https://kuhari.com.ua/wp-content/uploads/2020/04/pomidori_farshirovannie_yaicom_i_lukom-610715.webp',
//    people: '3 персони',
//    preparation: '15 хвилин',
//    time: '20 хвилин',
//    ingredients: [
//      'баклажани - 2 шт',
//      'часник - 2 зубчики',
//      'часник - 2 зубчики',
//      'вершкове масло - 30 г',
//      'базилік',
//    ],
//    description:
//      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde',
//    steps: {
//      step1:
//        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//      step2:
//        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//    },
//    isLiked: false,
//    id: '8',
//  });
