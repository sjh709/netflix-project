import api from '../../utils/api';

function getMovies() {
  return async (dispatch) => {
    try {
      // 데이터 도착 전 -> 로딩 true
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

function searchMovies(keyword, page) {
  return async (dispatch) => {
    try {
      // 데이터 도착 전 -> 로딩 true
      dispatch({ type: 'GET_MOVIES_REQUEST' });

      const url = keyword
        ? `/search/movie?query=${keyword}&language=ko-KR&page=${page}`
        : `/movie/popular?language=ko-KR&page=${page}`;
      const movieList = await api.get(url);

      dispatch({
        type: 'SEARCH_MOVIES_SUCCESS',
        payload: { movieList: movieList.data },
      });
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: 'GET_MOVIES_FAILURE' });
    }
  };
}

function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      // 데이터 도착 전 -> 로딩 true
      dispatch({ type: 'GET_MOVIES_REQUEST' });

      const movieDetailApi = api.get(`/movie/${id}?language=ko-KR`);
      const movieReviewApi = api.get(`/movie/${id}/reviews`);
      const recommendApi = api.get(
        `/movie/${id}/recommendations?language=ko-KR`
      );
      const videoApi = api.get(`/movie/${id}/videos`);

      let [movieDetailList, movieReviewList, recommendList, videoId] =
        await Promise.all([
          movieDetailApi,
          movieReviewApi,
          recommendApi,
          videoApi,
        ]);

      dispatch({
        type: 'GET_MOVIE_DETAIL_SUCCESS',
        payload: {
          movieDetailList: movieDetailList,
          movieReviewList: movieReviewList,
          recommendList: recommendList,
          videoId: videoId,
        },
      });
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: 'GET_MOVIES_FAILURE' });
    }
  };
}

export const movieAction = {
  getMovies,
  searchMovies,
  getMovieDetail,
};
