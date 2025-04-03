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
        fetch(`http://localhost:1337/item/${children.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res)
            .then(data => {
                children.setUpdateRender(!children.updateRender);
            })
            .catch(err => console.error(err));
    }

    return (
        (children.editable) ? (
            <>
                <form id={children.id}>
                    <input id='item-name-input' type='text' defaultValue={children.item_name}></input>
                    <input id='description-input' type='text' defaultValue={children.description}></input>
                    <input id='quantity-input' type='number' defaultValue={children.quantity}></input>
                    <input type='button' className='edit-item-button' value='Edit Item' onClick={(e) => {
                        editItem(
                            document.querySelector('#item-name-input').value,
                            document.querySelector('#description-input').value,
                            document.querySelector('#quantity-input').value
                        );
                    }}/>
                    <input type='button' className='delete-item-button' value='Delete Item' onClick={(e) => {
                        deleteItem();
                    }}/>
                </form>
            </>
        ) : (
            <>
                <div className='item-card-viewable' id={children.id} onClick={(e) => {
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
