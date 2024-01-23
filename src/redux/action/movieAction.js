import api from '../../utils/api';

function getMovies() {
  return async (dispatch) => {
    try {
      //데이터 도착 전 -> 로딩 true
      dispatch({ type: 'GET_MOVIES_REQUEST' });

      const popularMovieApi = api.get(`/movie/popular?language=ko-KR`);
      const topRatedApi = api.get(`/movie/top_rated?language=ko-KR`);
      const upComingApi = api.get(`/movie/upcoming?language=ko-KR`);
      const genreApi = api.get(`/genre/movie/list`);

      let [popularMovies, topRatedMovies, upComingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upComingApi,
          genreApi,
        ]);

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
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: 'GET_MOVIES_FAILURE' });
    }
  };
}

export const movieAction = { getMovies };
