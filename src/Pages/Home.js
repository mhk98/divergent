import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Exclusive from './Exclusive';
import Header from './Header';
import Navbar from './Navbar';
import Only from './Only';
import Recent from './Recent';
import Release from './Release';
import Teaser from './Teaser';
import Trending from './Trending';
import Watching from './Watching';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
            <Release></Release>
            <Recent></Recent>
            <Navbar></Navbar>
            <Trending></Trending>
            <Exclusive></Exclusive>
            <Watching></Watching>
            <Teaser></Teaser>
            <Only></Only>
        </div>
    );
};

export default Home;