import React, { useState } from 'react';
import './Navbar.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
// import Logo from '../Logo/Logo';
// import Footer from '../Footer/';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/books',
      text: 'Books',
    },
    {
      id: 3,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navBar">
        <button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '30px', height: '30px' }} />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
          {/* <Logo /> */}
          {links.map((link) => (
            <li key={link.id} onClick={() => closeMenu()} aria-hidden="true">
              <NavLink data-testid={link.text} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Navbar;
