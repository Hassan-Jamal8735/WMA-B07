import React from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import Blog from '../blog/Blog';
import Aside from '../aside/Aside';
function Home() {
    return(
        <>
        <Header />
        <Hero />
        <Blog/>
        <Aside />
        <Footer />
      </>
    )
}
export default Home;