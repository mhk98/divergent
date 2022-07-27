import React from 'react';
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center justify-items-stretch'>
            <div className="py-8 flex">
                <div className="h-14 w-14 rounded-full bg-[#C4C4C4] border border-white">
                
                </div>
                <div className="pl-4">
                    <h1 className='text-white text-3xl'>Hi Ishtiaqe !</h1>
                    <p className='text-white'>You Have Remain 15 days</p>
                </div>
            </div>
            <div className="text-end">
        <h1 className='text-[#5A6777] text-4xl'><FontAwesomeIcon  icon={faSearch}></FontAwesomeIcon></h1>
            </div>
        </div>
    );
};

export default Header;