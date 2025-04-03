import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext.jsx';

import './CreateAccountPage.css';


function CreateAccountPage() {
    const navigate = useNavigate();
    const [userID, setUserID] = useContext(UserContext);

    const createAccount = (firstName, lastName, username, password) => {
        // perform some basic validation... or not
        fetch('http://localhost:1337/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username: username,
                password: password
            })
        })
            .then((res) => res.json())
            .then((id) => {
                console.log(id);
                // successfully made account
                if (id > 0) {
                    console.log(id);
                    setUserID(id);
                    navigate('/personal_inventory');
                    alert('Your account has been successfully created.');
                }
                // failed to make account
                else {
                    alert('Please try again.');
                }
            })
            .catch((err) => {
                console.log(err, 'error making account');
            });
    }

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            <form>
                <input id='first-name-input' type='text' placeholder='First Name' autoComplete='given-name' />
                <input id='last-name-input' type='text' placeholder='Last Name' autoComplete='family-name' />
                <input id='username-input' type='text' placeholder='Username' autoComplete='username' />
                <input id='password-input' type='password' placeholder='Password' autoComplete='new-password' />
                <input type='button' value='Create Account' onClick={(e) => {
                    createAccount(
                        document.querySelector('#first-name-input').value,
                        document.querySelector('#last-name-input').value,
                        document.querySelector('#username-input').value,
                        document.querySelector('#password-input').value
                    )
                }} />
            </form>
        </>
    )
}

export default CreateAccountPage;
