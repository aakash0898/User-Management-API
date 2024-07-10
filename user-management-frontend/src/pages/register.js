import React from 'react';
import AuthForm from '../components/AuthForm';
import { registerUser } from '../services/userService';

const RegisterPage = () => {
    const handleRegister = async (data) => {
        await registerUser(data);
        // Handle register success (redirect or display message)
    };

    return (
        <AuthForm type="Register" onSubmit={handleRegister} />
    );
};

export default RegisterPage;
