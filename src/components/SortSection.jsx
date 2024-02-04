import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import RangeSlider from 'react-range-slider-input';

const CURRENT_YEAR = new Date().getFullYear();

const dropdown_list = {
  'popularity-desc': '인기 높은 순',
  'popularity-asc': '인기 낮은 순',
  'release-day-desc': '최근 순',
  'release-day-asc': '오래된 순',
  'vote-desc': '평점 높은 순',
  'vote-asc': '평점 낮은 순',
};

const SortSection = ({ sortValue }) => {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [year, setYear] = useState([0, CURRENT_YEAR]);
  const dispatch = useDispatch();
  const genreList = useSelector((state) => state.genreList.genres);
  const [genreId, setGenreId] = useState([]);

  useEffect(() => {
    dispatch({ type: 'SET_YEAR_FILTER', payload: { year, genreId } });
  }, [year, genreId]);

  const genreBadge = (event, id) => {
    if (event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      setGenreId(genreId.filter((i) => i !== id));
    } else {
      event.target.classList.add('active');
      setGenreId([...genreId, id]);
    }
  };

  return (
    <div>
      <div className={'sort-section ' + (sortOpen ? 'open' : '')}>
        <div className='name'>
          <h5>Sort</h5>
          <FontAwesomeIcon
            icon={faArrowRight}
            id='arrow-right'
            onClick={() => setSortOpen(!sortOpen)}
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            id='arrow-down'
            onClick={() => setSortOpen(!sortOpen)}
          />
        </div>
        <div className='filter'>
          <h5>Sort Results By</h5>
          <DropdownButton
            id='dropdown-basic-button'
            title={sortValue ? dropdown_list[sortValue] : 'Sort By'}
            variant='secondary'
            onSelect={(eventKey) =>
              dispatch({ type: 'SET_SORT_VALUE', payload: eventKey })
            }
          >
            <Dropdown.Item eventKey='popularity-desc'>
              인기 높은 순
            </Dropdown.Item>
            <Dropdown.Item eventKey='popularity-asc'>
              인기 낮은 순
            </Dropdown.Item>
            <Dropdown.Item eventKey='release-day-desc'>최근순</Dropdown.Item>
            <Dropdown.Item eventKey='release-day-asc'>오래된 순</Dropdown.Item>
            <Dropdown.Item eventKey='vote-desc'>평점 높은 순</Dropdown.Item>
            <Dropdown.Item eventKey='vote-asc'>평점 낮은 순</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className={'sort-section ' + (filterOpen ? 'open' : '')}>
        <div className='name'>
          <h5>Filter</h5>
          <FontAwesomeIcon
            icon={faArrowRight}
            id='arrow-right'
            onClick={() => setFilterOpen(!filterOpen)}
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            id='arrow-down'
            onClick={() => setFilterOpen(!filterOpen)}
          />
        </div>
        <div className='filter'>
          <div className='year-filter'>
            <h5>YEAR Filter</h5>
            <p>
              From: <span>{year[0] || '1990'}</span> - to:{' '}
              <span>{year[1]}</span>
            </p>
            <RangeSlider
              min={1990}
              max={CURRENT_YEAR}
              defaultValue={year}
              onInput={(value) => setYear(value)}
            />
          </div>
        </div>
        <div className='filter'>
          <div className='genres-filter'>
            <h5>Genres</h5>
            <div className='genres'>
              {genreList &&
                genreList.map((genre, index) => (
                  <Badge
                    bg='danger'
                    key={index}
                    onClick={(event) => genreBadge(event, genre.id)}
                  >
                    {genre.name}
                  </Badge>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortSection;
