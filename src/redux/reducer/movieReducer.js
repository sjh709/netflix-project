let initialState = {
  popularMovies: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case 'GET_MOVIES_SUCCESS':
      return { ...state, popularMovies: payload.popularMovies };
    default:
      return { ...state };
  }
}

export default movieReducer;
