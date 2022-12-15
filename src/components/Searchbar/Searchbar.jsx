import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export const Searchbar = ({ onSubmitForm }) => {
  const [name, setName] = useState('');

  const formChange = event => {
    const searchName = event.currentTarget.value.toLowerCase();
    setName(searchName);
  };

  const formSubmit = event => {
    event.preventDefault();
    if (name.trim() === '') {
      return toast.error('Please, enter something into the search fild!');
    }

    onSubmitForm(name);
    setName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={formSubmit}>
        <button type="submit" className="SearchForm-button ">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={name}
          onChange={formChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
