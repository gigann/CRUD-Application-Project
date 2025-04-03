import { useEffect, useState } from 'react';

import './ItemDetailsPage.css';
import { useNavigate, useLocation } from 'react-router-dom';

function ItemDetailsPage() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            {(location.state) ? (
                <>
                    <h1>{location.state.item_name}</h1>
                    <p>{location.state.description}</p>
                    <p>Quantity: {location.state.quantity}</p>
                    <p>Item ID: {location.state.id}</p>
                    <p>User ID: {location.state.user_id}</p>
                </>

            ) : (
                <><h1>Oops!</h1>
                    <p>The item you are looking for doesn't exist.</p>
                </>
            )}
        </>
    )
}

export default ItemDetailsPage;
