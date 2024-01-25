import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faFilm } from '@fortawesome/free-solid-svg-icons';
import ClipLoader from 'react-spinners/ClipLoader';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailList = useSelector((state) => state.movieDetailList.data);
  const loading = useSelector((state) => state.loading);

  const getMovieDetail = () => {
    dispatch(movieAction.getMovieDetail(id));
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  if (loading) {
    return (
      <ClipLoader
        color='#E8DEFF'
        loading={loading}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    );
  }

  return (
    <Container className='detail-wrapper'>
      {movieDetailList && (
        <Row>
          <Col lg={6}>
            <div className='movie-detail-img'>
              <img
                src={`https://image.tmdb.org/t/p/original${movieDetailList.poster_path}`}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className='movie-detail-info'>
              <div className='genre-badge-group'>
                {movieDetailList.genres &&
                  movieDetailList.genres.map((item, index) => (
                    <Badge bg='danger' key={index} className='genre-badge'>
                      {item.name}
                    </Badge>
                  ))}
              </div>
              <h1>{movieDetailList.title}</h1>
              <h5>{movieDetailList.tagline}</h5>
              <div className='movie-detail-social'>
                <ul>
                  <li>
                    <FontAwesomeIcon
                      icon={faImdb}
                      style={{ color: '#FFD43B' }}
                    />
                    <span>{movieDetailList.vote_average}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUsers} style={{ color: '#789' }} />
                    <span>{movieDetailList.vote_count}</span>
                  </li>
                  <li>
                    <span className='eightteen'>
                      {movieDetailList.adult ? '18+' : 'Under 18'}
                    </span>
                  </li>
                </ul>
              </div>
              <div id='line'></div>
              <p>{movieDetailList.overview}</p>
              <div id='line'></div>
              <ul className='movie-info-list'>
                <li>
                  <Badge bg='danger' id='info-badge'>
                    Budget
                  </Badge>
                  ${movieDetailList.budget}
                </li>
                <li>
                  <Badge bg='danger' id='info-badge'>
                    Revenue
                  </Badge>
                  ${movieDetailList.revenue}
                </li>
                <li>
                  <Badge bg='danger' id='info-badge'>
                    Release Day
                  </Badge>
                  {movieDetailList.release_date}
                </li>
                <li>
                  <Badge bg='danger' id='info-badge'>
                    Time
                  </Badge>
                  {movieDetailList.runtime}
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
      )}
    </Container>
  );
};

export default MovieDetail;
