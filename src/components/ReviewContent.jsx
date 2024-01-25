import React from 'react';

const ReviewContent = ({ item }) => {
  console.log('item', item);
  return (
    <div className='tab-content'>
      {item.map((review, index) => (
        <div
          className={index === item.length - 1 ? 'last-review' : 'review-div'}
          key={index}
        >
          <h5>{review.author}</h5>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewContent;
