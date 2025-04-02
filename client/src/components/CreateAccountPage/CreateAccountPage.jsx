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

            <h1>Create Account!</h1>
        </>
    )
}

export default CreateAccountPage;
