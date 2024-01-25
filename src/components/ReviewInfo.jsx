import React from 'react';
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ReviewInfo = ({ item }) => {
  const [btnActive, setBtnActive] = useState(false);

  const toggleActive = () => {
    setBtnActive(!btnActive);
  };

  return (
    <Row>
      <Col>
        <ul className='review-tab'>
          <li>
            <button
              className={btnActive ? '' : 'active'}
              onClick={toggleActive}
            >
              REVIEW ({item.results.length})
            </button>
          </li>
          <li>
            <button
              className={btnActive ? 'active' : ''}
              onClick={toggleActive}
            >
              RELATED MOVIES
            </button>
          </li>
        </ul>
        <div className='tab-content'>
          {btnActive ? <div>리뷰</div> : <div>영화</div>}
        </div>
      </Col>
    </Row>
  );
};

export default ReviewInfo;
