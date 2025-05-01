import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3">Filter by Category</Card.Title>
        <div className="d-flex flex-wrap gap-2">
          <Button 
            variant={selectedCategory === 'All' ? 'primary' : 'outline-primary'} 
            onClick={() => onCategoryChange('All')}
            className="mb-1"
          >
            All
          </Button>
          {categories.map(category => (
            <Button 
              key={category} 
              variant={selectedCategory === category ? 'primary' : 'outline-primary'}
              onClick={() => onCategoryChange(category)}
              className="mb-1"
            >
              {category}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CategoryFilter;
