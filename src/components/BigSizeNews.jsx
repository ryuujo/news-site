import { Link } from 'react-router-dom';

function BigSizeNews(props) {
  const { image, title, id } = props;
  return (
    <Link
      to={`/news/${id}`}
      className='block relative mb-8 h-80 md:h-full'
      style={{
        background: `url(${image}) center center / cover no-repeat`,
      }}
    >
      <div className='bg-primary text-black absolute bottom-0 w-full p-3'>
        <h4 className='text-2xl font-bold uppercase mb-3'>{title}</h4>
      </div>
    </Link>
  );
}

export default BigSizeNews;
