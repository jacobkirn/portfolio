import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../images/logo.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
	return () => {
	  document.removeEventListener('mousedown', handleClickOutside);
	};
  }, []);

  return (
	<nav className="navbar">
	  <Link to="/" ><img className="logo" src={Logo} alt="Logo"/></Link>
	  <Link className="hamburger" onClick={toggleMenu}>
	  	<RiMenu3Fill />
	  </Link>
	  <div ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
		<ul>
		  <li><Link onClick={toggleMenu}><IoMdClose className='x'/></Link></li>
		  <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
		  <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
		  <li><Link to="https://www.linkedin.com/in/jacobkirn" target='_blank' ><FaLinkedin className='linkedin'/></Link></li>
		</ul>
	  </div>
	</nav>
  );
}

export default NavBar;
