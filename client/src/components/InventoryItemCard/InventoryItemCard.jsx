import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './InventoryItemCard.css';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage';

// supplied with relevant info via prop drilling
// when clicked, goes to item details page (for that specific item)
function InventoryItemCard(children) {
    const navigate = useNavigate();

    return (
        <div id={children.id} onClick={(e) => {
            navigate(`/inventory/${children.id}`, {state: children});
        }}>
            <h3>{children.item_name} (x{children.quantity})</h3>
            {(children.description.length > 100)?(
                <p><i>{children.description.slice(0, 100)}...</i></p>
            ):(
                <p><i>{children.description}</i></p>
            )}
            <p>Item ID: {children.id} | User ID: {children.user_id}</p>
        </div>
    )
}

export default InventoryItemCard;
