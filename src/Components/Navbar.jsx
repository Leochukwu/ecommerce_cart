import React from 'react';

const Navbar = () => {
  const cats = () => {
    alert('There is no item here');
  };

  return (
    <div className='navBar'>
      <div className="menus">
        <div className="logo">
          <h2>sneakers</h2>
        </div>
        <div className="menu">
          <li><a href="#">Collection</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </div>
      </div>
      <div className="carts">
        <img onClick={cats} src="../images/icon-cart.svg" alt="" />
        <img className='profile_pics' src="../images/image-avatar.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
