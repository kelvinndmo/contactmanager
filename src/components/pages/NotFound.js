import React from 'react';
import './notfound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div className='bowl'>
        <div className='spdline' />
        <div className='spider'>
          <div className='leg left-1' />
          <div className='leg left-2' />
          <div className='leg left-3' />
          <div className='leg right-1' />
          <div className='leg right-2' />
          <div className='leg right-3' />
        </div>
      </div>
      <div className='ghost'>
        <div className='eye eye-left' />
        <div className='eye eye-right' />
        <div className='chocolate' />
        <div className='mouth' />
      </div>

      <div className='signwood' />
      <div className='signtext text-danger'>
        <p>
          404-NOT FOUND
          <div className='text-danger'>
            <Link className='text-white' to='/'>
              GO HOME
            </Link>
          </div>
          <br />
        </p>
      </div>
      <div className='pin' />

      <div className='line' />
    </div>
  );
};

export default NotFound;
