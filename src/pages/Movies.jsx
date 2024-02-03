import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import { Container, Row, Col } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import MovieCardDetail from '../components/MovieCardDetail';
import Pagination from 'react-js-pagination';
import SortSection from '../components/SortSection';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  const loading = useSelector((state) => state.loading);
  const sortValue = useSelector((state) => state.sortValue);

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

  const sortList = (movie) => {
    switch (sortValue) {
      case 'popularity-asc':
        return movieList.results.sort((a, b) => a.popularity - b.popularity);
      case 'release-day-desc':
        return movieList.results.sort(
          (a, b) =>
            Number(b.release_date.split('-').join('')) -
            Number(a.release_date.split('-').join(''))
        );
      case 'release-day-asc':
        return movieList.results.sort(
          (a, b) =>
            Number(a.release_date.split('-').join('')) -
            Number(b.release_date.split('-').join(''))
        );
      case 'vote-desc':
        return movieList.results.sort(
          (a, b) => b.vote_average - a.vote_average
        );
      case 'vote-asc':
        return movieList.results.sort(
          (a, b) => a.vote_average - b.vote_average
        );
      default:
        return movieList.results.sort((a, b) => b.popularity - a.popularity);
    }
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
              <SortSection sortValue={sortValue} />
            </Col>
          </Row>
        </Col>
        <Col lg={8}>
          <Row>
            {movieList.results &&
              sortList(movieList.results).map((item, index) => (
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
