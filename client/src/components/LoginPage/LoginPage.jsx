import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';
// import { UserContext } from '../../contexts/UserContext.jsx';

function LoginPage() {
    const navigate = useNavigate();

    const [userID, setUserID] = useState();

    const login = (username, password) => {
        console.log(username + ' ' + password);
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
            .then((data) => setUserID(data.id));
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
