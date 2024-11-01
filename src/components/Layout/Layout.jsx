import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';

export default function Layout() {
    return <>
        <div className="py-4 min-h-screen bg-pattern space-y-4">
            <Navbar />
            <Outlet></Outlet>
        </div>
    </>
}
