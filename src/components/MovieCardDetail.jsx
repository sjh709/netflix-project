import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const MovieCardDetail = ({ item }) => {
  const genreList = useSelector((state) => state.genreList);
  //   console.log('moviecard', item);

  const showGenre = (id) => {
    const result = genreList.find((item) => item.id === id);
    return result.name;
  };

  return (
    <div className='movie-card-wrapper'>
      <div
        className='info-section'
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path})`,
        }}
      >
        <div className='movie-header'>
          <div className='movie-card-title'>
            <img
              width={60}
              height={90}
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            />
            <div>
              <h1>{item.title}</h1>
              <h4>{item.release_date.substr(0, 4)}</h4>
            </div>
          </div>
          <ul>
            {item.genre_ids &&
              item.genre_ids.map((id, idx) => (
                <li key={idx}>
                  <Badge bg='danger'>{genreList && showGenre(id)}</Badge>
                </li>
              ))}
          </ul>
        </div>
        <div className='movie-desc'>
          <p>{item.overview}</p>
        </div>
        <div className='movie-social'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faImdb} style={{ color: '#FFD43B' }} />
              <span>{item.vote_average}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} style={{ color: '#789' }} />
              <span>{item.vote_count}</span>
            </li>
            <li>
              <span className='eightteen'>
                {item.adult ? '18+' : 'Under 18'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetail;
