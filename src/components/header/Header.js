import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
    

    return (
        <div>
            <nav className="header">
                <h2 className="logo">Anna's Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/">Home</Link>
                    {/* <Link className="link" to="/about">About</Link> */}
                    <Link className="link" to="/signup">Signup</Link>
                    <Link className="link" to="/login">LogIn</Link>
                    {/* <Link className="link" to="/article-list">Articles</Link> */}
   
</div>
            </nav>
        </div>
    );
}




export default Header;