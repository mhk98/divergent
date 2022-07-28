import React from 'react';
import {faChartLine, faClapperboard, faGripLines, faHouse, faLayerGroup} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = () => {
    return (
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
<ul className='flex space-x-36 justify-center py-12'>
    <li className='text-[#8C8787] hover:text-white cursor-pointer'>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faHouse}></FontAwesomeIcon>
      <span className='block'>Home</span>
      </a>
</li>
    <li className='text-[#8C8787] hover:text-white cursor-pointer'>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faChartLine}></FontAwesomeIcon>
      <span className='block'>Exclusive</span>
      </a>
</li>
    <li className='text-[#8C8787] hover:text-white cursor-pointer'>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faClapperboard}></FontAwesomeIcon>
      <span className='block'>Coming Soon</span>
      </a>
</li>
    <li className='text-[#8C8787] hover:text-white cursor-pointer'>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faLayerGroup}></FontAwesomeIcon>
      <span className='block'>Packages</span>
      </a>
</li>
    <li className='text-[#8C8787] hover:text-white cursor-pointer'>
        <a>
      <FontAwesomeIcon className='text-2xl' icon={faGripLines}></FontAwesomeIcon>
      <span className='block'>More</span>
      </a>
</li>

    </ul>
    <div className="border-b-4 border-white w-72 mx-auto"></div>
</div>


    );
};

export default Navbar;