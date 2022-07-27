import React from 'react';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        // <div className='grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-5 grid-cols-5'>
        //    <div className='flex items-stretch'>
        //    <div className='text-[#8C8787] hover:text-white'>
        //         <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        //         <li className='list-none'><a>Home</a></li>
        //     </div>
        //     <div className='text-[#8C8787] hover:text-white'>
        //         <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        //         <li className='list-none'><a>Home</a></li>
        //     </div>
        //     <div className='text-[#8C8787] hover:text-white'>
        //         <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        //         <li className='list-none'><a>Home</a></li>
        //     </div>
        //     <div className='text-[#8C8787] hover:text-white'>
        //         <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        //         <li className='list-none'><a>Home</a></li>
        //     </div>
        //     <div className='text-[#8C8787] hover:text-white'>
        //         <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        //         <li className='list-none'><a>Home</a></li>
        //     </div>
        //    </div>
           
    

        // </div>




        <div class="navbar text-white">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faHouse}></FontAwesomeIcon>
      <span className='block'>Home</span>
      </a>
</li>
      </ul>
    </div>
   
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faHouse}></FontAwesomeIcon>
      <span className='block'>Home</span>
      </a>
</li>
        <li><a>Exclusive</a></li>
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;