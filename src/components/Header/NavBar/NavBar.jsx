/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../NavBar/NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">Главная</a>
            <a href="#">Тарифы</a>
            <a href="#">FAQ</a>
        </nav>
    );
};

export default Navbar;