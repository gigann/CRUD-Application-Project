import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';

function LoginPage() {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            <form>
                <input type='text' placeholder='Username' autoComplete='username'/>
                <input type='password' placeholder='Password' autoComplete='current-password'/>
                <input type='button' value='Login' onClick={(e) => {
                    // login and route to home and/or inventory page

                    // or fail to authenticate
                }} />
            </form>
        </>
    )
}

export default LoginPage;
