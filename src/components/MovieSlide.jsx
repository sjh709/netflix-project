import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const MovieSlide = ({ movies }) => {
  console.log('MovieSlide movies', movies);

  return (
    <div>
      {movies.results && (
        <Carousel
          responsive={responsive}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          showDots={true}
        >
          {movies.results.map((item, index) => (
            <MovieCard item={item} key={index} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MovieSlide;
