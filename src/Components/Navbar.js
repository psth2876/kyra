import React from 'react'


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_content">
                <div className="logo">
                    <img src="logo.png" className="img_mod"></img>
                </div>
                <ul className="ul_content">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
