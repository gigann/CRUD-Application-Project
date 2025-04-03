import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './GlobalInventoryPage.css';
import InventoryItemCard from '../InventoryItemCard/InventoryItemCard';

function GlobalInventoryPage() {
    const navigate = useNavigate();
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/item')
            .then((res) => res.json())
            .then((data) => {
                setAllItems(data);
            });
    }, [])

    return (
        <>
            <nav>
                <button onClick={() => navigate('/')}>Return Home</button>
            </nav>

            <h1>Global Inventory</h1>

            <table>
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>User ID</th>
                        <th scope='col'>Item Name</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map((item) => (
                        <InventoryItemCard
                            key={item.id}
                            id={item.id}
                            user_id={item.user_id}
                            item_name={item.item_name}
                            description={item.description}
                            quantity={item.quantity}
                            editable={false}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default GlobalInventoryPage;
