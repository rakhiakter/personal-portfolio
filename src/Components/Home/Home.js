import React from 'react';
import Articles from '../Articles/Articles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProjects from '../HomeProjects/HomeProjects';
import Next from '../Next/Next';


const Home = () => {
    return (
        <div>
       <Header></Header>
       <HomeProjects></HomeProjects>
       <Articles></Articles>
       <Next></Next>
       <Footer></Footer>
        </div>
    );
};

export default Home;