import api from '../../utils/api';

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(`/movie/popular?language=ko-KR`);
    const topRatedApi = api.get(`/movie/top_rated?language=ko-KR`);
    const upComingApi = api.get(`/movie/upcoming?language=ko-KR`);
    const genreApi = api.get(`/genre/movie/list`);

    let [popularMovies, topRatedMovies, upComingMovies, genreList] =
      await Promise.all([popularMovieApi, topRatedApi, upComingApi, genreApi]);

    // console.log('popularMovies', popularMovies.data);
    // console.log('topRatedMovies', topRatedMovies.data);
    // console.log('upComingMovies', upComingMovies.data);

    dispatch({
      type: 'GET_MOVIES_SUCCESS',
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upComingMovies: upComingMovies.data,
        genreList: genreList.data,
      },
    });
  };
}

export const movieAction = { getMovies };
