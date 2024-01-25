let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  genreList: {},
  movieList: {},
  loading: true,
  movieDetailList: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList.genres,
        loading: false,
      };
    case 'GET_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return { ...state, movieList: payload.movieList, loading: false };
    case 'GET_MOVIE_DETAIL_SUCCESS':
      return {
        ...state,
        movieDetailList: payload.movieDetailList,
        loading: false,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
