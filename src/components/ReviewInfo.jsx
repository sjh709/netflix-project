import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReviewContent from './ReviewContent';
import RecommendInfo from './RecommendInfo';

const ReviewInfo = ({ item, movies }) => {
  const [btnActive, setBtnActive] = useState(true);

  const toggleActive = () => {
    setBtnActive(!btnActive);
  };

  return (
    <Row>
      <Col>
        <ul className='review-tab'>
          <li>
            <button
              className={btnActive ? 'active' : ''}
              onClick={toggleActive}
            >
              REVIEW ({item.results.length})
            </button>
          </li>
          <li>
            <button
              className={btnActive ? '' : 'active'}
              onClick={toggleActive}
            >
              RELATED MOVIES ({movies.results.length})
            </button>
          </li>
        </ul>
        {btnActive ? (
          <ReviewContent item={item.results} />
        ) : (
          <RecommendInfo movies={movies} />
        )}
      </Col>
    </Row>
  );
};

export default ReviewInfo;
