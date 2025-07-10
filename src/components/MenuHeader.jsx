import React from 'react';
import '../assets/styles/MenuHeader.css';
import desktopBg from '../assets/images/menu-home.jpg';
import mobileBg from '../assets/images/MR-Menu-header.png';

const MenuHeader = () => {
  return (
    <div className="menu-header">
      <img src={desktopBg} alt="Menu Header Background" className="menu-header-bg desktop" />
      <img src={mobileBg} alt="Menu Header Background Mobile" className="menu-header-bg mobile" />

      <h1 className="menu-title">MENU</h1>
      <p className="menu-subtitle">
        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.
      </p>
    </div>
  );
};

export default MenuHeader;
