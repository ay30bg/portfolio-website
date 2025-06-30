import React from 'react';

function Navbar({ isMobileMenuOpen, toggleMobileMenu }) {
  const navItems = [
    { name: 'Home', path: '/', icon: 'fas fa-house' },
    { name: 'Projects', path: '/projects', icon: 'fas fa-suitcase' },
    { name: 'Blogs', path: '/blogs', icon: 'fas fa-pen-to-square' },
    { name: 'Contacts', path: '/contacts', icon: 'fas fa-message' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header"></div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`nav-item ${window.location.pathname === item.path ? 'active' : ''}`}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`nav-item ${window.location.pathname === item.path ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;