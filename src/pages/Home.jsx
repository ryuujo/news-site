import Slider from '../components/Slider';
import NewsItemMini from '../components/NewsItemMini';

import image from '../assets/img/pop_right1.jpg';

function Home() {
  return (
    <div className='block md:grid md:gap-x-6 md:grid-cols-3'>
      <div className='col-span-2'>
        <Slider />
      </div>
      <div className='col-span-2 px-5 md:col-span-1 md:pr-8 pt-5'>
        <h3 className=' md:w-1/2 uppercase text-primary text-lg bold border-b border-b-primary mb-2 md:mb-4'>
          Recent News
        </h3>
        {[...Array(4)].map((d, i) => (
          <NewsItemMini
            image={image}
            title={`Judul ${i + 1}`}
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quibusdam eaque ipsam amet ipsa.'
            key={i}
          />
        ))}
      </div>
      <div className='col-span-2 px-5 md:px-10 pt-5'>
        <h3 className=' md:w-1/2 uppercase text-primary text-lg bold border-b border-b-primary mb-2 md:mb-4'>
          Game News
        </h3>
        <div className='block md:grid md:grid-cols-2 md:gap-8'>
          <div>Big size news</div>
          <div>
            {[...Array(3)].map((d, i) => (
              <NewsItemMini
                image={image}
                title={`Judul ${i + 1}`}
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quibusdam eaque ipsam amet ipsa.'
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
