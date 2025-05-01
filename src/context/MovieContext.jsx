import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
const MovieContext = createContext();

// Custom hook to use the movie context
export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        // Using TMDB API
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        
        const data = await response.json();
        
        // Transform the data to match our app's structure
        const transformedMovies = data.results.map(movie => ({
          id: movie.id,
          title: movie.title,
          details: movie.overview,
          date: movie.release_date,
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          rating: movie.vote_average,
          // Fetch a genre for each movie
          category: movie.genre_ids && movie.genre_ids.length > 0 
            ? getGenreName(movie.genre_ids[0]) 
            : 'Unknown'
        }));
        
        setMovies(transformedMovies);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(transformedMovies.map(movie => movie.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchMovies();
  }, []);

  // Helper function to map genre IDs to names
  const getGenreName = (genreId) => {
    const genres = {
      28: 'Action',
      12: 'Adventure',
      16: 'Animation',
      35: 'Comedy',
      80: 'Crime',
      99: 'Documentary',
      18: 'Drama',
      10751: 'Family',
      14: 'Fantasy',
      36: 'History',
      27: 'Horror',
      10402: 'Music',
      9648: 'Mystery',
      10749: 'Romance',
      878: 'Sci-Fi',
      10770: 'TV Movie',
      53: 'Thriller',
      10752: 'War',
      37: 'Western'
    };
    
    return genres[genreId] || 'Unknown';
  };

  // Filter movies based on search term and category
  useEffect(() => {
    const filtered = movies.filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || movie.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    
    setFilteredMovies(filtered);
  }, [movies, searchTerm, selectedCategory]);

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle delete movie
  const handleDelete = (movieId) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        filteredMovies,
        categories,
        selectedCategory,
        loading,
        error,
        handleSearch,
        handleCategoryChange,
        handleDelete
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};