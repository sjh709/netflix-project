import React from 'react';

const MovieCard = ({ item }) => {
  //   console.log('MovieCard item', item);
  return (
    <div
      className='movie-card'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path})`,
      }}
    >
      {item.title}
    </div>
  );
};

export default MovieCard;
