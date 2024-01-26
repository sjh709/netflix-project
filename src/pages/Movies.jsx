import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import { Container, Row, Col } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import MovieCardDetail from '../components/MovieCardDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const loading = useSelector((state) => state.loading);

  const searchMovies = () => {
    const keyword = query.get('q') || '';
    dispatch(movieAction.searchMovies(keyword));
  };

  useEffect(() => {
    searchMovies();
  }, [query]);

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
    <Container>
      <Row className='movie-margin'>
        <Col lg={4}>
          <Row>
            <Col lg={12}>
              <div className='sort-section'>
                <h5>Sort</h5>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              <div className='sort-section'>
                <h5>Filter</h5>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={8}>
          <Row>
            {movieList.results &&
              movieList.results.map((item, index) => (
                <Col lg={6} key={index}>
                  <MovieCardDetail item={item} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
