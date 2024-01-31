import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import { Container, Row, Col } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import MovieCardDetail from '../components/MovieCardDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-js-pagination';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const loading = useSelector((state) => state.loading);

  const searchMovies = () => {
    const keyword = query.get('q') || '';
    dispatch(movieAction.searchMovies(keyword, page));
  };

  useEffect(() => {
    searchMovies();
  }, [query, page]);

  const handlePageChange = (page) => {
    setPage(page);
  };

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
          <Pagination
            activePage={page}
            itemsCountPerPage={20}
            totalItemsCount={
              movieList.total_results > 10000 ? 10000 : movieList.total_results
            }
            pageRangeDisplayed={5}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={handlePageChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
