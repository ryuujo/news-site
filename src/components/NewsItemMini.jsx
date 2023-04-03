import React from 'react';
import { Link } from 'react-router-dom';

function NewsItemMini(props) {
  const { image, title, description, id } = props;
  return (
    <Link to={`/news/${id}`}>
      <div className='flex gap-4 mb-4'>
        <div>
          <img src={image} alt={title} className='w-20 md:w-52' />
        </div>
        <div>
          <h4 className='text-primary uppercase text-lg'>{title}</h4>
          <p className='text-justify'>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default NewsItemMini;
