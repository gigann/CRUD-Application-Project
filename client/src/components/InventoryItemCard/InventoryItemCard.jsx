import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './InventoryItemCard.css';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage';

// supplied with relevant info via prop drilling
// when clicked, goes to item details page (for that specific item)
function InventoryItemCard(children) {
    const navigate = useNavigate();

    const editItem = (itemName, description, quantity) => {

    }

    const deleteItem = () => {

    }

    return (
        (children.editable) ? (
            <>
                <form id={children.id}>
                    <input id='item-name-input' type='text' defaultValue={children.item_name}></input>
                    <input id='description-input' type='text' defaultValue={children.description}></input>
                    <input id='quantity-input' type='number' defaultValue={children.quantity}></input>
                    <button className='edit-item-button' onClick={(e) => {
                        editItem(
                            document.querySelector('#item-name-input').value,
                            document.querySelector('#description-input').value,
                            document.querySelector('#quantity-input').value
                        );
                    }}>Edit Item</button>
                    <button className='delete-item-button' onClick={(e) => {
                        deleteItem();
                    }}>Delete Item</button>
                </form>
            </>
        ) : (
            <>
                <div id={children.id} onClick={(e) => {
                    navigate(`/inventory/${children.id}`, { state: children });
                }}>
                    <h3>{children.item_name} (x{children.quantity})</h3>
                    {(children.description.length > 100) ? (
                        <p><i>{children.description.slice(0, 100)}...</i></p>
                    ) : (
                        <p><i>{children.description}</i></p>
                    )}
                    <p>Item ID: {children.id} | User ID: {children.user_id}</p>
                </div>
            </>
        )
    )
}

export default InventoryItemCard;
