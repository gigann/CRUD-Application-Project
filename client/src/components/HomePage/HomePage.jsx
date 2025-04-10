import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { UserContext } from '../../contexts/UserContext';

function HomePage() {
    const navigate = useNavigate();
    const [userID, setUserID] = useContext(UserContext);

    return (
        <>
            <h1>Home</h1>
            <nav className='main-menu'>
                {
                    (userID > 0) ? (
                        <>
                            <button onClick={() => {
                                setUserID(0); // logout
                            }}>Logout</button>

                            <button onClick={() => navigate('/personal_inventory')}>View Personal Inventory</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate('/login')}>Login</button>
                            <button onClick={() => navigate('/create-account')}>Create Account</button>
                        </>
                    )
                }


                <button onClick={() => navigate('/global_inventory')}>View All Inventories</button>
            </nav>

            {(userID > 0)?(
                <p>You are currently logged in.</p>
            ):(
                <p>You are currently logged out.</p>
            )}

        </>
    )
}

export default HomePage;
