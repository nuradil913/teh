import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsBasket } from "react-icons/bs";
import './header.css';

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className='container-header' onClick={toggleMenu}>
      <h1 className='header-h1'>MY SHOP</h1>
      <div className="parent-search">
        <input type="text" placeholder='Поисковик........' className='input-search' />
        <button className='button-search'>Поиск</button>
      </div>

      <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`parent-link ${isOpen ? 'open' : ''}`}>
        <BsBasket className='backet' />
        {location.pathname === '/brands' ? (
          <>
            <Link className='link-header' to={'/brands/apple'} onClick={toggleMenu}>Apple</Link>
            <Link className='link-header' to={'/brands/samsung'} onClick={toggleMenu}>Samsung</Link>
            <Link className='link-header' to={'/brands/oneplus'} onClick={toggleMenu}>OnePlus</Link>
            <Link className='link-header' to={'/brands/xiomi'} onClick={toggleMenu}>Xiomi</Link>
            <Link className='link-header' to={'/brands/googlepixel'} onClick={toggleMenu}>Google Pixel</Link>
            <Link className='link-header' to={'/brands/huawei'} onClick={toggleMenu}>Huawei</Link>
            <Link className='link-header' to={'/'} onClick={toggleMenu}>Home</Link>
          </>
        ) : (
          <>
            <Link className='link-header' to={'/'} onClick={toggleMenu}>Home</Link>
            <Link className='link-header-search' to={'/search'} onClick={toggleMenu}>Search</Link>
            <Link className='link-header' to={'/about'} onClick={toggleMenu}>About</Link>
            <Link className='link-header' to={'/contact'} onClick={toggleMenu}>Contact</Link>
            <Link className='link-header' to={'/brands'} onClick={toggleMenu}>Brands</Link>
          </>
        )}
      </div>
    </div>
  );
}
