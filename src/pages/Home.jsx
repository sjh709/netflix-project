import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies);
  const topRatedMovies = useSelector((state) => state.topRatedMovies);
  const upComingMovies = useSelector((state) => state.upComingMovies);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(movieAction.getMovies());
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
    <div className='home-container'>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      <section>
        <h3>인기 있는 영화</h3>
        <MovieSlide movies={popularMovies} />
      </section>
      <section>
        <h3>평점 높은 영화</h3>
        <MovieSlide movies={topRatedMovies} />
      </section>
      <section>
        <h3>개봉 예정 영화</h3>
        <MovieSlide movies={upComingMovies} />
      </section>
    </div>
  );
};

export default Home;
