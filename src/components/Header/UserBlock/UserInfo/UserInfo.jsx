/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuth } from '../../../../context/AuthContext';
import './UserInfo.css';
import loading_icon from '../../../../assets/loader.png';

const UserInfo = ({ userName, userPicture, isLoading }) => {
    const { setIsLoggedIn } = useAuth();

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenExpire'); 
    };

    return (
        <div className="user-info">
            <div className="user-details">
                <div className="user-name">{userName}</div>
                
                <a href="#" className="logout-link" onClick={handleLogout}>Выйти</a>
            </div>
            {isLoading ? (
                <img src={loading_icon} alt="Loading" className="loading-icon" />
            ) : (
                <img src={userPicture} alt="User" className="user-picture" />
            )}
        </div>
    );
};

export default UserInfo;