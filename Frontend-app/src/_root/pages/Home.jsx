import React from 'react';
import VideoPlayer from '../../VideoPlayer'; // Adjust the path based on your structure
import Events from '../../components/shared/Events';
import Aboutus from '../../components/shared/Aboutus';
import Contact from '../../components/shared/Contact';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center ">
      <VideoPlayer /> {/* Display the video on the Home page */}
    </div>
    <section id='events'>
      <Events/>
    </section>
    <section id='about'>
      <Aboutus/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
    </>
  );
};

export default Home;