import React, { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import { fetchUserProfile } from '../services/authService';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const profile = await fetchUserProfile(token);
                setUser(profile);
            }
        };
        fetchProfile();
    }, []);

    return user ? <UserProfile user={user} /> : <p>Loading...</p>;
};

export default ProfilePage;
