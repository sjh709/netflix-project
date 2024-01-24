import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { movieAction } from '../redux/action/movieAction';

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movieList);
  // console.log('movieList', movieList);

  const searchMovies = () => {
    const keyword = query.get('q') || '';
    dispatch(movieAction.searchMovies(keyword));
  };

  useEffect(() => {
    searchMovies();
  }, [query]);

  return <div>Movies</div>;
};

export default Movies;
