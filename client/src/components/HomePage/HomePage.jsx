import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext.jsx';

import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();
    const loggedIn = useContext(LoginContext);

    return (
        <>
            <nav>
                <button onClick={() => navigate('/create-account')}>Create Account</button>
                {
                    (loggedIn) ? (
                        <button onClick={() => navigate('/logout')}>Logout</button>) : (
                        <button onClick={() => navigate('/login')}>Login</button>
                    )
                }


                <button onClick={() => navigate('/inventory')}>View Inventory</button>
            </nav>

            <h1>Home Page</h1>
            <p>You are currently logged out.</p>
        </>
    )
}

export default HomePage;
