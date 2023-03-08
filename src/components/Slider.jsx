import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';
import feature from '../assets/img/feature-static1.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
      >
        {[...Array(5)].map((d, i) => (
          <SwiperSlide key={i}>
            <Link to='/news/#'>
              <div
                style={{
                  background: `url('${feature}') center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='swiperSlideDiv swiperExplore'
              >
                <div className='bg-primary text-black absolute bottom-0 pt-3 px-5 pb-10'>
                  <p className='text-3xl font-bold uppercase mb-3'>
                    Judul berita
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Expedita aut, tenetur quod reprehenderit incidunt reiciendis
                    ea nesciunt optio officia sequi odit perspiciatis!
                    Blanditiis non, harum mollitia beatae nam animi aut.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
