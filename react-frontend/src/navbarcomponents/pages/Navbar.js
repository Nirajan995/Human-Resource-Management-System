import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseEnter1 = () =>setDropdown1(true);
  const onMouseEnter2 = () => setDropdown2(true);
  const onMouseEnter3 = () =>  setDropdown3(true);

  const onMouseLeave = () => setDropdown(false);
  const onMouseLeave1 = () => setDropdown1(false);
  const onMouseLeave2 = () => setDropdown2(false);
  const onMouseLeave3 = () => setDropdown3(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Welcome-Admin<span>   </span>
          <i class="fa fa-user" aria-hidden="true"></i>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/employeemanagement'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Employee Management <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'
           onMouseEnter={onMouseEnter1}
           onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/payrollmanagement'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Payroll Management <i className='fas fa-caret-down' />
            </Link>
            {dropdown1 && <Dropdown1 />}
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}>
            <Link
              to='/projectmanagement'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Project Management <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter3}
          onMouseLeave={onMouseLeave3}>
            <Link
              to='/employeeperformance'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Employee Performance <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;