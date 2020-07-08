import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/hero'

const Home = (props) => {
    return(
        <div>
            <Hero title="Be relentless" subTitle="Projects that make a difference" text="checkout my project below" />
        </div>
    );
}


export default Home;