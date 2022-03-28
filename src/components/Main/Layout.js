import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';

function Layout(props) {
    return (
        <>
        <MainHeader/>
        <Outlet/>
        </>
    );
}

export default Layout;