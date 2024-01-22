import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../images/logo.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" ><img id="logo" src={Logo} alt="Logo" /></Link>
      <Link className="hamburger" onClick={toggleMenu}>
        <RiMenu3Fill />
      </Link>
      <div ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link onClick={toggleMenu}><IoMdClose id='x' /></Link></li>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link to="https://www.linkedin.com/in/jacobkirn" target='_blank' ><FaLinkedin id='linkedin' /></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;