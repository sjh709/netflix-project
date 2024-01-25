import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ReviewContent from './ReviewContent';

const ReviewInfo = ({ item }) => {
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
              RELATED MOVIES
            </button>
          </li>
        </ul>
        {btnActive ? <ReviewContent item={item.results} /> : <div>영화</div>}
      </Col>
    </Row>
  );
};

export default ReviewInfo;
