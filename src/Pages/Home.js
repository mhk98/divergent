import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Header from './Header';



const Home = () => {
    return (
        <div className='px-8'>
            <Header></Header>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;