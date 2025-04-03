import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext.jsx';

import './LoginPage.css';
// import { UserContext } from '../../contexts/UserContext.jsx';
// should set the usercontext userid
// that should also store it in a cookie for persisting through refreshes
// cookie should delete itself after a day?
// or on session end?
// or if the user presses the logout button.


function LoginPage() {
    const navigate = useNavigate();

    const [userID, setUserID] = useContext(UserContext);

    const login = (username, password) => {
        fetch('http://localhost:1337/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then((res) => res.json())
            .then((id) => {
                // successfully logged in
                if (id > 0) {
                    setUserID(id);
                    navigate('/');
                }
                // failed to log in
                else {

                }
            });
    }

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            <form>
                <input id='username-input' type='text' placeholder='Username' autoComplete='username' />
                <input id='password-input' type='password' placeholder='Password' autoComplete='current-password' />
                <input type='button' value='Login' onClick={(e) => {
                    // login and route to home and/or inventory page
                    login(
                        `${document.querySelector('#username-input').value}`,
                        `${document.querySelector('#password-input').value}`
                    );

                    // or fail to authenticate
                }} />
            </form>
        </>
    )
}

export default LoginPage;
