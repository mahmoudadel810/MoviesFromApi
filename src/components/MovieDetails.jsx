import React from 'react';
import { Container, Row, Col, Image, Badge, Button, Alert, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovies } from '../context/MovieContext';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, loading, error } = useMovies();
  
  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading movie details...</p>
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

  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <Container className="py-5">
        <Alert variant="warning">
          Movie not found
        </Alert>
        <Button variant="primary" onClick={() => navigate('/')}>
          Back to Movies
        </Button>
      </Container>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get category badge color
  const getCategoryColor = (category) => {
    const colors = {
      'Action': 'danger',
      'Adventure': 'success',
      'Animation': 'info',
      'Comedy': 'warning',
      'Crime': 'dark',
      'Documentary': 'secondary',
      'Drama': 'info',
      'Family': 'warning',
      'Fantasy': 'primary',
      'History': 'secondary',
      'Horror': 'dark',
      'Music': 'info',
      'Mystery': 'secondary',
      'Romance': 'danger',
      'Sci-Fi': 'primary',
      'TV Movie': 'info',
      'Thriller': 'dark',
      'War': 'danger',
      'Western': 'warning'
    };
    
    return colors[category] || 'primary';
  };

  return (
    <Container className="py-5">
      <Button variant="secondary" className="mb-4" onClick={() => navigate('/')}>
        Back to Movies
      </Button>
      <Row>
        <Col md={4}>
          <Image src={movie.image} alt={movie.title} fluid className="shadow" />
        </Col>
        <Col md={8}>
          <h1>{movie.title}</h1>
          <div className="mb-3">
            <Badge bg="warning" text="dark" className="me-2">
              Rating: {movie.rating}/10
            </Badge>
            <Badge bg={getCategoryColor(movie.category)}>
              {movie.category}
            </Badge>
          </div>
          <p className="lead">{movie.details}</p>
          <p>
            <strong>Release Date:</strong> {formatDate(movie.date)}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
