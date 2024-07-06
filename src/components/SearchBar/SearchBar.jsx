import { useState } from 'react';
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <div className={css.searchBarContainer}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          required
          onChange={handleInputChange}
          value={query}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
