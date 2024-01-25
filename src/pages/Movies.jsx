import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { movieAction } from '../redux/action/movieAction';
import { Container, Row, Col } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import MovieCardDetail from '../components/MovieCardDetail';

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
      <Row>
        <Col lg={5}>필터</Col>
        <Col lg={7}>
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
