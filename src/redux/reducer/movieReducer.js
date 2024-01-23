let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  genreList: {},
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
      };
    default:
      return { ...state };
  }
}

export default movieReducer;
