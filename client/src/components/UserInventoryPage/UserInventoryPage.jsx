import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './UserInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard';
import { UserContext } from '../../contexts/UserContext.jsx';


function UserInventoryPage() {
    const [userID, setUserID] = useContext(UserContext);

    const navigate = useNavigate();

    // displays a list of items made by the user
    useEffect(() => {
        fetch(`http://localhost:1337/item/${userID}`)

    }, [userID])

    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
                <button className = 'edit-button'>Edit</button>
            </nav>

            <h1>Inventory</h1>

            {/* <InventoryItemCard></InventoryItemCard>
            <InventoryItemCard></InventoryItemCard>
            <InventoryItemCard></InventoryItemCard> */}
        </>
    )
}

export default UserInventoryPage;
