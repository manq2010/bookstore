import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

const Button = styled.button`
  display: block;
  width: fit-content;
  margin: 1rem 0 1rem 4%;
  cursor: pointer;
  z-index: 2;
  color: #3fffd2;

@media (min-width: 768px) {
  display: none;
}
`;

const NavBar = styled.nav`
display: flex;
flex-direction: column;
`;

const MenuNavUL = styled.ul`
  list-style: none;
  display: none;
  position: relative;
  color: #121212;

  &.showMenu {
    display: block;
    position: fixed;
    margin-top: 0;
    padding-top: 4rem;
    left: 0;
    width: 100%;
    background: #0290ff;
    height: 100vh;
    z-index: 1;
  }

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    margin-top: 0;
    align-items: center;
    height: 2.5rem;
    opacity: .5;
    font-family: "Montserrat",sans-serif;
    font-size: .813rem;
    color: #121212;
    letter-spacing: 1.9px;

    &.showMenu {
      display: none
    }
  }
`;

const MenuLI = styled.li`
  margin: 1.5rem 0 1rem 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  a:link {
    text-decoration: none;
  }
`;

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
      <NavBar>
        <Button type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ color: '#fff', width: '30px', height: '30px' }} />
          ) : (
            <FiMenu style={{ color: '#7b7b7b', width: '30px', height: '30px' }} />
          )}
        </Button>
        <MenuNavUL className={`${navbarOpen ? 'showMenu' : ''}`}>
          <Logo />
          {links.map((link) => (
            <MenuLI key={link.id} onClick={() => closeMenu()} aria-hidden="true">
              <NavLink data-testid={link.text} to={link.path}>
                {link.text}
              </NavLink>
            </MenuLI>
          ))}
        </MenuNavUL>
      </NavBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
