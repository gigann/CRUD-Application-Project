import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CreateAccountPage.css';

function CreateAccountPage() {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            <form>
                <input type='text' placeholder='First Name' autoComplete='given-name'/>
                <input type='text' placeholder='Last Name' autoComplete='family-name' />
                <input type='text' placeholder='Username' autoComplete='username'/>
                <input type='password' placeholder='Password' autoComplete='new-password' />
                <input type='button' value='Create Account' onClick={(e) => {
                    // POST user to DB

                    // login and route to home and/or inventory page
                }} />
            </form>
        </>
    )
}

export default CreateAccountPage;
