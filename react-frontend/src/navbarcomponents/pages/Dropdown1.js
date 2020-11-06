import React, { useState } from 'react';
import { MenuItems1 } from './MenuItems1';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown1() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItems1.map((item, index) => {
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

export default Dropdown1;