import React, { useState } from 'react';
import { MenuItems3 } from './MenuItems3';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown3() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItems3.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
}

export default Dropdown3;