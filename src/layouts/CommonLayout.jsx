import React from 'react'
import Header from '../Components/common/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/common/Footer'

function CommonLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  );
}

export default CommonLayout;