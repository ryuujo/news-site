import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import sosmed from '../data/sosmed';
import category from '../data/category';
import logo from '../assets/img/logo.png';
import Clock from './Clock';

function Navbar() {
  const { pathname } = useLocation();
  return (
    <>
      <header className='hidden md:block'>
        <div className='navbar bg-base-100 pt-12 px-4 lg:px-20 pb-5'>
          <div className='navbar-start block'>
            <Clock />
            <div className='inline-flex mt-4 space-x-7'>
              {sosmed.map((s) => (
                <Link key={s.name} to={s.link}>
                  {s.render}
                </Link>
              ))}
            </div>
          </div>
          <div className='navbar-center'>
            <Link to='/' className='text-xl'>
              <img
                src={logo}
                className=' md:w-2/3 mx-auto lg:w-auto'
                alt='TechNews Logo'
              />
            </Link>
          </div>
          <div className='navbar-end'>
            <button className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <header className='block md:hidden'>
        <div className='bg-black'>
          <Clock />
        </div>
        <div className='w-full navbar bg-base-300'>
          <div className='flex-1 px-2 mx-2'>
            <Link to='/' className='text-sm'>
              <img src={logo} alt='TechNews Logo' className=' w-32' />
            </Link>
          </div>
          <div className='flex-none visible lg:block'>
            <button className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <ul className='bg-black text-sm uppercase menu menu-horizontal w-full inline-flex lg:px-20'>
        {category.map((cat) => (
          <li
            key={cat.name}
            className={
              pathname === cat.link ? 'bg-primary font-bold text-black' : ''
            }
          >
            <Link to={cat.link} className='py-2'>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Navbar;
