import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './InventoryItemCard.css';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage';
import { UserContext } from '../../contexts/UserContext.jsx';

// supplied with relevant info via prop drilling
// when clicked, goes to item details page (for that specific item)
function InventoryItemCard(children) {
    const [userID, setUserID] = useContext(UserContext);
    const navigate = useNavigate();

    const editItem = (itemName, description, quantity) => {
        fetch(`http://localhost:1337/item/${children.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: parseInt(userID),
                item_name: itemName,
                description: description,
                quantity: quantity
            })
        })
            .then(res => res)
            .then(data => {
                children.setUpdateRender(!children.updateRender);
            })
            .catch(err => console.error(err));
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
                <tr className='item-card-editable' id={children.id}>
                    <th scope='row'>{children.id}</th>
                    <td scope='row'>{children.user_id}</td>
                    <td scope='row'>
                        <input id={`item-name-input-${children.id}`} type='text' defaultValue={children.item_name}></input>
                    </td>
                    <td scope='row'>
                        <input id={`description-input-${children.id}`} type='text' defaultValue={children.description}></input>
                    </td>
                    <td scope='row'>
                        <input id={`quantity-input-${children.id}`} type='number' defaultValue={children.quantity}></input>
                    </td>
                    <td scope='row'>
                        <input type='button' className='edit-item-button' value='Edit Item' onClick={(e) => {
                            editItem(
                                document.querySelector(`#item-name-input-${children.id}`).value,
                                document.querySelector(`#description-input-${children.id}`).value,
                                document.querySelector(`#quantity-input-${children.id}`).value
                            );
                        }} />
                    </td>
                    <td scope='row'>
                        <input type='button' className='delete-item-button' value='Delete Item' onClick={(e) => {
                            deleteItem();
                        }} />
                    </td>
                </tr>
            </>
        ) : (
            <>
                <tr className='item-card-viewable' id={children.id} onClick={(e) => {
                    console.log('clicked');
                        navigate(`/inventory/${children.id}`, {
                            state: {
                                id: children.id,
                                user_id: children.user_id,
                                item_name: children.item_name,
                                description: children.description,
                                quantity: children.quantity
                         } });
                }}>
                    <th scope='row'>{children.id}</th>
                    <td scope='row'>{children.user_id}</td>
                    <td scope='row'>{children.item_name}</td>
                    {(children.description.length > 100) ? (
                        <td scope='row'>{children.description.slice(0, 100)}...</td>
                    ) : (
                        <td scope='row'>{children.description}</td>
                    )}
                    <td scope='row'>{children.quantity}</td>
                </tr>
            </>
        )
    )
}

export default InventoryItemCard;

