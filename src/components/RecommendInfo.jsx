import React from 'react';
import MovieCard from './MovieCard';
import { Row, Col } from 'react-bootstrap';

const RecommendInfo = ({ movies }) => {
  return (
    <Row>
      {movies.results.map((item, index) => (
        <Col lg={6} key={index} className='recommend-movie'>
          <MovieCard item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default RecommendInfo;
