import React from "react";

const Header = () => {
    return (
        <header>
        <nav style={{flexDirection: 'row', fontWeight: 'bold', fontSize: '3vh' }}>
        <a href="/">Home</a> | 
        <a href="/about"> About</a> |
        <a href="/contact"> Contact</a> 
        </nav>
        <hr></hr>
            <h1>Selamat datang di website saya!</h1>
        </header>
    );
}

export default Header;