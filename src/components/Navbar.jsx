/** @format */

import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';

const Navbar = ({ theme, toggleTheme }) => {
  const [searchInput, setSearchInput] = useState('');
  const { handleSearch } = useMovies();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    handleSearch(value);
  };

  return (
    <BootstrapNavbar bg={theme} variant={theme} expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <i className="bi bi-film me-2"></i>
          Movie Cards
        </BootstrapNavbar.Brand>
        <Form className="d-flex mx-auto" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Search movies..."
            className="me-2"
            aria-label="Search"
            value={searchInput}
            onChange={handleChange}
          />
        </Form>
        <Button 
          variant={theme === 'light' ? 'outline-dark' : 'outline-light'} 
          onClick={toggleTheme}
          aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="d-flex align-items-center"
        >
          {theme === 'light' ? '🌙' : '☀️'} 
          <span className="ms-2 d-none d-md-inline">
            {theme === 'light' ? 'Dark' : 'Light'}
          </span>
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
