import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../styles/AuthForm.module.css';

const AuthForm = ({ type, onSubmit }) => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onSubmit(formData);
            toast.success(`${type} successful!`);
        } catch (error) {
            toast.error(`Failed to ${type}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>{type}</h2>
            {type === 'Register' && (
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">{type}</button>
        </form>
    );
};

export default AuthForm;
