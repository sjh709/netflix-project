import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import { Container } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import MovieDetailInfo from '../components/MovieDetailInfo';
import ReviewInfo from '../components/ReviewInfo';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailList = useSelector((state) => state.movieDetailList.data);
  const movieReviewList = useSelector((state) => state.movieReviewList.data);
  const recommendList = useSelector((state) => state.recommendList.data);
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
    <>
      {movieDetailList && (
        <Container className='detail-wrapper'>
          <MovieDetailInfo item={movieDetailList} />
          {movieReviewList && (
            <ReviewInfo item={movieReviewList} movies={recommendList} />
          )}
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
