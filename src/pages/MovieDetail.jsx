import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/action/movieAction';

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieDetailList = useSelector((state) => state.movieDetailList);
  console.log('movieDetailList', movieDetailList);

  const getMovieDetail = () => {
    dispatch(movieAction.getMovieDetail(id));
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return <div></div>;
};

export default MovieDetail;
