import React from 'react'
import { Outlet } from "react-router-dom";

import Navbar from '../../Components/Navbar/Navbar';

const Layout = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="container">
            <Outlet />
        </div>
    </>
  )
}

export default Layout