import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './Search.module.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchQuery);
    history.push({
      pathname: '/search',
      search: `query=${searchQuery}`,
    });
    setSearchQuery('');
  };

  return (
    <div className={styles.search}>
      <form
        className={styles['search-form']}
        name="search"
        onSubmit={handleSubmit}
      >
        <input
          className={styles['search-input']}
          type="search"
          placeholder="Пошук"
          value={searchQuery}
          onChange={handleChange}
        />

        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Search;
