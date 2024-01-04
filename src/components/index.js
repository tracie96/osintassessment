import React from 'react'
import Footer from './Footer/Footer'
import Content from './Content/Content'
import './index.css';
import Nav from './Nav/Nav';
import Header from './Header/Header';

const Home = () => {
    return (
        <>
        <div className='headerwrap'>
          <Nav/>
          <Header/>
        </div>
    <div className='wrap'>
    <Content/>
    <Footer/>
    </div>

    </>
  )
}

export default Home