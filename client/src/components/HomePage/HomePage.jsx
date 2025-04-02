import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import './HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    const loggedIn = useContext(LoginContext);

    return (
        <>
            <nav>
                {
                    (loggedIn) ? (
                        <button onClick={() => {
                            ;
                        }}>Logout</button>) : (
                        <>
                            <button onClick={() => navigate('/login')}>Login</button>
                            <button onClick={() => navigate('/create-account')}>Create Account</button>
                        </>
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
