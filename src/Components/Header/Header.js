import React from 'react';
import { useState } from 'react';
const Header = () => {
  const [bgColor, setBgColor] = useState('black');
  const changeBackground = () => {
    // Set a new background color (You can choose your own colors or randomize)
    const newColor = bgColor === 'black' ? 'lightblue' : 'black';
    setBgColor(newColor);
  };
  return (
    <div
      className='header px-2 d-flex justify-content-between'
      style={{ backgroundColor: bgColor }}
    >
      <div className='text-white'>Vivek</div>
      <div className='text-white d-flex justify-content-end'>
        <div onClick={changeBackground} className='pe-4 cursor-pointer'>
          mode icon
        </div>
        <div>meanu icon</div>
      </div>
    </div>
    // <header class='header'>
    //   <div class='container'>
    //     <div class='logo'>
    //       <h1>Vivek</h1>
    //     </div>
    //     <nav class='navbar'>
    //       <ul class='nav-list'>
    //         <li>
    //           <a href='#'>Home</a>
    //         </li>
    //         <li>
    //           <a href='#'>About</a>
    //         </li>
    //         <li>
    //           <a href='#'>Services</a>
    //         </li>
    //         <li>
    //           <a href='#'>Contact</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div class='cta'>
    //       <a href='#' class='btn'>
    //         Get Started
    //       </a>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
