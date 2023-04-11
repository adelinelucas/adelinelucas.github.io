import React from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Layout = () => {
    return (
      <>
        <Header/>  
        <main className='page'>
          <span className='page__html-tags top-body-tag'>&lt;body&gt;</span>
          <Outlet />
          <span className='page__html-tags bottom-body-tag'>&lt;/body&gt;
          <br />
          <span className='page__html-tags bottom-html-tag'>&lt;/html&gt;</span>
          </span>
        </main>
        <Footer/>
      </>
    );
};

export default Layout;