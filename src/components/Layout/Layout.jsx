import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';

export default function Layout() {
    return <>
        <Navbar />
        <div className="pt-20 md:pt-0 ">
            <Outlet></Outlet>
        </div>
    </>
}
