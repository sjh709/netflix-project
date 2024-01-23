import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const MovieCard = ({ item }) => {
  console.log('MovieCard item', item);
  return (
    <div
      className='movie-card'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path})`,
      }}
    >
      <div className='overlay'>
        <h3>{item.title}</h3>
        <div className='overlay-badge'>
          {item.genre_ids.map((id, index) => (
            <Badge bg='danger' key={index}>
              {id}
            </Badge>
          ))}
        </div>
        <div className='overlay-info'>
          <FontAwesomeIcon icon={faImdb} style={{ color: '#FFD43B' }} />
          <span>{item.vote_average}</span>
          <FontAwesomeIcon icon={faUsers} style={{ color: '#789' }} />
          <span>{item.vote_count}</span>
          <span className='eightteen'>{item.adult ? '18+' : 'Under 18'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
