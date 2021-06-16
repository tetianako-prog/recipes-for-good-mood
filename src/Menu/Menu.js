import React, { Component } from 'react';
import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import axios from 'axios';

class Menu extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    axios
      .get('https://60ae79925b8c300017dea964.mockapi.io/api/categories')
      .then(response => this.setState({ categories: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { categories } = this.state;
    return (
      <nav>
        <Container>
          <ul className={styles.menu}>
            {categories.length > 0 &&
              categories.map(category => (
                <li className={styles.item} key={category.type}>
                  <Link className={styles.link} to={`/${category.type}`}>
                    {' '}
                    {category.title}
                  </Link>
                </li>
              ))}

            <li className={styles.item} key="liked">
              <Link className={styles.link} to="/liked">
                Улюблене
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    );
  }
}

export default Menu;
