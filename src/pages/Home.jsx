import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies);
  //   console.log('popularMovies?', popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      <h3>인기 있는 영화</h3>
      <MovieSlide movies={popularMovies} />
    </div>
  );
};

export default Home;
