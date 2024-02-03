import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const isSortOpen = () => {
    setSortOpen(!sortOpen);
  };

  const isFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  return (
    <div>
      <div className={'sort-section ' + (sortOpen ? 'open' : '')}>
        <div className='name'>
          <h5>Sort</h5>
          <FontAwesomeIcon
            icon={faArrowRight}
            id='arrow-right'
            onClick={isSortOpen}
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            id='arrow-down'
            onClick={isSortOpen}
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
            onClick={isFilterOpen}
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            id='arrow-down'
            onClick={isFilterOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SortSection;
