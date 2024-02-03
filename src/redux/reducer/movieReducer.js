let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  genreList: {},
  movieList: {},
  loading: true,
  movieDetailList: {},
  movieReviewList: {},
  recommendList: {},
  videoId: {},
  sortValue: '',
  yearFilter: [0, new Date().getFullYear()],
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
        genreList: payload.genreList,
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
        movieReviewList: payload.movieReviewList,
        recommendList: payload.recommendList,
        videoId: payload.videoId.data,
        loading: false,
      };
    case 'SET_SORT_VALUE':
      return {
        ...state,
        sortValue: payload,
      };
    case 'SET_YEAR_FILTER':
      return {
        ...state,
        yearFilter: payload,
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
