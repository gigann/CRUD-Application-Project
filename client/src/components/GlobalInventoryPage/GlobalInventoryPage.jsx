import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './GlobalInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard';

function GlobalInventoryPage() {
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:1337/item')

    }, [])
    return (
        <>
            <nav>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </nav>

            <h1>Global Inventory</h1>

            {/* <InventoryItemCard></InventoryItemCard>
            <InventoryItemCard></InventoryItemCard>
            <InventoryItemCard></InventoryItemCard> */}
        </>
    )
}

export default GlobalInventoryPage;
