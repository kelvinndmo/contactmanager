import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          {branding}
        </a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <Link to='/' className='nav-link'>
              <i className='fas fa-home' />
              Home
            </Link>
            <Link to='/contact/add' className='nav-link'>
              <i className='fas fa-plus' />
              Add Contact
            </Link>
            <Link to='/about' className='nav-link'>
              <i className='fas fa-question' />
              About
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
