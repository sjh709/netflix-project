import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state
  );
  //   console.log('popularMovies?', popularMovies);
  //   console.log('topRatedMovies?', topRatedMovies);
  //   console.log('upComingMovies?', upComingMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

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
