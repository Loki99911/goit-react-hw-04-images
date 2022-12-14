import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  formChange = event => {
    const searchName = event.currentTarget.value.toLowerCase();
    this.setState({ name: searchName });
  };

  formSubmit = event => {
    event.preventDefault();
    if (this.state.name.trim() === '') {
      return toast.error('Please, enter something into the search fild!');
    }

    this.props.onSubmitForm(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.formSubmit}>
          <button type="submit" className="SearchForm-button ">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.formChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

