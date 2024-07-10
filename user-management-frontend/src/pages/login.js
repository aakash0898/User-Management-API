import React from 'react';
import AuthForm from '../components/AuthForm';
import { loginUser } from '../services/userService';

const LoginPage = () => {
    const handleLogin = async (data) => {
        await loginUser(data);
        // Handle login success (redirect or display message)
    };

    return (
        <AuthForm type="Login" onSubmit={handleLogin} />
    );
};

export default LoginPage;
