import React from 'react';
import logo from '../../images/logo.png'
import './index.css';

const Navbar=()=>{
    return(
        <div>
            <header className="header">
                <navbar className="navbar">
                    <div className="content">
                    <div className="logo">
                        <img  src={logo} alt='logo' width="120" />
                    </div>
                    <div className="header_content">
                        <h2>profile</h2>
                    </div>
                    </div>
                </navbar>
            </header>
        </div>
    )
}
export default Navbar;