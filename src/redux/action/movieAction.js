import api from '../../utils/api';

function getMovies() {
  return async (dispatch) => {
    const popularMovies = await api.get(`/movie/popular?language=ko-KR`);
    // console.log('popularMovies', popularMovies.data);
    dispatch({
      type: 'GET_MOVIES_SUCCESS',
      payload: { popularMovies: popularMovies.data },
    });
  };
}

export const movieAction = { getMovies };
