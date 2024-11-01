import { Moon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/white logo.svg'
import DarkmodeToggle from '../DarkmodeToggle/DarkmodeToggle';
import { useCountdown } from '../../contexts/CountdownContext';

export default function Navbar() {
  const { timeLeft, end, coming, active } = useCountdown();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);


  return (
    <>
      <nav className="bg-primary fixed w-[90%] left-1/2 transform -translate-x-1/2 top-5 rounded-3xl z-50">
        <div className="px-5 flex flex-wrap items-center justify-end md:justify-between mx-auto p-3">
          <Link to="" className="lg:w-[15%] absolute md:relative start-3 bg-blue flex items-center space-x-3">
            <img src={logo} alt="IEEE logo" />
            <span className='font-uni-sans-heavy text-cyan-50 tracking-wide'>ieee helwan</span>
          </Link>



          <div className={`${isNavOpen ? "fixed right-0 top-10" : "hidden"} md:static md:block md:w-auto" id="navbar-dropdown`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-primary bg-primary">
              <li>
                <NavLink onClick={() => { setIsNavOpen(!isNavOpen) }} to="" className="block py-2 px-3 text-white hover:bg-secondary hover:opacity-80 md:hover:bg-transparent opacity-50 md:hover:opacity-85 transition-all duration-300 rounded md:bg-transparent md:p-0" aria-current="page">HOME</NavLink>
              </li>

              {active ? <li>
                <NavLink onClick={() => { setIsNavOpen(!isNavOpen) }} to="form" className="block py-2 px-3 text-white opacity-50 rounded hover:bg-secondary hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:opacity-85 transition-all duration-300 md:p-0">FORM</NavLink>
              </li> : <></>}

            </ul>
          </div>

          <div className="lg:w-[13%] flex justify-end">
            <DarkmodeToggle />
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            onClick={() => { setIsNavOpen(!isNavOpen) }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden hover:opacity-80 focus:outline-none  focus:ring-gray-200 dark:text-gray-50 "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
