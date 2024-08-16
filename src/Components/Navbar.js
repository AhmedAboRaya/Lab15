import React, { useState } from 'react';
import logo1 from '../assets/image1.png';
import logo2 from '../assets/image2.jpg';
import './Navbar.css';

const Navbar = () => {
  const [logo, setLogo] = useState(logo1);

  const changeLogo = () => {
    setLogo(logo === logo1 ? logo2 : logo1);
  };

  return (
    <nav>
      <img src={logo} alt="Logo" onClick={changeLogo} />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li style={{ backgroundColor: 'lightblue' }}>Profile</li>
      </ul>
    </nav>
  );
};

export default Navbar;
