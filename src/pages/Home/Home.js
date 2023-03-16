import React from 'react';
import Movielist from '../Movielist/Movielist';
import Banner from './Banner';

const Home = () => {
    return (
        <div className=' bg-[#101830]'>
            <Banner></Banner>
            <Movielist></Movielist>
        </div>
    );
};

export default Home;