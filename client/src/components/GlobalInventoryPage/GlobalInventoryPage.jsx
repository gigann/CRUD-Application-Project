import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './GlobalInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard';

function GlobalInventoryPage() {
    const navigate = useNavigate();

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

export default GlobalInventoryPage;
