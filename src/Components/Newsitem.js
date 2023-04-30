import React, { useState } from 'react';

const Newsitem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, key } = props;
  const [showDescription, setShowDescription] = useState(false);

  const handleReadMore = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div key={key} className='my-3'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={imageUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          {showDescription && <p className='card-text'>{description}</p>}
          <p className='card-text'>
            <small className='text-muted'>{date}</small>
          </p>
          <button
            className='btn btn-sm btn-dark'
            onClick={handleReadMore}
          >
            {showDescription ? 'Read Less' : 'Read More'}
          </button>
          <a
            rel='noreferrer'
            href={newsUrl}
            target='_blank'
            className='btn btn-sm btn-dark ms-2'
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
