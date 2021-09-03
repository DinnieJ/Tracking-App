import React, { useState } from 'react';
import DefaultLayout from '../components/layouts/default';
import LoginForm from '../components/login/LoginForm';
import { GRADIENT_BG } from '../constants/tailwind.constant';


const Login = () => {
    return ( <DefaultLayout>
        <LoginForm/>
    </DefaultLayout>);
}
 
export default Login;