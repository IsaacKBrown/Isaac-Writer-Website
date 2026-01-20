
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-[#0f172a] text-white py-6 px-4 md:px-12 sticky top-0 z-50 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="tracking-[0.2em] font-medium text-sm text-center md:text-left">
          FICTION WRITER, NOVELIST, STORYTELLER
        </div>
        <nav>
          <ul className="flex space-x-8 text-sm tracking-widest font-semibold">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`transition-colors duration-200 hover:text-blue-300 ${
                    location.pathname === link.path ? 'text-blue-400 border-b border-blue-400 pb-1' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
