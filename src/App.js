import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './views/MainPage';
import Menu from './components/Menu';
import CategoryPage from './views/CategoryPage';
import SearchPage from './views/SearchPage';
import Recipe from './views/Recipe';
import Footer from './components/Footer';
import LikedPage from './views/LikedPage';
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
