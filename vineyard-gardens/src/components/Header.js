import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faHeartbeat } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white shadow-md h-16 px-4">
      {/* Speak Icon */}
      <div className="text-green-600">
        <FontAwesomeIcon icon={faMicrophone} size="2x" />
      </div>

      {/* Logo */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-600">VineYard Gardens</h1>
      </div>

      {/* Health/Emergency Icon */}
      <div className="text-red-600">
        <FontAwesomeIcon icon={faHeartbeat} size="2x" />
      </div>
    </header>
  );
};

export default Header;
