import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const genreList = useSelector((state) => state.genreList.genres);

  const showGenre = (id) => {
    if (!genreList) return [];
    const result = genreList.find((item) => item.id === id);
    return result.name;
  };

  const movieDetailPage = (item) => {
    navigate(`/movie/${item.id}`);
  };

  return (
    <div
      className='movie-card'
      style={{
        background: item.poster_path
          ? `url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path})`
          : 'black',
      }}
      onClick={() => movieDetailPage(item)}
    >
      <div className='overlay'>
        <h3>{item.title}</h3>
        <div className='overlay-badge'>
          {item.genre_ids &&
            item.genre_ids.map((id, index) => (
              <Badge bg='danger' key={index}>
                {showGenre(id)}
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
