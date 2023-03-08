import Slider from '../components/Slider';

function Home() {
  return (
    <div className='block md:grid md:gap-6 md:grid-cols-3'>
      <div className='col-span-2 mb-5 md:mb-0'>
        <Slider />
      </div>
      <div className='col-span-2 px-5 md:col-span-1 md:px-0'>
        <h3 className=' md:w-1/2 uppercase text-primary text-lg bold border-b border-b-primary mb-2 md:mb-4'>
          Recent News
        </h3>
        <div>News</div>
      </div>
    </div>
  );
}

export default Home;
