import React, { useState } from 'react';
import DefaultLayout from '../components/layouts/default';
import LoginForm from '../components/login/LoginForm';
import { useSelector } from "react-redux"
import { Redirect } from "react-router"



const Login = () => {
    const token = useSelector(state => state.auth.token)

    if(token) {
      return <Redirect to="/"/>
    }
  
    return ( <DefaultLayout>
        <LoginForm/>
    </DefaultLayout>);
}
 
export default Login;