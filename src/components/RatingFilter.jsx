import React from 'react';
import { Form, Row, Col, Card } from 'react-bootstrap';

const RatingFilter = ({ minRating, onRatingChange }) => {
  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>);
    }
    
    // Add half star if needed
    if (halfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
    }
    
    return stars;
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="mb-3">Filter by Rating</Card.Title>
        <Form>
          <Form.Group as={Row} className="align-items-center">
            <Col xs={12} md="auto" className="mb-2 mb-md-0">
              <div className="d-flex align-items-center">
                <span className="me-2 fw-bold">{minRating.toFixed(1)}/10</span>
                <div className="d-flex">
                  {renderStars(minRating)}
                </div>
              </div>
            </Col>
            <Col>
              <Form.Range
                min={0}
                max={10}
                step={0.5}
                value={minRating}
                onChange={(e) => onRatingChange(parseFloat(e.target.value))}
                className="rating-slider"
              />
              <div className="d-flex justify-content-between mt-1">
                <small>0</small>
                <small>5</small>
                <small>10</small>
              </div>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default RatingFilter;
