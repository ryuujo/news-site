import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import sosmed from '../data/sosmed';
import category from '../data/category';
import logo from '../assets/img/logo.png';
import Clock from './Clock';

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <header className="hidden md:block">
        <div className="navbar bg-base-100 pt-12 px-4 lg:px-20 pb-5">
          <div className="navbar-start block">
            <Clock />
            <div className="inline-flex mt-4 space-x-7">
              {sosmed.map((s) => (
                <Link key={s.name} to={s.link}>
                  {s.render}
                </Link>
              ))}
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/" className="text-xl">
              <img src={logo} alt="TechNews Logo" />
            </Link>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul className="hidden lg:inline-flex bg-black uppercase menu menu-horizontal w-full bg-base-100 px-20">
          {category.map((cat) => (
            <li
              key={cat.name}
              className={
                pathname === cat.link ? 'bg-primary font-bold text-black' : ''
              }
            >
              <Link to={cat.link}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}

export default Navbar;
