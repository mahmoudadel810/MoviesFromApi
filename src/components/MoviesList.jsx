import React from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import MovieCard from './MovieCard';
import CategoryFilter from './CategoryFilter';
import { useMovies } from '../context/MovieContext';

const MoviesList = () => {
  const { 
    filteredMovies, 
    categories, 
    selectedCategory, 
    handleCategoryChange, 
    handleDelete,
    loading,
    error
  } = useMovies();

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading movies...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          Error: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="text-center mb-4">Popular Movies</h2>
      
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      {filteredMovies.length === 0 ? (
        <Alert variant="info">
          No movies match your current filters. Try adjusting your search or category filter.
        </Alert>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredMovies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movie={movie} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MoviesList;
