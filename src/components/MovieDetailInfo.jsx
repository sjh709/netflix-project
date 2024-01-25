import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faFilm } from '@fortawesome/free-solid-svg-icons';

const MovieDetailInfo = ({ item }) => {
  return (
    <Row className='detail-info-section'>
      <Col lg={6}>
        <div className='movie-detail-img'>
          <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} />
        </div>
      </Col>
      <Col lg={6}>
        <div className='movie-detail-info'>
          <div className='genre-badge-group'>
            {item.genres &&
              item.genres.map((item, index) => (
                <Badge bg='danger' key={index} className='genre-badge'>
                  {item.name}
                </Badge>
              ))}
          </div>
          <h1>{item.title}</h1>
          <h5>{item.tagline}</h5>
          <div className='movie-detail-social'>
            <ul>
              <li>
                <FontAwesomeIcon icon={faImdb} style={{ color: '#FFD43B' }} />
                <span>{item.vote_average}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} style={{ color: '#789' }} />
                <span>{item.vote_count}</span>
              </li>
              <li>
                <span className='eightteen'>
                  {item.adult ? '18+' : 'Under 18'}
                </span>
              </li>
            </ul>
          </div>
          <div id='line'></div>
          <p>{item.overview}</p>
          <div id='line'></div>
          <ul className='movie-info-list'>
            <li>
              <Badge bg='danger' id='info-badge'>
                Budget
              </Badge>
              ${item.budget}
            </li>
            <li>
              <Badge bg='danger' id='info-badge'>
                Revenue
              </Badge>
              ${item.revenue}
            </li>
            <li>
              <Badge bg='danger' id='info-badge'>
                Release Day
              </Badge>
              {item.release_date}
            </li>
            <li>
              <Badge bg='danger' id='info-badge'>
                Time
              </Badge>
              {item.runtime}
            </li>
          </ul>
          <div id='line'></div>
          <button className='btn-trailer'>
            <FontAwesomeIcon icon={faFilm} />
            <span>Watch Trailer</span>
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default MovieDetailInfo;
