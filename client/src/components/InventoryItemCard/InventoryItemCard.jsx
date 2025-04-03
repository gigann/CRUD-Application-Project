import { useState } from 'react';

import './InventoryItemCard.css';

// supplied with relevant info via prop drilling
function InventoryItemCard(children) {

    return (
        <div id={children.id}>
            <h3>{children.item_name} (x{children.quantity})</h3>
            <p><i>{children.description}</i></p>
            <p>Item ID: {children.id} | User ID: {children.user_id}</p>
        </div>
    )
}

export default InventoryItemCard;
