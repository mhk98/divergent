import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Header from './Header';
import Navbar from './Navbar';
import Recent from './Recent';
import Release from './Release';



const Home = () => {
    return (
        <div className='px-8'>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <Release></Release>
            <Recent></Recent>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;