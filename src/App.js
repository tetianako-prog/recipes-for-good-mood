import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './views/MainPage';
import Menu from './components/Menu/Menu';
import CategoryPage from './views/CategoryPage/CategoryPage';
import SearchPage from './views/SearchPage';
import Recipe from './views/Recipe/Recipe';
import Footer from './components/Footer/Footer';
import LikedPage from './views/LikedPage/LikedPage';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Menu />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/liked" component={LikedPage} />
        <Route path="/:category/:id" component={Recipe} />
        <Route path="/:category" component={CategoryPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
