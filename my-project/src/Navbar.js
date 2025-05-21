import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>MyPortfolio</h2>
        <div>
          <a href="#projects">Projects</a> | 
          <a href="#skills" style={{ marginLeft: '10px' }}>Skills</a> | 
          <a href="#contact" style={{ marginLeft: '10px' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
