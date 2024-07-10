import React from 'react';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                    <Link href="/profile">Profile</Link>
                </nav>
            </header>
            <main>{children}</main>
            <ToastContainer />
        </div>
    );
};

export default Layout;
