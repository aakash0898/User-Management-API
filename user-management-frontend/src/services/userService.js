import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/api/users/register`, userData);
    return response.data;
};

export const loginUser = async (loginData) => {
    const response = await axios.post(`${API_BASE_URL}/api/users/login`, loginData);
    return response.data;
};

export const otpLogin = async (otpData) => {
    const response = await axios.post(`${API_BASE_URL}/api/users/otp-login`, otpData);
    return response.data;
};

export const getUserProfile = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const updateUserProfile = async (token, userData) => {
    const response = await axios.put(`${API_BASE_URL}/api/users/profile`, userData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const verifyEmail = async (verifyData) => {
    const response = await axios.post(`${API_BASE_URL}/api/users/verify-email`, verifyData);
    return response.data;
};
