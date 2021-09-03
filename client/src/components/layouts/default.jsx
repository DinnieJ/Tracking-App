import React, { Component } from 'react';
import { GRADIENT_BG } from '../../constants/tailwind.constant';

const DefaultLayout = ({ children }) => {
    return (<div className={`container flex items-center justify-center mx-auto min-h-screen`}>
        {children}
    </div>);
}
 
export default DefaultLayout;